var preloader = document.getElementById("loader");
function loadingfunction(){
  preloader.style.display = 'none';
  console.log('loader worked');
}




try{
  getDATA();
  throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
} catch (error) {
  // This block will run if an error is thrown in the try block
  // The `error` variable will hold the error object with information about the error
  console.error('An error occurred:', error.message);}
  
function getDATA(){
  const mobile_user_id = localStorage.getItem("mobile_user_id");
  const google_user_id = localStorage.getItem("google_user_id");
  const gender = localStorage.getItem("gender");

  console.log('in data');
// Do something with the user_id
  console.log("mobile_user_id:", mobile_user_id);
  console.log("gender:", gender);
  console.log("google_user_id:", google_user_id);
}