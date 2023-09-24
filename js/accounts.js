var logoutContainer = document.querySelector('.logout-container');
var loginForm = document.querySelector('.login-form');
var googleLogin = document.querySelector('.google-login');
var orText = document.querySelector('.or-text');
var welcomeMessage = document.querySelector('.welcome-message');
var logout = document.querySelector('.logout');
var update = document.querySelector('.update-button');
var firstName = document.querySelector('.first-name');
var updateMessage = document.querySelector('.update-message');





function deleteUser(){
    localStorage.clear();
    localStorage.setItem("logout", 1);
    window.location.href='homepage.html'
}

checkScreen()

function checkScreen(){
    console.log('check');
    // localStorage.removeItem('user_id');
    // localStorage.removeItem('google_user_id');
if (localStorage.getItem('google_user_id')!=null || localStorage.getItem('user_id')!=null ) {
    console.log('true condition');
    // logoutContainer.style.display='none';
    loginForm.style.display = 'none';
    googleLogin.style.display = 'none';
    orText.style.display = 'none';
    welcomeMessage.innerText = 'This name will be shown on your Invoice!'
    logout.style.display='block';
    update.style.display='flex';
    firstName.style.display='flex';
    const user_id_json = {'mobile_user_id':localStorage.getItem('mobile_user_id'), 'google_user_id':localStorage.getItem('google_user_id')}
    get_user_name(user_id_json)
    .then(data=> {
      console.log("first_last_name_data",data);
      if(data.message=="success"){
        console.log("in if");
        console.log(data.last_name)
        firstName.innerHTML= `<input id = "first_name" class="name" value=${data.first_name} type="text" placeholder="Firstname"></input>
        <input id ="last_name" class="name" value="${data.last_name}" type="text" placeholder="Lastname"></input>
        `;
        console.log(firstName);

      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })

}


}

var otp = document.getElementById("otp");
var sendotpButton = document.getElementById("send-otp");

sendotpButton.addEventListener("click", ()=>{
    otp.classList.toggle("hide")
;}
);


// For lottie loader
var container = document.getElementById('loader');
    // function loadingfunction(){
    // container.style.display = 'none';
    //   }

    var animationOptions = {
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'img/lotties/login_account.json'
        };

        var anim = lottie.loadAnimation(animationOptions);

        function hideLoader() {
            container.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }

        // Simulate a delay (remove this in your actual implementation)
        setTimeout(hideLoader, 3000);
// lottie loader end

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


        // script.js



        console.log(code);
        const dotButton = document.getElementById('send-otp');
        const buttonText = document.querySelector('.button-text');
        const dots = document.querySelector('.dots');
        buttonText.style.opacity = 0;
        dots.style.display = 'flex';
        console.log('OTP Verified - opening result page');
        // const urlParams = new URLSearchParams(window.location.search);
        console.log('data fetching url')
        // const responseDataJSON = JSON.parse(urlParams.get('data'));
        // console.log('data fetched-', responseDataJSON)
        // var discount = responseData.discount;
        const gender = null;
        console.log(gender)
        const quantity=null;
        console.log(quantity)
        // var final_amount =responseData.final_amount;
        const age=  null;
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
        
          localStorage.setItem('user_id',userID );
          localStorage.setItem('mobile_user_id',userID );
        //   console.log('local storage done');

          console.log("userId:", userID);
          console.log("user_id from local", localStorage.getItem("user_id"));
          console.log('mobileAPIDATA=',mobileApiData)
          const nextPageURL = "homepage.html" 
        //   +"?data="+encodeURIComponent(JSON.stringify(mobileApiData));

          window.location.href = nextPageURL;
          // Here you can use the data returned by the API response
        });


    }).catch(function () {

        console.log('OTP Not correct');
        var errorContainer = document.getElementById('errorcontainer');
        errorContainer.style.display = "flex";
        errorContainer.innerText = "OTP not correct!";
        errorContainer.style.color ="red";

        setTimeout(function () {
          errorContainer.style.display = "none";
      }, 3000);
    })
}



function otpFunction(){
  
  var otpButton = document.getElementById('otp');
  var mobileNumber = document.getElementById('number').value;
  if (mobileNumber!==null && mobileNumber.length == 10) 
  {  
  var nn = document.getElementById('number').value;
  var number = '+91'+nn;
  console.log(number);

  if (localStorage.getItem("_grecaptcha")!=null){
    otpButton.style.display="block";
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        console.log('OTP Sent');
        localStorage.removeItem("_grecaptcha");
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
    console.log('otp worked');
    console.log('mobilelength', mobileNumber.length);
    changeButtonName();}
    else{
      try {
        console.log("in else:");
        // Throw an error
        throw new Error("Please click the above Captcha!");
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
        setTimeout(function () {
          errorContainer.style.display = "none";
      }, 3000);
      
    }
    }}


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
      setTimeout(function () {
        errorContainer.style.display = "none";
    }, 3000);
      // errorContainer.style.background="black"
      // centerAlign(errorContainer); 
    }
    
  }
}
// OTP FIREBASE END

function changeButtonName() {
  var captcha = document.getElementById('recaptcha-container');
  var myButton = document.getElementById("send-otp");
  myButton.innerHTML = `<span class="button-text">Verify OTP</span>
  <div class="dots">
      <span class="dot dot1"></span>
      <span class="dot dot2"></span>
      <span class="dot dot3"></span>
  </div>`;


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

function get_user_name(user_id_json){
  const url = 'https://mysite-ten-psi.vercel.app/get_user_name/';
  
  const requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(user_id_json)
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

// User_name update function

function user_name_update(){
  var first_name_input = document.getElementById('first_name');
  var last_name_input = document.getElementById('last_name');
  const user_data={
    "mobile_user_id":localStorage.getItem("mobile_user_id"),
    "google_user_id":localStorage.getItem("google_user_id"),
    "first_name":first_name_input.value,
    "last_name":last_name_input.value
  }
  console.log(user_data);
  update_name_api(user_data)
  .then(data=>{
    console.log(data)
    updateMessage.innerText=data.message;
    updateMessage.style.color='white';
    updateMessage.style.borderRadius='10px';
    updateMessage.style.background='rgb(170 255 0 / 70%)';
    updateMessage.style.display='flex';
    updateMessage.style.padding='10px 10px'
    updateMessage.style.justifyContent='center';
    updateMessage.style.alignItems='center';
    updateMessage.style.margin='10px';
    setTimeout(function () {
      updateMessage.style.display = "none";
  }, 3000);
  
  }
    )
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


function update_name_api(user_data){
  const url = 'https://mysite-ten-psi.vercel.app/name_update/';
  
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
