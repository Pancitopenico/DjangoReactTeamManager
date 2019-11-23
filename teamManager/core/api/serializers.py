from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer
from core.models import Team


class TeamSerializer(ModelSerializer):

    class Meta:
        model = Team
        fields = ('id', 'name', 'email', 'username', 'city',
                  'daysOfWeek', 'rideInGroup', 'posts', 'albums', 'photos')
