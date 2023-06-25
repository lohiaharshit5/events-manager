from django.http import HttpResponse
from django.shortcuts import render

def index(requests):
    return HttpResponse("<h1>Or bhai website banali<h1>")

def contact(requests):
    return HttpResponse("Contact no. chahiye kya")