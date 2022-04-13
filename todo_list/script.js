const form = document.getElementById('form');
const input = document.getElementById('input');
const todosEl = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todolist'));



todos.forEach( todo => {
    createTodo(todo);
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    createTodo();
})

function createTodo(todo){
    let todocontent = input.value;
    if(todo){
        todocontent = todo.text;
    }
    if(todocontent){
        const todoEl =  document.createElement('li');
        if(todo && todo.complete){
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todocontent;
        todosEl.appendChild(todoEl);
        todoEl.addEventListener('click', ()=> {
            todoEl.classList.add('completed');
            updateStorage()

        })
        todoEl.addEventListener('contextmenu', (e)=> {
            e.preventDefault();
            todoEl.remove()
            updateStorage()
        })
    }
   
   input.value = '';
   updateStorage()

}

function updateStorage(){
    var todoArr = [];
    const alltodo = document.querySelectorAll('li');
    alltodo.forEach(todo => {
        todoArr.push({
            text: todo.innerText,
            complete: todo.classList.contains('completed')
        })
    })
    localStorage.setItem('todolist', JSON.stringify(todoArr));
}