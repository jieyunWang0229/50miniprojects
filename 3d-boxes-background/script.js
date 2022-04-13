const boxContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    boxContainer.classList.toggle('big');
})

function createBoxes() {
    for(let i = 0; i < 4; i++){
        for(let j = 0; j<4; j++){
            const boxEl = document.createElement('div');
            boxEl.classList.add('box');
            const xPosition = -j*125;
            const yPosition = -i*125;
            boxEl.style.backgroundPosition = `${xPosition}px ${yPosition}px`;
            boxContainer.appendChild(boxEl);
        }

    }
}

createBoxes();