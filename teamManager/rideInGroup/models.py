from django.db import models


class RideInGroup(models.Model):
    rideInGroup = models.CharField(max_length=30)

    def __str__(self):
        return self.rideInGroup
