from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    daysOfWeek = models.CharField(max_length=100)
    rideInGroup = models.CharField(max_length=100)
    posts = models.IntegerField(null=True, blank=True)
    albums = models.IntegerField(null=True, blank=True)
    photos = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
