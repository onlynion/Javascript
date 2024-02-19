// Step-1: Where to add
const placesList = document.getElementById('places-list');
// Step-2: What to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli bon';
// Step-3: Add the child
placesList.appendChild(li);

// Step-1: Where to Add
const mainContainer = document.getElementById('main-content');
// Step-2: What to be adeed
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Kacchi Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Badam sorbot';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Gorur goshto';
ul.appendChild(li3);

section.appendChild(ul);

// Step-3: Add the child
mainContainer.appendChild(section);


// Set innerHTML directly
const scetionDress = document.createElement('section');

scetionDress.innerHTML = `
<h1>My Dress Section </h1>
<ul>
    <li>Blazer</li>
    <li>Panjabi</li>
    <li>Leather Jacket</li>
</ul>
`
mainContainer.appendChild(scetionDress);