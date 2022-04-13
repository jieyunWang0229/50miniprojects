const result = document.getElementById('result');
const filter = document.getElementById('filter');
const liItems = [];

getData();
filter.addEventListener('input', (e) => {
    
    search(e.target.value)});

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50');
    const { results } = await res.json();
    result.innerHTML = ``;
    results.forEach(user=> {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        liItems.push(li);
        result.appendChild(li);

    });
}

function search(input) {
    liItems.forEach( item => {
        if (item.innerText.toLowerCase().includes(input.toLowerCase())) {
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }

    })
}

