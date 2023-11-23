from django import forms
from .models import UserProfile

class SignUpForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['username', 'password', 'email']

class LogInForm(forms.Form):
    username = forms.CharField(max_length=255)
    password = forms.CharField(widget=forms.PasswordInput)


def clean_email(self):
        email = self.cleaned_data['email']
        if UserProfile.objects.filter(email=email).exists():
            raise forms.ValidationError('This email address is already registered.')
        return email
