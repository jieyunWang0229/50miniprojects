const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('.btn');
const chooseInsectBtn = document.querySelectorAll('.choose-insect-btn');
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0;
let score = 0;
let selected_insect ={};


startBtn.addEventListener('click', () =>{
    screens[0].classList.add('up');
})

chooseInsectBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src,alt }
        screens[1].classList.add('up');
        console.log(selected_insect);
        setTimeout(createInsect,1000);
        startGame();
    })
})

function startGame(){
    setInterval(increaseTime, 1000);
}

function createInsect(){
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.left = `${x}px`;
    insect.style.top = `${y}px`;
    insect.innerHTML = `
    <img
    src="${selected_insect.src}"
    alt="${selected_insect.alt}" style = " transform: rotate(${Math.random() *360}deg)"/>
    `
    game_container.appendChild(insect);
    
    insect.addEventListener('click', catchInsect);

}

function getRandomLocation(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random()*(width -200) +100;
    const y = Math.random()*(height -200) +100;
    return { x, y };
}

function increaseTime(){
    var m =Math.floor(seconds / 60);
    var s = seconds % 60;
    s = s < 10 ? `0${s}`:s;
    m = m < 10 ? `0${m}`:m;
    timeEl.innerHTML = `Time : ${m}:${s}`
    seconds++
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => {
        this.remove();
    }, 2000);
    addInsect();
}

function addInsect(){
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore(){
    score++;
    if(score > 19){
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `score: ${score}`;
}