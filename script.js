const h3 = document.createElement('h3');

h3.textContent = "Unfortunately, the 'Click for random pokemon' button can be pressed only once. You must refresh the page to press it again. (This content added by JavaScript)";

document.querySelector('body').appendChild(h3);



const boomClick = document.getElementById('header');
boomClick.addEventListener('click', function() {
    alert('BOOM!');
});

const pokeArray = [
    "https://cdn2.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png", 
  "https://cdn2.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/500px-008Wartortle.png", 
  "https://cdn2.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/500px-009Blastoise.png",
  "https://cdn2.bulbagarden.net/upload/thumb/7/73/004Charmander.png/500px-004Charmander.png",
  "https://cdn2.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/500px-005Charmeleon.png",
  "https://cdn2.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/500px-006Charizard.png",
  "https://cdn2.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png",
  "https://cdn2.bulbagarden.net/upload/7/73/002Ivysaur.png",
  "https://cdn2.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/500px-003Venusaur.png"
  ];
  
const random = Math.floor(Math.random() * pokeArray.length);





