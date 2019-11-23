from rest_framework import routers
from core.api.viewsets import TeamViewSet

router = routers.DefaultRouter()
router.register('teams', TeamViewSet, 'team')

urlpatterns = router.urls
