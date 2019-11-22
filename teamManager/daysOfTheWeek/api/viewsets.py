from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import DaysOfWeekSerializer
from daysOfTheWeek.models import DaysOfWeek


class DaysOfWeekViewSet(ModelViewSet):
    queryset = DaysOfWeek.objects.all()
    serializer_class = DaysOfWeekSerializer
    permission_classes = [
        permissions.AllowAny
    ]
