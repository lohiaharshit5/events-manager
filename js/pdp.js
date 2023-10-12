const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('event_id');
const eventHeader = document.querySelector('.event-header');
const banner1 = document.getElementById('banner1');
const banner2 = document.getElementById('banner2');
const banner3 = document.getElementById('banner3');
const venue = document.getElementById('venue1');
const eventDate = document.getElementById('event_date');
const nearestMetro = document.querySelector('.metro-text');
const divNearestMetro = document.getElementById('nearest-metro');
const mapLink = document.querySelector('.map-link');
const likesNumber = document.querySelector('.likes-number');
const benefitsBody = document.querySelector('.desc-body');
const whatsIncluded = document.querySelector('.grey-included').querySelector('ul');
let mainAddtoCart= document.getElementById('add-passes btn');
let minusButton = document.getElementById('minus-btn');
let plusButton = document.getElementById('plus-btn');
let mainAge= document.getElementById('age-selection');
let minusButtonAge = document.getElementById('minus-btn-age');
let plusButtonAge = document.getElementById('plus-btn-age');
var finalAmount = document.querySelector('.final-amount');
var cuttedAmount = document.querySelector('.cutted-amount');
var discountAmount = document.querySelector('.dynamic-amount');
console.log(whatsIncluded);



dynamic_pdp_content(eventId)
.then(data=>{
  console.log(data);

  eventHeader.innerText = data.data.name;
  banner1.src = data.data.banners_link[0];
  banner2.src = data.data.banners_link[1];
  banner3.src = data.data.banners_link[2];
  venue.innerText = data.data.venue;
  eventDate.innerText = data.data.event_date;
  likesNumber.innerText = data.data.interested_users_count;

  // finalAmount.innerText = 'Rs'+data.data.final_amount;
  const benefits = data.data.benefits;

  // Filling Whats Included text
  const whatsIncludedText = data.data.whats_included;
  const whatsIncludedIcon = data.data.whats_included_icon;
  const iconClassList = data.data.icon_class;
  whatsIncluded.innerHTML="";
  finalAmount.innerText='Rs'+data.data.final_amount;
  discountAmount.innerText = 'Rs '+data.data.discount_amount;
  cuttedAmount.innerText = 'Rs'+data.data.cross_amount;


// Whats included backend changes
  for (let y= 0;y<whatsIncludedText.length;y++){
    console.log("in y")
    const listElem = document.createElement('li');
    const icon = whatsIncludedIcon[y];
    const iconSpan = document.createElement('span');
    const iconClass = iconClassList[y];
    iconSpan.innerHTML = icon;
    iconSpan.classList.add(iconClass);
    const textSpan = document.createElement('span');
    

    const text = whatsIncludedText[y];
    textSpan.textContent = text;

    const fullLine = icon + " "+text;
    listElem.appendChild(iconSpan);
    listElem.appendChild(document.createTextNode('  ')); // Add space between icon and text
    listElem.appendChild(textSpan);

    whatsIncluded.appendChild(listElem);


  }
  // Filling Whats Included text over






// filling benefits text
  for (let i=0;i<benefits.length;i++){
    benefits[i]+="<br>";
  }
  const result  = benefits.join(' ');
  console.log(result)
  benefitsBody.innerHTML = result;
  // benefits text over


  if (data.data.nearest_metro==null){
    console.log("shshshsh")
    divNearestMetro.style.display='none';
    if(data.data.map_link==null){
      mapLink.style.display='none';
    }
    else{
      mapLink.href = data.data.map_link;
    }
  }
  else{
    nearestMetro.innerText = data.data.nearest_metro;
  }
  setTimeout(hideLoader, 1000);

})

passes_left(eventId)
  .then(data => {
    // Here you can use the data returned by the API response
    console.log('API Response Data:', data);
    const passesLeft = document.getElementById("passes-left-span");


    // For example, you can store the data in a variable for later use
    const apiData = data;
    const pass = data.passes_left;
    // Now you can use 'apiData' anywhere in your code
    passesLeft.textContent = `${pass} Passes left`
  });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



