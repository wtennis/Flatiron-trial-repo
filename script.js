const h3 = document.createElement('h3');

h3.textContent = "Unfortunately, the 'Click for random pokemon' button can be pressed only once. You must refresh the page to press it again. This content added by JavaScript";

document.querySelector('body').appendChild(h3);



const boomClick = document.getElementById('header');
boomClick.addEventListener('click', function() {
    alert('BOOM!');
});

/* I don't know why the code below does not work. 

document.getElementById('pokeSelector').addEventListener('click', function() {
    alert("Unfortunately, the /'Click for random pokemon/' button can be pressed only once. You must refresh the page to press it again.");
});

Could be cool to apply this code to change an image at regular intervals:

setInterval(() => {
  console.log('this will repeat every 500 milliseconds');
}, 500);

*/



const pokeArray = [
    "https://cdn2.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png", 
  "https://cdn2.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/500px-008Wartortle.png", 
  "https://cdn2.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/500px-009Blastoise.png",
  "https://cdn2.bulbagarden.net/upload/thumb/7/73/004Charmander.png/500px-004Charmander.png",
  "https://cdn2.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/500px-005Charmeleon.png",
  "https://cdn2.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/500px-006Charizard.png",
  "https://cdn2.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png",
  "https://cdn2.bulbagarden.net/upload/7/73/002Ivysaur.png",
  "https://cdn2.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/500px-003Venusaur.png",
  "https://cdn2.bulbagarden.net/upload/thumb/6/62/093Haunter.png/500px-093Haunter.png",
  "https://cdn2.bulbagarden.net/upload/thumb/c/cc/065Alakazam.png/500px-065Alakazam.png",
  "https://cdn2.bulbagarden.net/upload/thumb/1/13/053Persian.png/500px-053Persian.png",
  "https://cdn2.bulbagarden.net/upload/thumb/3/32/106Hitmonlee.png/500px-106Hitmonlee.png",
  "https://cdn2.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/500px-145Zapdos.png",
  "https://cdn2.bulbagarden.net/upload/thumb/0/05/038Ninetales.png/500px-038Ninetales.png",
  "https://cdn2.bulbagarden.net/upload/thumb/4/41/130Gyarados.png/500px-130Gyarados.png",
  "https://cdn2.bulbagarden.net/upload/thumb/c/cd/024Arbok.png/500px-024Arbok.png",
  "https://cdn2.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/500px-059Arcanine.png",
  "https://cdn2.bulbagarden.net/upload/thumb/3/3f/078Rapidash.png/500px-078Rapidash.png",
  "https://cdn2.bulbagarden.net/upload/thumb/8/88/026Raichu.png/500px-026Raichu.png",
  "https://cdn2.bulbagarden.net/upload/thumb/9/9b/111Rhyhorn.png/500px-111Rhyhorn.png",
  "https://cdn2.bulbagarden.net/upload/thumb/b/ba/123Scyther.png/500px-123Scyther.png",
  "https://cdn2.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/500px-143Snorlax.png",
  "https://cdn2.bulbagarden.net/upload/thumb/8/8f/068Machamp.png/500px-068Machamp.png",
  "https://cdn2.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/500px-150Mewtwo.png",
  "https://cdn2.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/500px-146Moltres.png",
  "https://cdn2.bulbagarden.net/upload/thumb/b/b1/151Mew.png/500px-151Mew.png",
  "https://cdn2.bulbagarden.net/upload/thumb/9/9a/095Onix.png/500px-095Onix.png",
  "https://cdn2.bulbagarden.net/upload/thumb/a/a0/088Grimer.png/500px-088Grimer.png",
  "https://cdn2.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/500px-094Gengar.png",
  "https://cdn2.bulbagarden.net/upload/thumb/d/dd/136Flareon.png/500px-136Flareon.png",
  "https://cdn2.bulbagarden.net/upload/thumb/9/93/148Dragonair.png/500px-148Dragonair.png",
  "https://cdn2.bulbagarden.net/upload/thumb/1/1d/091Cloyster.png/500px-091Cloyster.png",
  "https://cdn2.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/500px-144Articuno.png",
  "https://cdn2.bulbagarden.net/upload/thumb/e/e8/142Aerodactyl.png/500px-142Aerodactyl.png",
  "https://cdn2.bulbagarden.net/upload/thumb/b/bb/135Jolteon.png/500px-135Jolteon.png",
  ];
  
const random = Math.floor(Math.random() * pokeArray.length);





