var preloader = document.getElementById("loader");
function loadingfunction(){
  preloader.style.display = 'none';
  console.log('loader worked');
}
console.log('checking');

getDATA();
function getDATA(){
  const user_id = localStorage.getItem("user_id");
  const google_user_id = localStorage.getItem("google_user_id");
  const gender = localStorage.getItem("gender");

  console.log('in data');
// Do something with the user_id
  console.log("User ID:", user_id);
  console.log("gender:", gender);
  console.log("google_user_id:", google_user_id);



// Parse the JSON string back to an object


// Now you can access the properties of the JSON object

  // console.log("Name:", userData.name);
  // console.log("Email:", userData.email);


}