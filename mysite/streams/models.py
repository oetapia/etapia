from django.db import models
from django.utils.html import escape
from wagtail.core import hooks
from wagtail.core.rich_text import LinkHandler

# Create your models here.

class NewWindowExternalLinkHandler(LinkHandler):
    # This specifies to do this override for external links only.
    identifier = 'external'

    @classmethod
    def expand_db_attributes(cls, attrs):
        href = attrs["href"]
        # Let's add the target attr, and also rel="noopener" + noreferrer fallback.
        # See https://github.com/whatwg/html/issues/4078.
        return '<a href="%s" target="_blank" rel="noopener noreferrer">' %  escape(href) 
        #return '%s' % escape(href)


@hooks.register('register_rich_text_features')
def register_external_link(features):
    features.register_link_type(NewWindowExternalLinkHandler)