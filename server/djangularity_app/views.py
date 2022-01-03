from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Article
from .serializars import ArticleMetaSerializer, ArticleContentSerializer


class ArticleViewSet(ReadOnlyModelViewSet):
    queryset = Article.objects.all()

    def get_serializer_class(self):
        if self.action == "list":
            return ArticleMetaSerializer
        if self.action == "retrieve":
            return ArticleContentSerializer
        return None
