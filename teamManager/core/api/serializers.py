from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer
from core.models import Team
from daysOfTheWeek.models import DaysOfWeek
from daysOfTheWeek.api.serializers import DaysOfWeekSerializer


class TeamSerializer(ModelSerializer):

    daysOfWeek = DaysOfWeekSerializer(many=True)

    class Meta:
        model = Team
        fields = ('name', 'email', 'username', 'city',
                  'daysOfWeek', 'posts', 'albums', 'photos')

    def create_daysOfWeek(self, daysOfWeek, team):
        """
        Custom method
        This method will create every single day and add inside my team
        """
        for dayOfWeek in daysOfWeek:
            day = DaysOfWeek.objects.create(**dayOfWeek)
            team.daysOfWeek.add(day)

    def create(self, validated_data):
        """
        Override the normal create method from django rest (POST)
        """
        daysOfWeek = validated_data['daysOfWeek']
        del validated_data['daysOfWeek']

        team = Team.objects.create(**validated_data)
        self.create_daysOfWeek(daysOfWeek, team)

        team.save()

        return team
