const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const input = document.getElementById('inputcontent');
let text = 'We love eat banana!';
let index = 1;
let speed = 700/ speedEl.value;

writeText();
function writeText () {
    
    textEl.innerText = text.slice(0,index);

    index++;
    
    if(index > text.length){
        index == 1;
       
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300/ e.target.value);

input.addEventListener('keypress', (e) =>{
  if(e.key === "Enter") {
      text =`${e.target.value}`;
      index = 1;
      e.target.value = '';
      writeText();

  }
})