
# index.py
# Register Wagtail models with Algolia search


from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register

from .models import CasePage


@register(CasePage)
class CasePageIndex(AlgoliaIndex):
    """Register Case Page Index with Algolia."""

    fields = ("title", "seo_title", "search_description","body")
    settings = {
        "searchableAttributes": [
            "title",
            "seo_title",
            "search_description",
            "body",
        ]
    }
    index_name = 'exp2'