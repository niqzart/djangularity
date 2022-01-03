from rest_framework.serializers import ModelSerializer

from .models import Article


class ArticleMetaSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ["id", "title", "created", "updated"]


class ArticleContentSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ["content"]
