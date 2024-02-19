const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightgray'
}

const place = document.getElementById('places-container');
place.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');