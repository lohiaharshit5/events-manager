const reviewsContainer = document.querySelector('.reviews-content');

function addReview(text) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.textContent = text;
  reviewsContainer.appendChild(reviewElement);
}

// Example usage:
addReview('This product is amazing!');
addReview('Great customer service!');
addReview('Highly recommended! awjnedejdednudjhenduehdnndnd');
addReview('Highly recommended!');
addReview('Highly recommended!');
addReview('Highly recommended!');
addReview('Highly recommended!');
addReview('Highly recommended!');
addReview('Highly recommended!');
