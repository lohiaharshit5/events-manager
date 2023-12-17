var container = document.getElementById('loader');
    // function loadingfunction(){
    // container.style.display = 'none';
    //   }
    if (localStorage.getItem("logout")=='1'){
      var lottiePath= 'img/lotties/logout.json'
    }
    else{
      var lottiePath= 'img/lotties/animation_ll69u1td.json'
    }
    var animationOptions = {
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: lottiePath
        };
        localStorage.removeItem("logout");
        var anim = lottie.loadAnimation(animationOptions);

        function hideLoader() {
            container.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }

        // Simulate a delay (remove this in your actual implementation)
        setTimeout(hideLoader, 3000)
        
        ;

const urlParams = new URLSearchParams(window.location.search);

try{
  
  const googleCode = urlParams.get('code');
  console.log('google_code:', googleCode);
  if (googleCode!=null){
  console.log('in if');
  googleAPIData();}
  else {
    getDATA();
    console.log('in else');
  }
  throw new Error('This is an example error.'); // You can also manually throw an error using the `throw` statement
} catch (error) {
  // This block will run if an error is thrown in the try block
  // The `error` variable will hold the error object with information about the error
  console.error('An error occurred:', error.message);
}



// google login data capturing & updating started

function googleAPIData(){
  const googleCode = urlParams.get('code');
  console.log(urlParams);
  console.log("googlecode:",googleCode);
  if (googleCode!=null){
    console.log("in google code");
  var modifiedGoogleCode = googleCode.replace(/^4\//, "");
  var apiUrl = 'https://api.youthstring.in/googlelogin_accounts_homepage/' + String(modifiedGoogleCode);
  console.log('api_URL=', apiUrl);
  fetch(apiUrl, 
    {headers: {
    'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
    "Content-Type": "application/json"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  }}
)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
    const google_data= data;
    console.log('google_data -  ', google_data)

// 
    fetch('https://api.youthstring.in/user_email_update/', {
    method: 'POST',
    headers: {
      'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(google_data)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);


    console.log('POST api working', data.user_id);
    localStorage.setItem("google_user_id", data.user_id);
    console.log('in data');
  // Do something with the user_id
    console.log("User ID:", data.user_id);

  })
  .catch(error => {
    console.error('Error:', error);
  });

// 
    // anotherAPIFunction(google_data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
}}


// google login data capturing & updating ended





    function pdp_nav(eventID){
      window.location.href = "pdp_screen.html" + `?event_id=${eventID}`;
      console.log("done");
    }
    // Initialize Lottie animation with cloud JSON
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('tab'),
      renderer: 'svg', // Choose the renderer (svg, canvas, html)
      loop: true, // Set loop to true or false
      autoplay: true, // Set autoplay to true or false
      path: "img/animation_ll51glza.json" // URL of your cloud JSON file
      
    })
    var home_page_lottie = bodymovin.loadAnimation({
      container:document.getElementById('home-page-lottie'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:"img/lotties/animation_ll69sk3x.json"
    })
    var liveEvent = bodymovin.loadAnimation({
      container:document.getElementById('live-lottie'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:"img/lotties/live_event.json"
    })

    var home_page_lottie1 = bodymovin.loadAnimation({
      container:document.getElementById('home-page-lottie1'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:"img/lotties/animation_ll69st0v.json"
    })


  const divElement = document.querySelector('.content-container');
let hasDivAppeared = false; // Flag to track if the div has appeared

function checkScroll() {
  if (!hasDivAppeared) {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const triggerPosition = windowHeight / 2;
    
    if (scrollPosition > triggerPosition) {
      divElement.classList.remove('hidden');
      console.log("if");
      hasDivAppeared = true; // Set the flag to true once the div appears
    }
  }
}

window.addEventListener('scroll', checkScroll);

checkScroll(); // Initial check in case the user lands on the page already scrolled



    console.log("working");