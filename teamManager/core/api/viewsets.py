from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import TeamSerializer
from core.models import Team


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [
        permissions.AllowAny
    ]
