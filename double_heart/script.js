const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let timesClicked = 0;

loveMe.addEventListener('dblclick', (e) => {
    createLike(e);
})

function createLike(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    const offsetX = e.target.offsetLeft;
    const offsetY = e.target.offsetTop;

    const insideX = x - offsetX;
    const insideY = y - offsetY;
    
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    heart.style.top = `${insideY}px`;
    heart.style.left = `${insideX}px`;
    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;
    setTimeout(() => heart.remove(), 3000);

}