var container = document.getElementById('loader');
    // function loadingfunction(){
    // container.style.display = 'none';
    //   }

    var animationOptions = {
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'img/lotties/animation_ll69u1td.json'
        };

        var anim = lottie.loadAnimation(animationOptions);

        function hideLoader() {
            container.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }

        // Simulate a delay (remove this in your actual implementation)
        setTimeout(hideLoader, 3000);



    function pdp_nav(){
      window.location.href = "pdp_screen.html";
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