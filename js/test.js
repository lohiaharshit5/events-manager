// script.js

const dotButton = document.getElementById('myButton');
const buttonText = document.querySelector('.button-text');
const dots = document.querySelector('.dots');
console.log(dotButton);
console.log(buttonText);
console.log(dots);

dotButton.addEventListener('click', () => {
    // Toggle the visibility of the button text and the dots
    buttonText.style.opacity = 0;
    dots.style.display = 'flex';
});
