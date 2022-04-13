const faq_toggles = document.querySelectorAll('.faq-toggle');

faq_toggles.forEach(toggle => {
    toggle.addEventListener('click', ()=>{
        toggle.parentNode.classList.toggle('active');
    })
})