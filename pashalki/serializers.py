from rest_framework import serializers
from django.conf import settings
from pashalki.models import Pictures
from pathlib import Path

class PicturesSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = Pictures
        fields = '__all__'
