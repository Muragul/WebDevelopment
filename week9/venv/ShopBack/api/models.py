from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    category_id = models.IntegerField(default=0)
    price = models.FloatField(default=0)
    description = models.TextField()
    count = models.IntegerField(default=0)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'category_id': self.category_id,
            'price': self.price,
            'description': self.description,
            'count': self.count
        }


class Category(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
