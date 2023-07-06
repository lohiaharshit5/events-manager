from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
import requests
import json
import pymongo

def index(requests):
    return HttpResponse("<h1>Or bhai website banali<h1>")

def contact(requests):
    return HttpResponse("Contact no. chahiye kya")


def googlelogin(requests, google_code):
    flow = InstalledAppFlow.from_client_secrets_file(
    '/Users/harshit/Downloads/client_secret_361278454891-sve6t24fgsham41fafeohos16b35sg3l.apps.googleusercontent.com.json',
    scopes=['https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/gmail.readonly',
            'https://www.googleapis.com/auth/business.manage',
            'openid'],
    redirect_uri='https://events-manager-six.vercel.app/pdp_screen.html'
)

# Start the OAuth 2.0 flow
    auth_url, _ = flow.authorization_url(prompt='consent')
    print('Please go to this URL to authorize access: {}'.format(auth_url))
    flow.fetch_token(code='4/' +google_code)
    credentials_info = json.loads(flow.credentials.to_json())
    crd = Credentials.from_authorized_user_info(info=credentials_info)
    people_service = build('people', 'v1', credentials=crd)

    # Retrieve the user's email and name
    user_profile = people_service.people().get(resourceName='people/me', personFields='emailAddresses,names,addresses,birthdays,coverPhotos,genders,imClients,locales,metadata,phoneNumbers,photos,residences,taglines,urls').execute()
    name = user_profile['names'][0]['displayName']
    email = user_profile['emailAddresses'][0]['value']
    profile_photo_link = user_profile['photos'][0]['url']
    response = {
        'param1': name,
        'param2': email,
        'result': user_profile['photos'][0]['url']
    }
    return HttpResponse(json.dumps(response), content_type='application/json' )


    def post_google_data(requests, name, email, profile_photo):
        filter = {"email":email}
        change = {"$set":{"name":name, "email":email, "profile_photo":profile_photo}}
        user_profile.update_one(filter, change, upsert=True)




