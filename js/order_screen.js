var preloader = document.getElementById("loader");
function loadingfunction(){
  preloader.style.display = 'none';
  console.log('loader worked');
}
console.log('checking');

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