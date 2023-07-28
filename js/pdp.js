

// Now you can use the `svgString` variable to embed or manipulate the SVG content as needed.


// Now you can use the `svgString` variable to embed or manipulate the SVG content as needed.
// const jsonDataString = passes_left();
// const jsonData = JSON.parse(jsonDataString);

// const left = passes_left()
// console.log('ee',left);

passes_left()
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
  
  var preloader = document.getElementById("loader");
  function loaderfunction(){
    preloader.style.display = 'none';
  }



  // axios



let mainAddtoCart= document.getElementById('add-passes btn');
let minusButton = document.getElementById('minus-btn');
let plusButton = document.getElementById('plus-btn');
let mainAge= document.getElementById('age-selection');
let minusButtonAge = document.getElementById('minus-btn-age');
let plusButtonAge = document.getElementById('plus-btn-age');


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
}else{
  mainAddtoCart.innerText=parseInt(mainAddtoCart.innerText) -1;
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
  if(parseInt(mainAge.innerText)>17){
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
    genderButton.style.background = 'red'
    genderButton.style.fontWeight='lighter'
  }
  else{
    genderButton.innerHTML = `<i class="fas fa-venus"></i> Female`
    genderButton.style.color = 'white'
    genderButton.style.background = 'red'
    genderButton.style.fontWeight='lighter'
  }
  toggleDropdown(); // Hide the dropdown after selecting an option
}


function passDataAndRedirect(){
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
  console.log(response);
  if(quantity.innerText!= ' Add Passes' && Gender.innerText!= ' Gender' && parseInt(age.innerText)>=18 && parseInt(extractIntegersFromString(finalAmount.innerText))>0){
    var responseJSON = JSON.stringify(response);
    var nextPageURL = 'login_page.html'+"?data=" + encodeURIComponent(responseJSON)

    window.location.href = nextPageURL

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


// function passDataAndRedirect() {
//   var response = {
//     'discount': extractIntegersFromString(Discount.textContent),
//     'gender': Gender.innerText,
//     'quantity': quantity.innerText,
//     'final_amount': extractIntegersFromString(finalAmount.textContent)
//   };

//   // Convert the response object to a JSON string
//   var responseJSON = JSON.stringify(response);

//   // Append the response as a query parameter to the URL
//   var nextPageURL = "next_page.html" + "?data=" + encodeURIComponent(responseJSON);

//   // Redirect to the next page
//   window.location.href = nextPageURL;
// }

function extractIntegersFromString(word) {
  // Use regular expression to match all numeric characters in the word
  const numbersOnly = word.match(/\d+/g);

  // If numbersOnly is not null, join the matches to get the final integer
  // Otherwise, return null
  return numbersOnly ? numbersOnly.join("") : null;
}


// get passes left data

function passes_left(){
const url = 'https://mysite-ten-psi.vercel.app/passes_left/';

const requestOptions = {
method: 'GET',
headers: {
  'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
  'Content-Type': 'application/json',
}
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
