from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=300, default='name')
    description = models.TextField(default='')
    city = models.CharField(max_length=300, default='city')
    address = models.CharField(max_length=300, default='address')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=300, default='name')
    description = models.TextField(default='')
    salary = models.FloatField(default=1000)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company_id
        }