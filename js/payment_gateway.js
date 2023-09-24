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


function order_creation(){
  var mobile_user_id = localStorage.getItem('mobile_user_id');
  var google_user_id = localStorage.getItem('google_user_id');
  var discount =parseInt(localStorage.getItem("discount" ));
  var gender =localStorage.getItem('gender');
  var quantity =parseInt(localStorage.getItem('quantity' ));
  var final_amount=parseInt(localStorage.getItem('final_amount'));
  var Age=parseInt(localStorage.getItem('Age' ));

  
  if (google_user_id==null){
  var user_id = mobile_user_id
  }
  else{
  var user_id = google_user_id
  }
  const users_data = {
    "user_id":parseInt(user_id),
    "quantity" :quantity,
   "gender" :gender,
     "age" :Age,
     "amount":final_amount,
     "event_id":1,
     "discount":discount

    }
  order_api(users_data)
  .then(data=>{
    console.log("api Response: ", data);
    window.location.href="order_screen.html";
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })

}


function order_api(user_data){
  const url = 'https://mysite-ten-psi.vercel.app/order_creation/';
  
  const requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(user_data)
  };
  
  return fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


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





