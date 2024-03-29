let percent = 0;
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const downloadBarJson= document.querySelector('.download-json');
var container = document.getElementById('loader');

    // function loadingfunction(){
    // container.style.display = 'none';
    //   }

    var animationOptions = {
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'img/lotties/animation_ll69st0v.json'
        };

        var anim = lottie.loadAnimation(animationOptions);

        function hideLoader() {
            container.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }

        // Simulate a delay (remove this in your actual implementation)
        setTimeout(hideLoader, 3000);

// checking body resolution
if (localStorage.getItem('mobile_user_id')==null && localStorage.getItem('google_user_id')==null){
    document.body.style.height='100vh';
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
        if (data.total_orders>=1){
            document.body.style.height='100%'

        card_maker(data);
        if (data.total_orders==1){
            document.body.style.height='100vh';
        }}

        else if (data.total_orders==0){
            document.body.style.height='100vh';
            console.log("YES");
        }


        console.log("card maker worked")
        // Handle the response data here
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle errors here
    });

  }


  else if (google_user_id!=null){

    const apiUrl = 'https://mysite-ten-psi.vercel.app/user_order_count/'; // Replace with your API URL

    const postData = {
    // Your data to be sent in the request body
        "user_id":parseInt(google_user_id)
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
        card_maker(data);
    
        if (data.total_orders<=1){
            document.body.style.height='100vh';
        }
        // Handle the response data here
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle errors here
    });

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
              <img src="${order.img_url}" alt="Product" />
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
                  <div class="quantity">
                  <span>Quantity:</span>
                  <span>${order.quantity}</span>
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
                      <span>${order.date}</span>
                  </div>

                  <div class="order-date">
                      <span>Event Time:</span>
                      <span>${order.event_time}</span>
                  </div>
              </div>
          </div>
          <div class="order-actions">
              <div class="pass-btn">
                  <button class="pass-dnld" onclick="openPopup()">
                      <i class="fa-solid fa-ticket"></i> My Pass
                  </button>
              </div>
              <button class="download-invoice-btn" onclick="downloadInvoice('${order.order_id}')">
                  <i class="fa-regular fa-file-lines"></i> Invoice
              </button>
          </div>
      </div>
  `;

  cardContainer.appendChild(card);

});}





function downloadInvoice(order_id){
    popup.style.display="block"

    var animationOptionssss = {
        container: downloadBarJson,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'img/lotties/download1.json'
    };
    var downloadJson = lottie.loadAnimation(animationOptionssss);
    overlay.style.display='block';



    event_data(order_id)
    .then(data=>{
        console.log(data);

        make_invoice(data)
        .then((blob) => {
            console.log(blob.size)
            // Create a temporary URL for the Blob
            const blobUrl = window.URL.createObjectURL(blob);
        
            // Create a temporary link element to trigger the download
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = `youthstring_${order_id}.pdf`; // Specify the filename for the download
            a.style.display = 'none';
        
            // Append the link to the document and trigger the click event
            document.body.appendChild(a);
            a.click();
        
            // Clean up by revoking the temporary URL and removing the link
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
            

            setTimeout(() => {
                overlay.style.display = 'none';
                popup.style.display = 'none';
                percent = 0; // Reset the progress for the next download
            }, 500)
            popup.style.display='none';
            downloadBarJson.firstChild.remove();
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    })



// const downloadButtons = document.querySelector('.download-invoice-btn')

// const content = document.querySelector('.order-card');
// const card=downloadButtons.closest('.order-card');
// const cardContainer = document.querySelector(".order-container");
// console.log(card);
}


function event_data(order_id){
    const url = 'https://mysite-ten-psi.vercel.app/invoice_data_send/';
    const orderJson = {"order_id":order_id}
    const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
      'Content-Type': 'application/json',
    },
    
    body:JSON.stringify(orderJson)
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

  function make_invoice(invoiceJson){
    const url = 'https://harshitlohia5.pythonanywhere.com/invoice_download/';
    const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
      'Content-Type': 'application/json'
    },
    
    body:JSON.stringify(invoiceJson)
    };
    
    return fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.blob();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }


// Download invoice bar started




  // Download invoice bar ended