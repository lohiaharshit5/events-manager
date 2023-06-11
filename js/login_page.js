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

