from django.db import models

class TimeStamped(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True

class Service(TimeStamped):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.title

class Project(TimeStamped):
    CATEGORY_CHOICES = [
        ('architectural', 'معماري (Architectural)'),
        ('structural', 'إنشائي (Structural)'),
        ('electrical', 'كهرباء (Electrical)'),
        ('mechanical', 'ميكانيكا (Mechanical)'),
        ('exterior', 'تصميم خارجي (Exterior Design)'),
    ]
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='architectural')
    order = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/')
    def __str__(self):
        return f"Image for {self.project.title}"

class Testimonial(TimeStamped):
    name = models.CharField(max_length=150)
    comment = models.TextField()
    rating = models.PositiveIntegerField(default=5)
    approved = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.name

class Partner(TimeStamped):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='partners/')
    order = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.name

class SiteSetting(models.Model):
    company_name = models.CharField(max_length=200)
    company_name_en = models.CharField(max_length=200, blank=True)
    company_name_ar = models.CharField(max_length=200, blank=True)
    slogan = models.CharField(max_length=300, blank=True)
    slogan_en = models.CharField(max_length=300, blank=True)
    slogan_ar = models.CharField(max_length=300, blank=True)
    about_us = models.TextField(blank=True)
    about_us_en = models.TextField(blank=True)
    about_us_ar = models.TextField(blank=True)
    logo = models.ImageField(upload_to='site/logo/', blank=True, null=True)
    background_image = models.ImageField(upload_to='site/background/', blank=True, null=True)
    projects_count = models.PositiveIntegerField(default=0)
    clients_count = models.PositiveIntegerField(default=0)
    experience_years = models.PositiveIntegerField(default=0)
    specialties_count = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.company_name

class SocialLink(TimeStamped):
    name = models.CharField(max_length=50)
    url = models.URLField()
    icon = models.CharField(max_length=50, blank=True)  # اسم أيقونة لو هتستخدم مكتبة أيقونات
    order = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.name

class ContactMessage(TimeStamped):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()
    def __str__(self):
        return f"{self.name} - {self.email}"
