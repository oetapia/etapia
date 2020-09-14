from django.db import models

from django.core.validators import RegexValidator
from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtail.admin.edit_handlers import MultiFieldPanel, FieldPanel, InlinePanel, PageChooserPanel, HelpPanel, FieldRowPanel
from wagtail.documents.models import Document
from wagtail.documents.edit_handlers import DocumentChooserPanel
from wagtail.core.models import Orderable, Page
from modelcluster.fields import ParentalKey
from wagtail.images.edit_handlers import ImageChooserPanel
from modelcluster.models import ClusterableModel


class FontItem(Orderable):
    font_url = models.CharField(max_length=255)
    page = ParentalKey("Sitewide", related_name="fonts")
    panels = [FieldPanel("font_url")]

    @property
    def url(self):
        if self.font_url:
            return self.font_url
        return "#"


@register_setting
class Sitewide(BaseSetting, ClusterableModel):
    logo = models.ForeignKey('wagtaildocs.Document', null=True, blank=True, on_delete=models.SET_NULL)
    favicon =  models.ForeignKey('wagtailimages.Image',null=True, blank=True, on_delete=models.CASCADE,related_name='favicon')
    social_image =  models.ForeignKey('wagtailimages.Image',null=True, blank=True, on_delete=models.CASCADE,related_name='social',help_text="Social Open Graph Image will be used when no Main Image is defined")
    header_tracking_code = models.TextField(blank=True,help_text="Tags <script> ARE necessary")
    footer_tracking_code = models.TextField(blank=True,help_text="Tags <script> ARE necessary")

    panels = [
        MultiFieldPanel([
            DocumentChooserPanel('logo'),
            ImageChooserPanel('favicon'),
            ImageChooserPanel('social_image')
        ], heading="Images"),
        MultiFieldPanel([
            FieldPanel("header_tracking_code"),
            FieldPanel("footer_tracking_code")
        ], heading="Tracking code"),
        InlinePanel("fonts", label="Fonts")
    ]

'''
class TranslationRow(Orderable):
    slug = models.SlugField(unique=True, verbose_name="", help_text="Slug")
    en = models.CharField(max_length=255, null=True, blank=True, verbose_name="", help_text="English")
    kr = models.CharField(max_length=255, null=True, blank=True, verbose_name="", help_text="Korean")

    translation = ParentalKey('Translation', on_delete=models.CASCADE, related_name='common_terms')

    panels = [
        FieldRowPanel([
            FieldPanel("slug"),
            FieldPanel("en"),
            FieldPanel("kr"),
        ]),        
    ]

'''
'''
class SiteDetailsLang(Orderable):
    # Contact
    contact_title = models.CharField(max_length=255,null=True,blank=True,)
    phone_validator = RegexValidator(regex=r'^\+?[0-9\-]{8,20}$', message="Phone number must be only digits, '+' and '-'. Up to 20 characters allowed.")
    contact_phone = models.CharField(validators=[phone_validator], max_length=30,null=True,blank=True,)
    contact_address = models.CharField(max_length=255,null=True,blank=True,)
    contact_link = models.EmailField(help_text="E-mail address",null=True,blank=True,)
    contact_page = models.ForeignKey(
        "wagtailcore.Page",
        null=True,
        blank=True,
        related_name="+",
        on_delete=models.CASCADE,
    )

    # SiteWide
    site_title = models.CharField(max_length=100,null=True,blank=True,)
    site_description = models.CharField(max_length=255,null=True,blank=True,)

    # Lang
    lang_slug = models.SlugField(unique=True)
    lang_name = models.CharField(max_length=100,null=True,blank=True,)

    contact = ParentalKey('Translation', on_delete=models.CASCADE, related_name='site_details')

    panels = [
        HelpPanel("<h2 style='color: #339797'>Language</h2>"),
        FieldPanel("lang_slug"),
        FieldPanel("lang_name"),
        HelpPanel("<h2 style='color: #339797'>Contact</h2>"),
        FieldPanel("contact_title"),
        FieldPanel("contact_phone"),
        FieldPanel("contact_address"),
        FieldPanel("contact_link"),
        FieldPanel("contact_page"),
        HelpPanel("<h2 style='color: #339797'>SiteWide</h2>"),
        FieldPanel("site_title"),
        FieldPanel("site_description"),
    ]
'''

'''
@register_setting
class Translation(BaseSetting, ClusterableModel):
    panels = [
        MultiFieldPanel([
            InlinePanel('site_details'),
        ], heading="Site Details"),
        MultiFieldPanel([
            InlinePanel('common_terms'),
        ], heading="Common Terms"),
    ]
'''