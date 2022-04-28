from django.contrib import admin

from pashalki.models import Pictures, Trueadmin

# Register your models here.
@admin.register(Pictures)
class PicturesAdmin(admin.ModelAdmin):
    pass

@admin.register(Trueadmin)
class TrueAdminAdmin(admin.ModelAdmin):
    pass
