const ratingsContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const button = document.querySelector('.btn');
const panel = document.getElementById('panel');
let ratemark = "Satisfield";

ratingsContainer.addEventListener('click', (e) => {
    clearActive();
    e.target.parentNode.classList.add('active');
    ratemark = e.target.nextElementSibling.innerHTML;
})

button.addEventListener('click', () => {
    panel.innerHTML = `
       <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${ratemark}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `

})

function clearActive(){
    ratings.forEach(rating=> {
        rating.classList.remove('active');
    } )
}