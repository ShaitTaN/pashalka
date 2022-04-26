from django.db import models

# Create your models here.
class Pictures(models.Model):
    picture = models.ImageField(verbose_name='Картиночка', null=True, blank=True)
    
    class Meta:
        verbose_name = 'Картиночку'
        verbose_name_plural = 'Картиночки'
        
    def __str__(self):
        return f"{self.picture}"
