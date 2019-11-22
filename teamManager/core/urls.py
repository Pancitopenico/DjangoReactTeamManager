from rest_framework import routers
from core.api.viewsets import TeamViewSet
from daysOfTheWeek.api.viewsets import DaysOfWeekViewSet

router = routers.DefaultRouter()
router.register('api/teams', TeamViewSet, 'team')
router.register('api/days', DaysOfWeekViewSet, 'daysOfTheWeek')

urlpatterns = router.urls
