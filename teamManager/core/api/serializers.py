from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer
from core.models import Team
from daysOfTheWeek.api.serializers import DaysOfWeekSerializer


class TeamSerializer(ModelSerializer):

    daysOfWeek = DaysOfWeekSerializer(many=True)

    class Meta:
        model = Team
        fields = ('name', 'email', 'username', 'city',
                  'daysOfWeek', 'posts', 'albums', 'photos')
