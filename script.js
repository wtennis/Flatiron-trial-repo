const h2 = document.createElement('h2');

h2.textContent = "This content added by JavaScript";

document.querySelector('body').appendChild(h2);



const boomClick = document.getElementById('header');
boomClick.addEventListener('click', function() {
    alert('BOOM!');
});




