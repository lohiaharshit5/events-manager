// Get Data from the URL string
// Assuming this code is on the next_page.html
// function getDataFromURL() {
//   // Extract the query parameter from the URL
//   var urlParams = new URLSearchParams(window.location.search);
//   var responseDataJSON = urlParams.get('data');

//   // Parse the JSON string back into a JavaScript object
//   var responseData = JSON.parse(responseDataJSON);

//   // Now you can use the responseData object to access the data from the previous page
//   console.log(responseData);
//   console.log('discount =', responseData.discount);
//   console.log('gender =',responseData.gender);
//   console.log('quantity=',responseData.quantity);
//   console.log('final amount =',responseData.final_amount);
//   console.log('age= ', responseData.Age);
//   localStorage.setItem('discount',responseData.discount );
//   localStorage.setItem('gender',responseData.gender );
//   localStorage.setItem('quantity',responseData.quantity );
//   localStorage.setItem('final_amount',responseData.final_amount);
//   localStorage.setItem('Age',responseData.Age );
//   console.log('local storage done');
// }



// getDATA();
// function getDATA(){
//   const userDataString = localStorage.getItem("quantity");


// // Parse the JSON string back to an object
//   const userData = JSON.parse(userDataString);

// // Now you can access the properties of the JSON object
//   console.log("user_data_quantity:", userDataString);
//   // console.log("Name:", userData.name);
//   // console.log("Email:", userData.email);


// }
// Call the function to get the data when the page loads
// getDataFromURL();



// Url string data ended



var otp = document.getElementById("otp");
var sendotpButton = document.getElementById("send-otp");

sendotpButton.addEventListener("click", ()=>{
    otp.classList.toggle("hide")
;}
);

var preloader = document.getElementById("loader");
function loadingfunction(){
  preloader.style.display = 'none';
}

// OTP FIREBASE STARTING

const firebaseConfig = {
  apiKey: "AIzaSyD6mMjTj2XUSe5u0Si-BibEo4SEVfnrTuQ",
  authDomain: "youthstring.firebaseapp.com",
  databaseURL: "https://youthstring-default-rtdb.firebaseio.com",
  projectId: "youthstring",
  storageBucket: "youthstring.appspot.com",
  messagingSenderId: "361278454891",
  appId: "1:361278454891:web:4d820ffbbeaef61a1a052e",
  measurementId: "G-KT8L4VS4DB"
};

firebase.initializeApp(firebaseConfig);


// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}


//verify sms code

function codeverify() {
    var code = document.getElementById('verificationcode').value;
    mobileNumberInput = (document.getElementById('number').value);
    console.log('mobile-no',mobileNumberInput);

    coderesult.confirm(code).then(function () {
        console.log(code);
        console.log('OTP Verified - opening result page');
        const urlParams = new URLSearchParams(window.location.search);
        console.log('data fetching url')
        const responseDataJSON = JSON.parse(urlParams.get('data'));
        console.log('data fetched-', responseDataJSON)
        // var discount = responseData.discount;
        const gender = responseDataJSON.gender;
        console.log(gender)
        const quantity=responseDataJSON.quantity;
        console.log(quantity)
        // var final_amount =responseData.final_amount;
        const age=  responseDataJSON.Age;
        console.log(age)
        console.log(mobileNumberInput)
        const mobileApiData = {
          "mobile":mobileNumberInput,
          "quantity" :quantity,
         "gender" :gender,
           "age" :age}
        console.log('mobiledata',mobileApiData);
        // Parse the JSON string back into a JavaScript object
        console.log('mobile Api Data')
        mobile_otp(mobileApiData)
        .then(data => {
          const apiData = data;
          console.log("API DATa = ",apiData);
          const userID = data.user_d;
          mobileApiData.user_id = userID;


          var urlParams = new URLSearchParams(window.location.search);
          var responseDataJSON = urlParams.get('data');
        
          // Parse the JSON string back into a JavaScript object
          var responseData = JSON.parse(responseDataJSON);
        
          // Now you can use the responseData object to access the data from the previous page
          console.log(responseData);
          console.log('discount =', responseData.discount);
          console.log('gender =',responseData.gender);
          console.log('quantity=',responseData.quantity);
          console.log('final amount =',responseData.final_amount);
          console.log('age= ', responseData.Age);
          localStorage.setItem('discount',responseData.discount );
          localStorage.setItem('gender',responseData.gender );
          localStorage.setItem('quantity',responseData.quantity );
          localStorage.setItem('final_amount',responseData.final_amount);
          localStorage.setItem('Age',responseData.Age );
          localStorage.setItem('user_id',userID );
          console.log('local storage done');

          console.log("userId:", userID);
          console.log("user_id from local", localStorage.getItem("user_id"));
          console.log('age=', age);
          console.log('mobileAPIDATA=',mobileApiData);
          const gen = localStorage.getItem('gender');
          console.log(gen);
          const nextPageURL = "payment_gateway.html" +"?data="+encodeURIComponent(JSON.stringify(mobileApiData));
          window.location.href = nextPageURL;
          // Here you can use the data returned by the API response
        });
        // console.log('out_of_loop-', userID);s
        // window.location.href = "https://events-manager-six.vercel.app/payment_gateway.html";

    }).catch(function () {
        console.log('OTP Not correct');
    })
}



function otpFunction(){
  
  var otpButton = document.getElementById('otp');
  var mobileNumber = document.getElementById('number').value;
  if (mobileNumber!==null && mobileNumber.length == 10) 
  {  otpButton.style.display="block";
  var nn = document.getElementById('number').value;
  var number = '+91'+nn;
  console.log(number);
  firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log('OTP Sent');
  }).catch(function (error) {
      // error in sending OTP
      alert(error.message);
  });
  console.log('otp worked');
  console.log('mobilelength', mobileNumber.length);
  changeButtonName();



}
  else{
    try {
      // Throw an error
      throw new Error("Please fill correct Phone Number");
    } catch (error) {
      // Display the error on the user's screen
      var errorContainer = document.getElementById("errorcontainer");
      errorContainer.innerText = error.message;
      errorContainer.style.display = "flex";
      errorContainer.style.color = "red";
      errorContainer.style.alignItems="center";
      errorContainer.style.justifyContent="center";
      // errorContainer.style.background="black"
      // centerAlign(errorContainer); 
    }
    
  }
}
// OTP FIREBASE END

function changeButtonName() {
  var captcha = document.getElementById('recaptcha-container');
  var myButton = document.getElementById("send-otp");
  myButton.innerText = "Verify OTP";
  myButton.setAttribute("onclick", "codeverify()")
  captcha.style.display = "none";
}




var mobileNumberInput = document.getElementById('number');
var errorContainer = document.getElementById("errorcontainer");

mobileNumberInput.addEventListener("input", function() {
  var value = mobileNumberInput.value;

  if (value.length === 10) {
    errorContainer.style.display = "none"; // Hide the error message
  } else {
    errorContainer.style.display = "flex";
    errorContainer.style.alignItems="center";
    errorContainer.style.justifyContent="center";
    // Show the error message
  }
});


function mobile_otp(mobile_attributes){
  const url = 'https://mysite-ten-psi.vercel.app/send_mobile_user_details/';
  
  const requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(mobile_attributes)
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
