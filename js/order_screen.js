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

  if (mobile_user_id!=null){
    const apiUrl = 'https://mysite-ten-psi.vercel.app/user_order_count/'; // Replace with your API URL

    const postData = {
    // Your data to be sent in the request body
        "user_id":parseInt(mobile_user_id)
};
console.log(postData);
const requestOptions = {
    method: 'POST',
    headers: {
        'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
        "Content-Type": "application/json"
    },
    body: JSON.stringify(postData),
};

fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        // Handle the response data here
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle errors here
    });





  }
  else{

  }

}





function card_maker(card_data){
const cardData = card_data
const cardContainer = document.querySelector(".order-container");
cardContainer.innerHTML = '';

cardData.data.forEach(order => {
  const card = document.createElement("div");
  card.classList.add("order-card");

  card.innerHTML = `
      <div class="product-details">
          <div class="product-image">
              <img src="https://storage.googleapis.com/youthstring.appspot.com/img/pexels-andres-ayrton-6578960.jpg" alt="Product" />
          </div>
          <div class="product-name">
              <span>${order.event_name}</span>
          </div>
      </div>
      <div class="order-content">
          <div class="order-info">
              <div class="order-details">
                  <div class="order-creation-time">
                      <span>Order Id:</span>
                      <span>${order.order_id}</span>
                  </div>
                  <div class="order-amount">
                      <span>Amount:</span>
                      <span>Rs ${order.final_amount}</span>
                  </div>
                  <div class="order-venue">
                      <span>Venue:</span>
                      <span>${order.venue}</span>
                  </div>
                  <div class="order-date">
                      <span>Event Date:</span>
                      <span>${order.event_date}</span>
                  </div>
                  <div class="order-date">
                      <span>Event Time:</span>
                      <span>${order.event_time}</span>
                  </div>
              </div>
          </div>
          <div class="order-actions">
              <div class="pass-btn">
                  <button class="pass-dnld">
                      <i class="fa-solid fa-ticket"></i> My Pass
                  </button>
              </div>
              <button class="download-invoice-btn">
                  <i class="fa-regular fa-file-lines"></i> Invoice
              </button>
          </div>
      </div>
  `;

  cardContainer.appendChild(card);
});}
