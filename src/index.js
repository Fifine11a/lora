import './index.html';
import './style.css';

console.log('You better work, b*tch! ;)');

const navBtn = document.getElementById('nav-btn');
const navClosed = document.getElementById('nav-closed');
const navItem = document.querySelectorAll('.nav-item');
const orderBtn = document.querySelector('.order-btn');
const selectedDrink = document.querySelector('.drink__cup');

const showNaw = (e) => {
  navClosed.classList.toggle('nav-closed');
};

navBtn.addEventListener('click', showNaw);

navItem.forEach((item) => {
  item.addEventListener('click', showNaw);
});

const orderDrink = (e) => {
  if (selectedDrink.classList.contains('drink__cup--selected')) {
    selectedDrink.classList.toggle('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
  } else {
    selectedDrink.classList.toggle('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
  }
};

orderBtn.addEventListener('click', orderDrink);
