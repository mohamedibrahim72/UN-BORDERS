"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from core.views import (
    ServiceViewSet, ProjectViewSet, TestimonialViewSet, PartnerViewSet,
    SiteSettingViewSet, SocialLinkViewSet, ContactMessageCreateAPIView
)

router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='services')
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'testimonials', TestimonialViewSet, basename='testimonials')
router.register(r'partners', PartnerViewSet, basename='partners')
router.register(r'settings', SiteSettingViewSet, basename='settings')
router.register(r'social-links', SocialLinkViewSet, basename='social-links')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/contact/', ContactMessageCreateAPIView.as_view(), name='contact-create'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
