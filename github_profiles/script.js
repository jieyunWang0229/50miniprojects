const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL +username);
        createUserCard(data);
        getRepoInfo(username);
        
    } catch (error) {
       if(error.response.status == 404){
           createErrorInfo('CANT FIND PAGE');
       }
    }

}

function createUserCard(info){
    const userName = info.name ? info.name : info.login;
    const userBio  = info.bio ? info.bio : '';

    const cardHTML = `
    <div class="card">
        <div>
        <img src="${info.avatar_url}" alt="${info.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userName}</h2>
            <p>${userBio}</p>
            <ul>
                <li>${info.followers}<strong>Followers</strong></li>
                <li>${info.following}<strong>Following</strong></li>
                <li>${info.public_repos}<strong>Repos</strong></li>
            </ul>
        <div id="repos"></div>

        </div>
    </div>`;
    main.innerHTML = cardHTML;

}

async function getRepoInfo(username){
 try {
     const { data } = await axios.get(APIURL + username + '/repos?sort=created' );
     createRepoInfo (data);
     
 }catch(error){
    createErrorInfo('Problem fetching repos');
 }

}

function createRepoInfo(repos){
    const reposEl = document.getElementById('repos');
    repos.slice(0,5)
         .forEach(repo => {
             const repoEl = document.createElement('a');
             repoEl.classList.add('repo');
             repoEl.href = repo.html_url;
             repoEl.innerText = repo.name;
             repoEl.target = '_blank';
             reposEl.appendChild(repoEl);
         })

}

 function createErrorInfo(msg) {
    const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML;

 }





form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if(user){
        getUser(user);
        search.value = '';
    }

})