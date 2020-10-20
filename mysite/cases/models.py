from django import forms
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.db import models
from django.utils import timezone

# Create your models here.


from modelcluster.fields import ParentalKey, ParentalManyToManyField
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase

from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField,StreamField
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel, MultiFieldPanel,StreamFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
#from wagtail.search import index
#from streams import blocks

#from miscellaneous.translations import TranslatablePageMixin
#from menus.models import OrderableInMenuPageMixin

from wagtail.snippets.models import register_snippet

#class BlogIndexPage(Page, TranslatablePageMixin, OrderableInMenuPageMixin):
class CaseIndexPage(Page):    
    #review https://timonweb.com/tutorials/prevent-users-from-creating-certain-page-types-in-wagtail-cms/
    #limits creating more pages by editors 
    #is_creatable = False
    #
    intro = models.CharField(max_length=250,blank=True,null=True)
    content_panels = Page.content_panels + [
        FieldPanel('intro', classname="full"),
    ]
    #subpage_types = ['BlogPage','BlogTagIndexPage']

    #promote_panels = Page.promote_panels + OrderableInMenuPageMixin.panels

    '''  
    settings_panels = Page.settings_panels + [
        MultiFieldPanel(TranslatablePageMixin.panels, 'Language links'),
    ]
    '''
    def get_context(self, request):
        context = super().get_context(request)
        #   blogpages = self.get_children().live().public().order_by('-go_live_at')
        blogpages = CasePage.objects.child_of(self).live().public().filter(go_live_at__lt=timezone.now()).order_by('-go_live_at')
        paginator = Paginator(blogpages, 12) 
        page = request.GET.get("page")

        try:
            # If the page exists and the ?page=x is an int
            posts = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            posts = paginator.page(1)
        except EmptyPage:
            # If the ?page=x is out of range (too high most likely)
            # Then return the last page
            posts = paginator.page(paginator.num_pages)

        # "posts" will have child pages; you'll need to use .specific in the template
        # in order to access child properties, such as youtube_video_id and subtitle
        context["posts"] = posts
        return context

'''
class BlogPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'BlogPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )
'''
#class BlogPage(Page, TranslatablePageMixin, OrderableInMenuPageMixin):
class CasePage(Page):
    #limits parent type to only BlogIndexPage
    parent_page_types =  ['CaseIndexPage']
    #
    #date = models.DateField("Post date") #removed to order_by go_live_at
    intro = models.CharField(max_length=250,blank=True,null=True)
    body = RichTextField(blank=True)
    date_start = models.DateField(blank=True,null=True)
    date_end = models.DateField(blank=True,null=True)
    location = models.CharField(max_length=100,blank=True,null=True)
    industry = models.CharField(max_length=100,blank=True,null=True)
    full_time = models.BooleanField(blank=True,null=True,help_text="Full time job")

    #tags = ClusterTaggableManager(through=BlogPageTag, blank=True)
    #categories = ParentalManyToManyField('blog.BlogCategory', blank=True)
    # add non full time jobs 
    # add main image, next images
    '''body_rich = StreamField(
        [
            ("cards",  blocks.CardBlock()),
            ("gallery",  blocks.GalleryBlock()),
        ],
        null=True,
        blank=True,
        name="body_rich"
    )
    '''
    def main_image(self):
        gallery_item = self.gallery_images.first()
        if gallery_item:
            return gallery_item.image
        else:
            return None
    '''
    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]
    '''
    content_panels = Page.content_panels + [
        #MultiFieldPanel([
            #FieldPanel('date'),
            #FieldPanel('tags'),
            #FieldPanel('categories', widget=forms.CheckboxSelectMultiple),
        #], heading="Blog information"),
        FieldPanel('intro'),
        FieldPanel('date_start'),
        FieldPanel('date_end'),
        FieldPanel('full_time'),
        FieldPanel('industry'),
        FieldPanel('location'),
        FieldPanel('body'),
        InlinePanel('gallery_images', label="Images"),
        #StreamFieldPanel ('body_rich'),
    ]

    #promote_panels = Page.promote_panels + OrderableInMenuPageMixin.panels

    
   
   #settings_panels = Page.settings_panels + [
    #    MultiFieldPanel(TranslatablePageMixin.panels, 'Language links'),
    #]
    
 
    @property
    def prev_sibling(self):
        if self.go_live_at is None:
            return self.get_siblings().none
        #                                                                             Take only siblings with a         Among these more recent siblings
        #                                                                             bigger date (more recent)         Order by date (old -> new)
        #                                       Don't print future                    than the current one              And take the oldest (closest to current) 
        return self.get_siblings().filter(go_live_at__lt=timezone.now()).live().filter(go_live_at__gt=self.go_live_at).order_by('go_live_at').first

    @property
    def next_sibling(self):
        if self.go_live_at is None:
            return self.get_siblings().none
        #                                                                             Take only siblings with a         Among these older siblings
        #                                                                             lower date (older)                Order by date (old -> new)
        #                                       Don't print future                    than the current one              And take the newest (closest to current) 
        return self.get_siblings().filter(go_live_at__lt=timezone.now()).live().filter(go_live_at__lt=self.go_live_at).order_by('go_live_at').last


class CasePageGalleryImage(Orderable):
    page = ParentalKey(CasePage, on_delete=models.CASCADE, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    #caption = models.CharField(blank=True, max_length=250)

    panels = [
        ImageChooserPanel('image'),
        #FieldPanel('caption'),
    ]

'''
class BlogTagIndexPage(Page, TranslatablePageMixin, OrderableInMenuPageMixin):
    #limits creating more pages by editors
    is_creatable = False
    content_panels = Page.content_panels + [
        MultiFieldPanel(TranslatablePageMixin.panels, 'Language links'),
    ]

    promote_panels = Page.promote_panels + OrderableInMenuPageMixin.panels

    def get_context(self, request):

        # Filter by tag
        tag = request.GET.get('tag')
        blogpages = BlogPage.objects.filter(tags__name=tag)

        # Update template context
        context = super().get_context(request)
        context['blogpages'] = blogpages
        return context


'''

'''
@register_snippet
class BlogCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ForeignKey(
        'wagtailimages.Image', null=True, blank=True,
        on_delete=models.SET_NULL, related_name='+'
    )

    panels = [
        FieldPanel('name'),
        ImageChooserPanel('icon'),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'blog categories'

'''

"""Search Page models."""
from django.conf import settings  # 1
from wagtail.core.models import Page  # 2
from algoliasearch import algoliasearch  # 3


#  4
class SearchPage(Page):
    """A search page class."""

    template = "search_page.html"

    class Meta:
        verbose_name = "Search Page"
        verbose_name_plural = "Search Pages"

    def get_context(self, request):
        """Algolia Searching. This view is used for page requests, not typing autocomplete."""
        context = super().get_context(request)
        query_string = request.GET.get("q") or False
        if query_string:
            client = algoliasearch.Client(
                settings.ALGOLIA.get("6WI6WCU8N4"), settings.ALGOLIA.get("1b64a191c9eae1f5030161d78da30600")
            )
            algolia_index = client.init_index("test_index")
            context["results"] = algolia_index.search(query_string)
        return context