from rest_framework import viewsets, mixins, generics, permissions
from django.db.models import Q
from django.core.mail import send_mail
from django.conf import settings

from .models import (
    Service, Project, Testimonial, Partner, SiteSetting,
    ContactMessage, SocialLink
)
from .serializers import (
    ServiceSerializer, ProjectSerializer,
    TestimonialListSerializer, TestimonialCreateSerializer,
    PartnerSerializer, SiteSettingSerializer,
    ContactMessageSerializer, SocialLinkSerializer
)

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all().order_by("order")
    serializer_class = ServiceSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProjectSerializer
    def get_queryset(self):
        qs = Project.objects.all().order_by("order")
        category = self.request.query_params.get("category")
        search = self.request.query_params.get("search")
        if category and category != "all":
            qs = qs.filter(category=category)
        if search:
            qs = qs.filter(Q(title__icontains=search) | Q(description__icontains=search))
        return qs

class TestimonialViewSet(mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         viewsets.GenericViewSet):
    permission_classes = [permissions.AllowAny]
    def get_queryset(self):
        return Testimonial.objects.filter(approved=True).order_by("order")
    def get_serializer_class(self):
        return TestimonialCreateSerializer if self.action == "create" else TestimonialListSerializer

class PartnerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Partner.objects.all().order_by("order")
    serializer_class = PartnerSerializer

class SiteSettingViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SiteSetting.objects.all()
    serializer_class = SiteSettingSerializer

class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialLink.objects.all().order_by("order")
    serializer_class = SocialLinkSerializer

class ContactMessageCreateAPIView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ContactMessageSerializer
    queryset = ContactMessage.objects.all()

    def perform_create(self, serializer):
        obj = serializer.save()
        try:
            if getattr(settings, "EMAIL_HOST", None):
                send_mail(
                    subject=f"New Contact Message from {obj.name}",
                    message=f"Email: {obj.email}\nPhone: {obj.phone}\n\n{obj.message}",
                    from_email=getattr(settings, "DEFAULT_FROM_EMAIL", None),
                    recipient_list=[getattr(settings, "DEFAULT_TO_EMAIL", obj.email)],
                    fail_silently=True,
                )
        except Exception:
            pass
