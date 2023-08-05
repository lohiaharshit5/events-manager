const urlParams = new URLSearchParams(window.location.search);

try{
  
  const googleCode = urlParams.get('code');
  console.log('google_code:', googleCode);
  if (googleCode!=null){
  console.log('in if');
  googleAPIData();}
  else {
    getDATA();
    console.log('in else');
  }
  throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
} catch (error) {
  // This block will run if an error is thrown in the try block
  // The `error` variable will hold the error object with information about the error
  console.error('An error occurred:', error.message);
}


// try{
//   getDataFromURL();
//   throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
// } catch (error) {
//   // This block will run if an error is thrown in the try block
//   // The `error` variable will hold the error object with information about the error
//   console.error('An error occurred:', error.message);}

try{
    getDATA();
    throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
  } catch (error) {
    // This block will run if an error is thrown in the try block
    // The `error` variable will hold the error object with information about the error
    console.error('An error occurred:', error.message);}


  function getDATA(){
    // const user_id = localStorage.getItem("user_id");
    console.log('in data');
    const dataParam = urlParams.get('data');

    const dataObject = JSON.parse(decodeURIComponent(dataParam));

    // Get the user_id
    const userIdMobile = dataObject.user_id;

    console.log('mobile_user_id:',userIdMobile);
    localStorage.setItem("mobile_user_id",userIdMobile );

    const keys = Object.keys(localStorage);

// Create an object to store key-value pairs
    const allVariables = {};

    // Iterate through keys and retrieve values
    keys.forEach(key => {
      allVariables[key] = localStorage.getItem(key);
    });

    // Now, 'allVariables' object contains all variables from local storage
    console.log("local all :",allVariables);

  // Do something with the user_id
    const user_id = localStorage.getItem("user_id");
    console.log("User ID:", user_id);

    const discount =localStorage.getItem("discount" );
    console.log('starting');
    console.log(discount);
    const gender =localStorage.getItem('gender');
    const quantity =localStorage.getItem('quantity' );
    const final_amount=localStorage.getItem('final_amount');
    const Age=localStorage.getItem('Age' );
    console.log("item from storage", Age);
    console.log("item from storage", gender);

    // console.log("Name:", userData.name);
    // console.log("Email:", userData.email);
  
  
  }


// for OTP flow :- 

  // function getDataFromURL() {
  //   // Extract the query parameter from the URL
  //   var urlParams = new URLSearchParams(window.location.search);
  //   var responseDataJSON = urlParams.get('data');
  //   console.log('started');
  
  //   // Parse the JSON string back into a JavaScript object
  //   var responseData = JSON.parse(responseDataJSON);
  //   console.log('responseData=',responseData);
  
  //   // Now you can use the responseData object to access the data from the previous page
  //   console.log('discount =', responseData.discount);
  //   console.log('gender =',responseData.gender);
  //   console.log('quantity=',responseData.quantity);
  //   console.log('final amount =',responseData.final_amount);
  //   console.log('age= ', responseData.age);
  // }


// To get the google data from the google api
function googleAPIData(){

  const urlParams = new URLSearchParams(window.location.search);
  const googleCode = urlParams.get('code');
  console.log(urlParams);
  console.log("googlecde:",googleCode);
  if (googleCode!=null){
    console.log("in google code");
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
    const gender =localStorage.getItem('gender');
    const quantity =localStorage.getItem('quantity' );
    const final_amount=localStorage.getItem('final_amount');
    const Age=localStorage.getItem('Age' );
    google_data.Age = Age;
    google_data.final_amount = final_amount;
    google_data.gender = gender;
    google_data.quantity = quantity;

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
    localStorage.setItem("google_user_id", data.user_id);
    console.log('in data');
  // Do something with the user_id
    console.log("User ID:", data.user_id);

    const discount =localStorage.getItem("discount" );
    console.log('starting');
    console.log(discount);
    const gender =localStorage.getItem('gender');
    const quantity =localStorage.getItem('quantity' );
    const final_amount=localStorage.getItem('final_amount');
    const Age=localStorage.getItem('Age' );
    console.log("item from storage", Age);
    console.log("item from storage", gender);
    // localStorage.setItem("user_id",data.user_id);
    console.log('user_id added in the local storage');

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
  });
}}



// Getting the user_id
//   function user_id(){
//     console.log("function started")
//   const url = 'https://mysite-ten-psi.vercel.app/user_id/';
//   const data = {
//   "email_id": 'harshit@goldsetu.co',
//   "amount": 100,
// };

//   const requestOptions = {
//   method: 'POST',
//   headers: {
//     'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// };

// fetch(url, requestOptions)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

//   }

  // axios


