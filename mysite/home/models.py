from django.db import models

from wagtail.core.models import Page

from wagtail.admin.edit_handlers import FieldPanel,FieldRowPanel,StreamFieldPanel,MultiFieldPanel
from wagtail.core.fields import StreamField,RichTextField
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.documents.edit_handlers import DocumentChooserPanel
#from streams import blocks
from wagtail.snippets.edit_handlers import SnippetChooserPanel

#from miscellaneous.translations import TranslatablePageMixin
#from menus.models import OrderableInMenuPageMixin

#class HomePage(Page, TranslatablePageMixin, OrderableInMenuPageMixin):

class HomePage(Page):
    template = "home/home_page.html"
    intro = models.CharField(max_length=250,blank=True,null=True)
    body = RichTextField(blank=True)
    '''
    content = StreamField(
        [
            #("title_and_text",  blocks.TitleAndTextBlock()),
            #("full_richtext",  blocks.RichTextBlock()),
            #("simple_richtext",  blocks.SimpleRichTextBlock()),
            #("cards",  blocks.CardBlock()),
            #("rows",  blocks.RowBlock()),
            #("carousel",  blocks.CarouselBlock()),
            #("gallery",  blocks.GalleryBlock()),
            #("hform",  blocks.HubspotForms()),
            #("buttons",  blocks.ButtonNavBlock()),
        ],

        null=True,
        blank=True,
        name="content"
    )
    '''

    main_image = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, related_name='+',null=True,blank=True)
    icon = models.ForeignKey('wagtaildocs.Document', null=True, blank=True, on_delete=models.SET_NULL)
    no_child = models.BooleanField(default=False, blank=True)
    no_siblings = models.BooleanField(default=False, blank=True)
    '''
    ad2 = models.ForeignKey(
        'miscellaneous.Ads',          # Replace this one with where to find the advert
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    '''
     # panels # 
    content_panels = Page.content_panels + [
        FieldPanel ("intro"),
        FieldPanel ("body"),
        #StreamFieldPanel ("content"),
    ]



    promote_panels = Page.promote_panels + [
        MultiFieldPanel([
        FieldRowPanel([ImageChooserPanel('main_image'),
        DocumentChooserPanel('icon')]),
        FieldPanel ("no_child",help_text="Will NOT show children as cards if selected"),
        FieldPanel ("no_siblings",help_text="Will NOT show lower menu with siblings and parent"),
        ], heading="Intro"),        
        #MultiFieldPanel([
        #    SnippetChooserPanel('ad2'),
        #], heading="Adverts"),
    ] #+ OrderableInMenuPageMixin.panels
    
    #settings_panels = Page.settings_panels + [
    #    MultiFieldPanel(TranslatablePageMixin.panels, 'Language links'),
    #]
    

    
    #property defines children
    
    def get_context(self, request):
        context = super().get_context(request)
        pages = self.get_children().live().public().in_menu()
        context['pages'] = pages
        return context
    
    #property defines elements at end_nav differently for each page type
    
    @property
    def prev_sibling(self):
        return self.get_prev_siblings().live().in_menu().first

    @property
    def next_sibling(self):
        return self.get_next_siblings().live().in_menu().first
    
    class Meta: #none
        verbose_name ="Flex Page"
        verbose_name_plural = "Flex Pages"