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


function handleCredentialResponse(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


window.gapi.client
        .init({
          clientId:'361278454891-sve6t24fgsham41fafeohos16b35sg3l.apps.googleusercontent.com',
          scope: "email",
          plugin_name:'Youthstring'
        })