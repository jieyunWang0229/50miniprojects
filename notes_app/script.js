const addBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
   notes.forEach(note => addNewNote(note))
};


addBtn.addEventListener('click', ()=> {
    addNewNote();
});

clearBtn.addEventListener('click', ()=> {
    localStorage.clear();
})



function addNewNote(text = '' ) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  

    `;

    const edit = note.querySelector('.edit');
    const remove = note.querySelector('.delete');
    const main  = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    textarea.value = text;
    main.innerHTML = marked(text);

    remove.addEventListener('click', ()=>{
        note.remove();
    })

    edit.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
    })

    document.body.appendChild(note);
  

}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes =[];
    notesText.forEach(note => {
        notes.push(note.value)
    })
    localStorage.setItem('notes', JSON.stringify(notes));

}
