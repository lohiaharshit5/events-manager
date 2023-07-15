
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
    coderesult.confirm(code).then(function () {
        console.log(code);
        console.log('OTP Verified - opening result page');
        window.location.href = "https://events-manager-six.vercel.app/payment_gateway.html";

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

