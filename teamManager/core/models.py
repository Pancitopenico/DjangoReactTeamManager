from django.db import models
from daysOfTheWeek.models import DaysOfWeek
from rideInGroup.models import RideInGroup


class Team(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    daysOfWeek = models.ManyToManyField(DaysOfWeek)
    #rideInGroup = models.OneToOneField(DaysOfWeek)
    posts = models.IntegerField(null=True, blank=True)
    albums = models.IntegerField(null=True, blank=True)
    photos = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
