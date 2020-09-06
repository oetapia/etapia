"""streamfields location"""

from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock
from wagtail.documents.blocks import DocumentChooserBlock
from wagtail.core.blocks import PageChooserBlock


from django import forms

class TitleAndTextBlock(blocks.StructBlock):
    """title and text"""

    title = blocks.CharBlock(required=True,help_text='Add your title')
    text = blocks.TextBlock(required=True,help_text='Add addtional text')

    class Meta: #noqa
        template = "streams/title_and_text_block.html"
        icon ="edit"
        label = "Title and text"

class LinksBlock(blocks.StructBlock):
    """internal and external links"""
    link_page = PageChooserBlock(required=False, label="Link",help_text="If selected LINK or DOC will not be chosen")
    link_doc = DocumentChooserBlock(label="Link",required=False,help_text="If LINK_PAGE is selected it will not be chosen")
    link = blocks.CharBlock(label="Link URL",required=False, max_length=255,help_text="If LINK_PAGE is selected it will not be chosen, must include https:// or http:// in address")
    link_title = blocks.CharBlock(required=False, max_length=100)
    link_type = blocks.ChoiceBlock(choices=[('btn-primary', 'Primary Button'), ('btn-secondary', 'Secondary Button'), ('btn-info', 'Info Button'), ('btn-link', 'Link')],required=False,max_length=200)
    stretch = blocks.BooleanBlock(required=False,help_text="Makes the containing block clickable, select only ONE")

    class Meta: #noqa
        icon = "link"
        label ="buttons"

class HubspotForms(blocks.StructBlock):
    """Hubspot Forms"""
    cls = blocks.CharBlock(required=False, label="Class")
    portalId = blocks.CharBlock(required=True,help_text='Only paste portalId')
    formId = blocks.TextBlock(required=True,help_text='Only paste formId')
    content = blocks.RichTextBlock(required=False)

    class Meta: #noqa
        template = "streams/hubspot_form_block.html"
        icon ="edit"
        label = "Hubspot Forms"        
        


class RichTextBlock(blocks.RichTextBlock):
    """Richtext with all the features"""
    class Meta: #noqa
        template = "streams/richtext_block.html"
        icon ="doc-full"
        label = "Full RichText"


class SimpleRichTextBlock(blocks.RichTextBlock):
    """Richtext with less the features"""

    def __init__(self, empty=False,help_text=None,editor='default', features=None,**kwargs):
        super().__init__(**kwargs)
        self.features = [
            "bold",
            "italic",
            "ul",
            "link",
            "image",
            "document",
        ]
        

    class Meta: #noqa
        template = "streams/richtext_block.html"
        icon ="edit"
        label = "Simple RichText"


    #page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='gallery_images')
    #image = models.ForeignKey(
    #    'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    #)



class CardTabItem(blocks.StructBlock):
    title = blocks.CharBlock(required=False, max_length=100,help_text="Tab name, if EMPTY will NOT show tabs")
    cls = blocks.CharBlock(required=False, label="Class")
    content = blocks.RichTextBlock(required=False)

    class Meta: #noqa
        icon ="edit"
        label = "Tab Items"
        form_classname = 'struct-block card-tab'
        form_template = 'streams/block-form-child.html'
        

class CardItem(blocks.StructBlock):
    image = ImageChooserBlock(required=False)
    title = blocks.CharBlock(required=False,max_length=40)
    cls = blocks.TextBlock(required=False,max_length=200)
    text = SimpleRichTextBlock(required=False,label="Text")
    tabs = blocks.ListBlock(CardTabItem, label="Tab Items")
    buttons = blocks.ListBlock (LinksBlock, label="Buttons")
    class Meta: #noqa
        icon ="doc-full"
        label = "Items"
        form_classname = 'struct-block card-item'
        form_template = 'streams/block-form-child.html'

class CardBlock(blocks.StructBlock):
    """cards with image"""

    title = blocks.CharBlock(required=False, help_text="Add your title")
    full_width = blocks.BooleanBlock(required=False,help_text="Makes the row reach edge to edge")
    cls = blocks.CharBlock(required=False, label="Class")
    col_len = blocks.ChoiceBlock(choices=[('row-cols-md-3', '3 Columns'), ('row-cols-md-2', '2 Columns'), ('row-cols-md-4', '4 Columns'), ('row-cols-md-5', '5 Columns'), ('row-cols-md-6', '6 Columns')],required=False,max_length=200)
    cards = blocks.ListBlock (CardItem, label="Items")
    

    class Meta: #noqa
        template = "streams/card_block.html"
        icon = "placeholder"
        label = "Cards"
        form_classname = 'struct-block card-block'
        form_template = 'streams/block-form.html'


class ColBlock(blocks.StructBlock):
    cls = blocks.CharBlock(required=False, label="Class",help_text="Add bootstrap notation e.g. col-md-3")
    img = ImageChooserBlock(required=False, label="Main Image")
    round_img = blocks.BooleanBlock(required=False,help_text="Turns the image into a circle")
    #alt = blocks.CharBlock(required=False, max_length=255, label="Popover Text")
    content = blocks.RichTextBlock(required=False)
    

    class Meta: #noqa
        icon ="edit"
        label = "Column"
        form_classname = 'struct-block row-item'
        form_template = 'streams/block-form-child.html'
        help_text ="Define each COLumn"

