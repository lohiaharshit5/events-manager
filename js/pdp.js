var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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

  const reviewsContainer = document.querySelector('.review-content');

  console.log(window.location.href)
