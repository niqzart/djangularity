from django.db.models import Model, BigAutoField, CharField, TextField, DateField


class Article(Model):
    id = BigAutoField(primary_key=True)
    title = CharField(max_length=200, null=False)
    content = TextField(null=False)
    created = DateField(null=False, auto_now_add=True)
    updated = DateField(null=False, auto_now=True)
