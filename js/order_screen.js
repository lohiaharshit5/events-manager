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

}