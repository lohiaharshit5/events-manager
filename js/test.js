var True = true
var google = {'resourceName': 'people/111372045860486327403',
 'etag': '%EhUBAgMEBgcICQsPEBQZJS41Nz0+P0AaBAECBQc=',
 'metadata': {'sources': [{'type': 'PROFILE',
    'id': '111372045860486327403',
    'etag': '#y+m1H47/8Ko=',
    'profileMetadata': {'objectType': 'PERSON',
     'userTypes': ['GOOGLE_USER', 'GOOGLE_APPS_USER']},
    'updateTime': '2023-03-20T05:26:45.883809Z'},
   {'type': 'DOMAIN_PROFILE',
    'id': '111372045860486327403',
    'etag': '#y+m1H47/8Ko=',
    'updateTime': '2023-03-20T05:26:45.883809Z'}],
  'objectType': 'PERSON'},
 'locales': [{'metadata': {'primary': True,
    'source': {'type': 'ACCOUNT', 'id': '111372045860486327403'}},
   'value': 'en-GB'}],
 'names': [{'metadata': {'primary': True,
    'source': {'type': 'DOMAIN_PROFILE', 'id': '111372045860486327403'},
    'sourcePrimary': True},
   'displayName': 'Harshit Lohia',
   'familyName': 'Lohia',
   'givenName': 'Harshit',
   'displayNameLastFirst': 'Lohia, Harshit',
   'unstructuredName': 'Harshit Lohia'}],
 'coverPhotos': [{'metadata': {'primary': True,
    'source': {'type': 'PROFILE', 'id': '111372045860486327403'}},
   'url': 'https://lh3.googleusercontent.com/c5dqxl-2uHZ82ah9p7yxrVF1ZssrJNSV_15Nu0TUZwzCWqmtoLxCUJgEzLGtxsrJ6-v6R6rKU_-FYm881TTiMCJ_=s1600',
   'default': True}],
 'photos': [{'metadata': {'primary': True,
    'source': {'type': 'PROFILE', 'id': '111372045860486327403'}},
   'url': 'https://lh3.googleusercontent.com/a/AAcHTtfUmXqJaF5VdiGDT6Hl_9x4yuYgtaiCLlmhGZpH=s100',
   'default': True}],
 'emailAddresses': [{'metadata': {'primary': True,
    'verified': True,
    'source': {'type': 'DOMAIN_PROFILE', 'id': '111372045860486327403'},
    'sourcePrimary': True},
        'value': 'harshit@goldsetu.co'
    }]
}
   
console.log(google);
console.log("now check");
console.log("email_addresses-",google.emailAddresses[0].value);