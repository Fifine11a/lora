import './index.html';
import './style.css';

console.log('You better work, b*tch! ;)');

const navBtn = document.getElementById('nav-btn');
const navClosed = document.getElementById('nav-closed');
const navItem = document.querySelectorAll('.nav-item');
const orderBtn = document.querySelector('.order-btn');
const selectedDrink = document.querySelector('.drink__cup');
const cappuccinoDrink = document.getElementById('cappuccino');

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

const Layer = (props) => {
  return `
<div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: ${props.color}"
                  ></div>
                  <div class="layer__label">${props.layer}</div>
                </div>
`;
};

const cappuccinoLayers = [
  { color: '#feeeca', layer: 'mléčná pěna' },
  { color: '#fed7b0', layer: 'teplé mléko' },
  { color: '#613916', layer: 'espresso' },
];

cappuccinoLayers.forEach((layer) => {
  cappuccinoDrink.innerHTML += Layer(layer);
});
