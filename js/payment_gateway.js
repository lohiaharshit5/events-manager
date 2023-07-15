const urlParams = new URLSearchParams(window.location.search);
  const googleCode = urlParams.get('code');
  console.log(urlParams)
  console.log(googleCode)
  var modifiedGoogleCode = googleCode.replace(/^4\//, "");


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
    console.log(data);
    google_data= data;
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
    console.log(requestBody);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }


  

  // axios


