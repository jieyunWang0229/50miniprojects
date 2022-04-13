const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input' , (e)=> {
    console.log(e.target.value)
    const length = e.target.value.length;
    const  value = 20 - length*2;
    background.style.filter = `blur(${value}px)`
})