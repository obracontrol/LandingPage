const reviews = document.querySelectorAll('.review');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
let currentReview = 0;

arrowRight.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length;
    updateCarousel();
});

arrowLeft.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateCarousel();
});

function updateCarousel() {
    reviews.forEach((review, index) => {
        review.style.transform = `translateX(-${currentReview * 100}%)`;
    });
}
