let USERID = {}

try{
  googleAPIData();
  throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
} catch (error) {
  // This block will run if an error is thrown in the try block
  // The `error` variable will hold the error object with information about the error
  console.error('An error occurred:', error.message);
}


try{
  getDataFromURL();
  throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
} catch (error) {
  // This block will run if an error is thrown in the try block
  // The `error` variable will hold the error object with information about the error
  console.error('An error occurred:', error.message);}

  getDATA();
  function getDATA(){
    const user_id = localStorage.getItem("user_id");
    console.log('in data');
  // Do something with the user_id
    console.log("User ID:", user_id);
    const userDataString = localStorage.getItem("user_data");
  
  // Parse the JSON string back to an object
    const userData = JSON.parse(userDataString);
  
  // Now you can access the properties of the JSON object
    console.log("user_data:", userData);
    // console.log("Name:", userData.name);
    // console.log("Email:", userData.email);
  
  
  }


// for OTP flow :- 

  function getDataFromURL() {
    // Extract the query parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var responseDataJSON = urlParams.get('data');
    console.log('started');
  
    // Parse the JSON string back into a JavaScript object
    var responseData = JSON.parse(responseDataJSON);
    console.log('responseData=',responseData);
  
    // Now you can use the responseData object to access the data from the previous page
    console.log('discount =', responseData.discount);
    console.log('gender =',responseData.gender);
    console.log('quantity=',responseData.quantity);
    console.log('final amount =',responseData.final_amount);
    console.log('age= ', responseData.Age);
  }


// To get the google data from the google api
function googleAPIData(){

  const urlParams = new URLSearchParams(window.location.search);
  const googleCode = urlParams.get('code');
  console.log(urlParams)
  console.log(googleCode)
  var modifiedGoogleCode = googleCode.replace(/^4\//, "");
  var apiUrl = 'https://mysite-ten-psi.vercel.app/googlelogin/' + String(modifiedGoogleCode);
  console.log('api_URL=', apiUrl);
  fetch(apiUrl, 
    {headers: {
    'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
    "Content-Type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }}
)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
    const google_data= data;
    console.log('google_data -  ', google_data)

// 
    fetch('https://mysite-ten-psi.vercel.app/user_email_update/', {
    method: 'POST',
    headers: {
      'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(google_data)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);


    console.log('POST api working', data.user_id);
    localStorage.setItem("user_id",data.user_id);
    console.log('user_id added in the local storage');

    // let currentURL = window.location.href;
    // let userId = data.user_id;
    // if (currentURL.includes('?')) {
    //   // If a query string exists, append the user_id parameter using '&'
    //   currentURL += `&user_id=${userId}`;
    // } else {
    //   // If no query string exists, append the user_id parameter using '?'
    //   currentURL += `?user_id=${userId}`;
    // }
    
    // // Update the URL to navigate to the new URL with the added user_id parameter
    // window.location.href = currentURL;
    // console.log('current_url=',currentURL);
    

    // console.log(requestBody);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// 
    // anotherAPIFunction(google_data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });}

  console.log('outer loop', USERID);
  console.log('outer loop user_id', USERID.user_id);


  // function anotherAPIFunction(google_data) {
  //   // Create the request body with the xxxxx variable
  //   var requestBody = {
  //     data: google_data,
  //     // Other properties as needed
  //   };
  // }

// To post the data into the database.
// fetch('https://mysite-ten-psi.vercel.app/user_email_update/', {
//   method: 'POST',
//   headers: {
//     'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(google_data)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Response:', data);
//     console.log('POST api working');
//     console.log(requestBody);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
//   }

// Getting the user_id
  function user_id(){
    console.log("function started")
  const url = 'https://mysite-ten-psi.vercel.app/user_id/';
  const data = {
  "email_id": 'harshit@goldsetu.co',
  "amount": 100,
};

  const requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  }

  // axios


