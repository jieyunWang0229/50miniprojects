const contents = document.querySelectorAll('.content');
const tags = document.querySelectorAll('li');


tags.forEach((tag,idx) => {
    tag.addEventListener('click', () => {
        
        removeShow();
        removeActive();

        contents[idx].classList.add('show');
        tag.classList.add('active');
    })
})

function removeShow(){
    contents.forEach(content => {
        content.classList.remove('show');
    })
}

function removeActive(){
    tags.forEach(tag => {
        tag.classList.remove('active');
    })
}