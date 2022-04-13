const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener('keyup', (event)=>{
    createTag(event.target.value);
    if(event.key == "Enter") {
        setTimeout(()=>{
            event.target.value=''
        },10);
        randomSelect();
    }

});

function createTag(input){
    const tags =input.split(',').filter(tag => tag.trim() != '');
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.innerText=tag;
        tagEl.classList.add('tag');
        tagsEl.appendChild(tagEl);
        
    });
} 

function randomSelect(){
    const interval = setInterval(() => {
        const randomTag = randomTagPicker();
        if(randomTag !== undefined){
            highlightTag(randomTag);
            setTimeout(() => {
                unhighlightTag(randomTag);      
            }, 100);
        }      

    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const chosenTag = randomTagPicker();
            highlightTag(chosenTag);
            
        }, 100);
        
    }, 6000);
}




function randomTagPicker(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
};

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unhighlightTag(tag){
    tag.classList.remove('highlight');
}
