from django.db import models


class DaysOfWeek(models.Model):
    dayOfWeek = models.CharField(max_length=20)

    def __str__(self):
        return self.dayOfWeek