// get how many passes are left


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto slide
var autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {
    autoSlideIndex = 1;
  }
  slides[autoSlideIndex - 1].style.display = "block";
  setTimeout(autoShowSlides, 5000); // Change image every 2 seconds
}



  var bottomSheet = document.getElementById("bottomSheet");
  var openBtn = document.getElementById("book");

  openBtn.addEventListener("click", ()=> {
    bottomSheet.classList.toggle("open");
  });



  var crossButton = document.getElementById("cross-icon-black");

  crossButton.addEventListener("click", ()=>{
    bottomSheet.classList.toggle("open");
  });


  function showLoader() {
    var button = document.getElementById("myButton");
    var loader = document.createElement("span");
    loader.classList.add("loader");
    button.innerHTML = "";
    button.appendChild(loader);
  
    // Simulating asynchronous operation
    setTimeout(function() {
      // Remove the loader and restore the button text
      button.removeChild(loader);
      button.innerHTML = "Submit";
    }, 2000);
  }
  
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
        // setTimeout(hideLoader, 3000);


  // function loaderfunction(){
  //   preloader.style.display = 'none';
  // }
  



  // axios








mainAddtoCart.addEventListener("click", ()=>{
  console.log("'"+mainAddtoCart.innerText+"'");
  if(mainAddtoCart.innerText==" Add Passes"){
  mainAddtoCart.innerText=1;
  mainAddtoCart.style.borderRadius=0;
  plusButton.style.display = 'inline-block';
  minusButton.style.display = 'inline-block';

}})
plusButton.addEventListener("click", ()=>{
  mainAddtoCart.innerText=parseInt(mainAddtoCart.innerText) +1;

  plusButton.style.display = 'inline-block';
  minusButton.style.display = 'inline-block';
  if (mainAddtoCart.innerText>=1){
    console.log(1);
    var discount_amount = Math.ceil((mainAddtoCart.innerText)*999*5/100) +50
    discountAmount.innerText=`Rs ${discount_amount}`
    var cutted_amount=parseInt(mainAddtoCart.innerText)*1049;
    cuttedAmount.innerText =  `Rs${cutted_amount}`;
    var finalMoney = cutted_amount-discount_amount;

    finalAmount.innerText = ` Rs${finalMoney}`;

  }
  else {
    console.log("more than 1");

  }

})
minusButton.addEventListener("click", ()=>{
  if(parseInt(mainAddtoCart.innerText)<2){
  plusButton.style.display = 'none';
  minusButton.style.display = 'none';
  mainAddtoCart.style.display='block'
  mainAddtoCart.innerHTML = `<svg class="add-to-cart icon" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
  </style><g><path class="st1" d="M26.1923828,21.6762695H8.0234375l3.8295898-19.4833984   C11.8659668,2.1270752,11.8521118,2.0645752,11.8519897,2H9.8522339H2.5c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h6.9591064   L5.8261719,22.4833984c-0.0576172,0.293457,0.019043,0.597168,0.2089844,0.828125s0.4736328,0.3647461,0.7724609,0.3647461   h19.3847656c0.5522461,0,1-0.4477539,1-1S26.7446289,21.6762695,26.1923828,21.6762695z"/><circle class="st1" cx="19.6256008" cy="28" r="2"/><circle class="st1" cx="12.2049274" cy="28" r="2"/><path class="st1" d="M10.871582,2L8.119873,16h15.4137573L30.5,2H10.871582z M21.1259766,10h-1.75v1.75   c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V10h-1.75c-0.5527344,0-1-0.4477539-1-1s0.4472656-1,1-1h1.75V6.25   c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V8h1.75c0.5527344,0,1,0.4477539,1,1S21.6787109,10,21.1259766,10z"/></g></svg>  Add Passes`;
  mainAddtoCart.style.borderRadius = '19px';
  console.log(mainAddtoCart.innerText);
  var discount_amount = 50+Math.ceil((mainAddtoCart.innerText)*999*5/100);
  discountAmount.innerText=`Rs 50`;
  finalAmount.innerText = '  Rs999';
  console.log("less than 2")
  cuttedAmount.innerText = 'Rs1049 ';

  
}else{
  mainAddtoCart.innerText=parseInt(mainAddtoCart.innerText) -1;
  if (mainAddtoCart.innerText>1){
    console.log(1);
    var discount_amount = 50+Math.ceil((mainAddtoCart.innerText)*999*5/100);
    var cutted_amount=parseInt(mainAddtoCart.innerText)*1049;
    cuttedAmount.innerText = `Rs${cutted_amount}`;
    discountAmount.innerText=`Rs ${discount_amount}`;
    var finalMoney = cutted_amount-discount_amount;

    finalAmount.innerText = ` Rs${finalMoney}`;
    
    

  }
  else {
    console.log("more than 1");
    discountAmount.innerText=`Rs 50`;
    finalAmount.innerText = '  Rs999';
    console.log("less than 2")
    cuttedAmount.innerText = 'Rs1049 ';
  }
}})



