from django.contrib import admin

from pashalki.models import Pictures

# Register your models here.
@admin.register(Pictures)
class PicturesAdmin(admin.ModelAdmin):
    pass