class TextColorPicker(blocks.RegexBlock):
    def __init__(self, **kwargs):
        super().__init__(regex=r'^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$|^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},[01][.]?[0-9]*\)$',
                         error_messages={"invalid": "Not a valid color. Enter a color in hex format ('#FFFFFF' or '#FFFFFFFF') or rgba format ('rgba(120,120,200,0.7')"},
                         **kwargs)

    class Meta: #noqa
        icon = "grip"
        label = "Color Picker"


class RowBlock(blocks.StructBlock):
    title = blocks.CharBlock(required=False,label="Title")
    full_width = blocks.BooleanBlock(required=False,help_text="Makes the row reach edge to edge")
    dark = blocks.BooleanBlock(required=False,help_text="Turns the text into white and adds a darker overlay")
    cls = blocks.CharBlock(required=False, label="Class",help_text="Add Bootstrap notation e.g. mt-3 for margin-top 3em")
    id = blocks.CharBlock(required=False, max_length=100, label="ID",help_text="Add any unique name, e.g.row1")
    bg_color = TextColorPicker(required=False,label="BG Color",help_text="Add a HEX or RGBA",group="bg")
    bg_img = ImageChooserBlock(required=False, label="Background Image",group="bg")
    bg_repeat = blocks.BooleanBlock(required=False,label="Background Repeat",group="bg")
    bg_fixed = blocks.BooleanBlock(required=False,label="Background Fixed Parallax Style",group="bg")
    cols = blocks.ListBlock(ColBlock, label="Columns")
    buttons = blocks.ListBlock (LinksBlock, label="Buttons")
    
    class Meta: #noqa
        template = "streams/row_block.html"
        icon ="form"
        label = "Row"
        form_classname = 'struct-block row-block'
        form_template = 'streams/block-form.html'
        help_text ="Define the ROW look by adding elements"

class CarouselItemBlock(blocks.StructBlock):
    dark = blocks.BooleanBlock(required=False,help_text="Turns the text into white and adds a darker overlay",group="style")
    cls = blocks.CharBlock(required=False, label="Class",group="style")
    bg_color = TextColorPicker(required=False,group="style")
    bg_img = ImageChooserBlock(required=False, label="Background Image")
    bg_vid = DocumentChooserBlock(required=False, label="Background Video")
    title = blocks.CharBlock(required=False, max_length=255)
    content = blocks.RichTextBlock(required=False)
    buttons = blocks.ListBlock (LinksBlock, label="Buttons")
    class Meta: #noqa
        icon ="image"
        label = "Carousel Item"
        form_classname = 'struct-block carousel-item'
        form_template = 'streams/block-form-child.html'


class CarouselBlock(blocks.StructBlock):
    id = blocks.CharBlock(required=True, max_length=100, label="ID",help_text="Add any unique name, e.g. carousel1")
    cls = blocks.CharBlock(required=False, label="Class")
    side_ctrl = blocks.BooleanBlock(required=False)
    indicator_ctrl = blocks.BooleanBlock(required=False)
    items = blocks.ListBlock(CarouselItemBlock, label="Carousel Items")

    class Meta: #noqa
        template = "streams/carousel_block.html"           
        icon ="placeholder"
        label = "Carousel"
        form_classname = 'struct-block carousel-block'
        form_template = 'streams/block-form.html'


class GalleryImgBlock(blocks.StructBlock):
    image = ImageChooserBlock(required=True)
    #caption = blocks.CharBlock(required=False)

    class Meta: #noqa
        icon ="image"
        label = "Gallery Image"
        form_classname = 'struct-block gallery-item'
        form_template = 'streams/block-form-child.html'


class GalleryBlock(blocks.StructBlock):
    title = blocks.CharBlock(required=False,label="Title")
    id = blocks.CharBlock(required=True, max_length=100, label="ID",help_text="Add any unique name, e.g. gallery1")
    full_width = blocks.BooleanBlock(required=False,help_text="Makes the row reach edge to edge")
    cls = blocks.CharBlock(required=False, label="Class")
    imgs = blocks.ListBlock(GalleryImgBlock, label="Gallery Images")
   
    class Meta: #noqa
        template = "streams/image_block.html"           
        icon ="image"
        label = "Gallery"
        form_classname = 'struct-block gallery-block'
        form_template = 'streams/block-form.html'


class ButtonBlock(blocks.StructBlock):
    cls = blocks.CharBlock(required=False, label="Class")
    image = ImageChooserBlock(required=False)
    title = blocks.CharBlock(required=False,label="Title")
    content = blocks.CharBlock(required=False,label="Content")
    link = PageChooserBlock(required=False, label="Link")

    class Meta: #noqa
        icon ="radio-full"
        label = "Button"
        form_classname = 'struct-block button-item'
        form_template = 'streams/block-form-child.html'

class ButtonNavBlock(blocks.StructBlock):
    title = blocks.CharBlock(required=False,label="Title")
    full_width = blocks.BooleanBlock(required=False,help_text="Makes the row reach edge to edge")
    dark = blocks.BooleanBlock(required=False,help_text="Turns the text into white and adds a darker overlay")
    cls = blocks.CharBlock(required=False, label="Class")
    bg_color = TextColorPicker(required=False)
    cols = blocks.ListBlock(ButtonBlock, label="Buttons")
    

    class Meta: #noqa
        template = "streams/button_block.html"
        icon ="placeholder"
        label = "Buttons"
        form_classname = 'struct-block button-block'
        form_template = 'streams/block-form.html'