// Age selection started

mainAge.addEventListener("click", ()=>{
  console.log("'"+mainAge.innerText+"'");
  if(mainAge.innerText==" Select Age"){
  mainAge.innerText=18;
  mainAge.style.borderRadius=0;
  plusButtonAge.style.display = 'inline-block';
  minusButtonAge.style.display = 'inline-block';
}})
plusButtonAge.addEventListener("click", ()=>{
  console.log('plus worked');
  mainAge.innerText=parseInt(mainAge.innerText) +1;
  plusButtonAge.style.display = 'inline-block';
  minusButtonAge.style.display = 'inline-block';
})
minusButtonAge.addEventListener("click", ()=>{
  console.log('minus worked');
  if(parseInt(mainAge.innerText)<19){
    console.log('in if condition')
  plusButtonAge.style.display = 'none';
  minusButtonAge.style.display = 'none';
  mainAge.style.display='block'
  mainAge.innerHTML = `<svg class="add-to-cart icon" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
  </style><g><path class="st1" d="M26.1923828,21.6762695H8.0234375l3.8295898-19.4833984   C11.8659668,2.1270752,11.8521118,2.0645752,11.8519897,2H9.8522339H2.5c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1h6.9591064   L5.8261719,22.4833984c-0.0576172,0.293457,0.019043,0.597168,0.2089844,0.828125s0.4736328,0.3647461,0.7724609,0.3647461   h19.3847656c0.5522461,0,1-0.4477539,1-1S26.7446289,21.6762695,26.1923828,21.6762695z"/><circle class="st1" cx="19.6256008" cy="28" r="2"/><circle class="st1" cx="12.2049274" cy="28" r="2"/><path class="st1" d="M10.871582,2L8.119873,16h15.4137573L30.5,2H10.871582z M21.1259766,10h-1.75v1.75   c0,0.5522461-0.4472656,1-1,1s-1-0.4477539-1-1V10h-1.75c-0.5527344,0-1-0.4477539-1-1s0.4472656-1,1-1h1.75V6.25   c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1V8h1.75c0.5527344,0,1,0.4477539,1,1S21.6787109,10,21.1259766,10z"/></g></svg>  Select Age`;
  mainAge.style.borderRadius = '19px';
  console.log(mainAge.innerText);
}else{
  mainAge.innerText=parseInt(mainAge.innerText) -1;
}})




// Gender Selection started
function toggleDropdown() {
  var dropdown = document.getElementById("genderDropdown");
  dropdown.classList.toggle("open");
}

