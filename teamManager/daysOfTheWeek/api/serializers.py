from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer
from daysOfTheWeek.models import DaysOfWeek


class DaysOfWeekSerializer(ModelSerializer):
    class Meta:
        model = DaysOfWeek
        fields = '__all__'
