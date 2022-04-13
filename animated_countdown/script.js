const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

replay.addEventListener('click', ()=>{
    restart();
    runAnimation();
})

function runAnimation(){
    nums.forEach((num,idx) => {
        
        const nextToLast = nums.length -1;
        num.addEventListener('animationend',(e) =>{

            if(e.animationName === 'goIn' &&  idx !== nextToLast){
               
                num.classList.remove('in');
                num.classList.add('out');
            }else if(e.animationName == 'goOut' && num.nextElementSibling){
                num.classList.remove('out');
                num.nextElementSibling.classList.add('in');

            }else{
                
                counter.classList.add('hide');
                final.classList.add('show');
            }

        })
    })
}

function restart() {
    final.classList.remove('show');
    final.classList.add('hide');
    counter.classList.remove('hide');
    counter.classList.add('show');
    nums.forEach(num => {
        num.classList.value ='';
    })
    nums[0].classList.add('in');
}