function selectGender(gender) {
  var genderButton = document.getElementById("gender-button");
  if(gender=='Male'){
    genderButton.innerHTML = `<i class="fas fa-mars"></i> Male`
    genderButton.style.color = 'white'
    genderButton.style.background = '#f06'
    genderButton.style.fontWeight='bold'
  }
  else{
    genderButton.innerHTML = `<i class="fas fa-venus"></i> Female`
    genderButton.style.color = 'white'
    genderButton.style.background = '#f06'
    genderButton.style.fontWeight='bold'
  }
  toggleDropdown(); // Hide the dropdown after selecting an option
}


function passDataAndRedirect(){
// loader start


  // loader ends here
  var quantity = document.getElementById('add-passes btn');
  var Gender = document.getElementById('gender-button');
  var Discount = document.querySelector('.dynamic-amount');
  var finalAmount = document.querySelector('.final-amount');
  var age = document.getElementById('age-selection');
  


  
  var response ={
    'discount':extractIntegersFromString(Discount.textContent),
    'gender':Gender.innerText,
    'quantity':quantity.innerText,
    'final_amount':extractIntegersFromString(finalAmount.textContent),
    'Age':age.innerText
  }
  localStorage.setItem('discount',extractIntegersFromString(Discount.textContent) );
  localStorage.setItem('gender',Gender.innerText );
  localStorage.setItem('quantity',quantity.innerText );
  localStorage.setItem('final_amount',extractIntegersFromString(finalAmount.textContent));
  localStorage.setItem('Age',age.innerText );
  console.log('local storage done');

  console.log(response);
  // checking for the valid pass quantity, age, gender

  if(quantity.innerText!= ' Add Passes' && Gender.innerText!= ' Gender' && parseInt(age.innerText)>=18 && parseInt(extractIntegersFromString(finalAmount.innerText))>0){

    const dotButton = document.getElementById('myButton');
    const buttonText = document.querySelector('.button-text');
    const dots = document.querySelector('.dots');
  
    dotButton.addEventListener('click', () => {
        // Toggle the visibility of the button text and the dots
        buttonText.style.opacity = 0;
        dots.style.display = 'flex';
    });
    var responseJSON = JSON.stringify(response);
    var nextPageURL = 'login_page.html'+"?data=" + encodeURIComponent(responseJSON)

    if (localStorage.getItem('mobile_user_id')==null && localStorage.getItem('google_user_id')==null){
    window.location.href = nextPageURL}
    else{
    window.location.href = 'payment_gateway.html'
    }

    console.log(response)
    return response}
  else{console.log('else');
    try{
      throw new Error("Please fill Quantity, Gender & Age Correctly!")
    } catch(error){
      var errorContainer = document.getElementById("error-message");
      // errorContainer.classList.add("show");
      errorContainer.innerText = error.message;
      errorContainer.style.display = "flex";
      errorContainer.style.color = "red";
      errorContainer.style.alignItems="center";
      errorContainer.style.fontSize="15px";
      errorContainer.style.justifyContent="center";
      errorContainer.classList.remove("hidden")

      setInterval(() => {
        errorContainer.classList.add("hidden");
      }, 3000);
    }
  }
}



function extractIntegersFromString(word) {
  // Use regular expression to match all numeric characters in the word
  const numbersOnly = word.match(/\d+/g);

  // If numbersOnly is not null, join the matches to get the final integer
  // Otherwise, return null
  return numbersOnly ? numbersOnly.join("") : null;
}


// get passes left data

function passes_left(event_id){
const url = 'https://mysite-ten-psi.vercel.app/passes_left/';
const eventJSON = {"event_id":event_id}

const requestOptions = {
method: 'POST',
headers: {
  'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
  'Content-Type': 'application/json',
},
body:JSON.stringify(eventJSON)
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

// to calculate the total amount


// eventsdata dynamic

function dynamic_pdp_content(event_id){
  const url = 'https://mysite-ten-psi.vercel.app/dynamic_pdp_content/';
  const orderJson = {"event_id":event_id}
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