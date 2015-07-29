from django.db import models

class Test(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return  self.name

class Person(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()

    def __str__(self):
        return  '%s %s'% (self.name,self.age)

class Book(models.Model):
    name = models.CharField(max_length=50)
    pub_date = models.DateField()