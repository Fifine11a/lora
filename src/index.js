import './index.html';
import './style.css';

console.log('You better work, b*tch! ;)');

const navBtn = document.getElementById('nav-btn');
const navClosed = document.getElementById('nav-closed');
const navItem = document.querySelectorAll('.nav-item');

const showNaw = (e) => {
  navClosed.classList.toggle('nav-closed');
};

navBtn.addEventListener('click', showNaw);

navItem.forEach((item) => {
  item.addEventListener('click', showNaw);
});
