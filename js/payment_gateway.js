const urlParams = new URLSearchParams(window.location.search);
  const googleCode = urlParams.get('code');
  console.log(urlParams)
  console.log(googleCode)
  var modifiedGoogleCode = googleCode.replace(/^4\//, "");

  var globalData ={};

// To get the google data from the google api
  var apiUrl = 'https://mysite-ten-psi.vercel.app/googlelogin/' + String(modifiedGoogleCode);
  // axios.get(apiUrl).then(res=>console.log(res))
  fetch(apiUrl, 
    {headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }}
)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    google_data= data;
    globalData.google_response= data
    console.log('google_data -  ', google_data)
    anotherAPIFunction(google_data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

  function anotherAPIFunction(google_data) {
    // Create the request body with the xxxxx variable
    var requestBody = {
      data: google_data,
      // Other properties as needed
    };

// To post the data into the database.

  fetch('https://mysite-ten-psi.vercel.app/user_email_update/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(google_data)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    console.log('POST api working');
    email = requestBody;
    anotherAPIFunction(email);
    console.log('email',email.data.emailAddresses[0].value);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

  console.log('global-responseis fetched');
  console.log('global-responseis fetched',globalData.google_response);
  console.log(email);
  
  

  // axios


