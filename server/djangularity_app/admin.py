from django.contrib.admin import register, ModelAdmin

from djangularity_app.models import Article


@register(Article)
class ArticleAdmin(ModelAdmin):
    list_display = ["id", "title", "created", "updated"]
