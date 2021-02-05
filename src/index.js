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

const Layer = (props) => {
  return `
  <div class="layer">
  <div class="layer__color" style="background-color: ${props.color}"></div>
  <div class="layer__label">${props.label}</div>
  </div>
`;
};
/* 
const cappuccinoLayers = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

cappuccinoLayers.forEach((layer) => {
  cappuccinoDrink.innerHTML += Layer(layer);
}); */

const Drink = (props) => {
  const element = document.createElement('div');
  element.className = 'drink';
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
    <img src="assets/cups/${props.id}.png" />
  </div>
  <div class="drink__info">
    <h3>${props.name}</h3>
    <div id="app">${props.layers.map((layer) => Layer(layer))}</div>
    </div>
    </div>
    <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`;

  const orderBtn = element.querySelector('.order-btn');
  const selectedDrink = element.querySelector('.drink__cup');

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

  return element;
};

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const drinksList = document.querySelector('.drinks-list');
drinks.forEach((drink) => {
  drinksList.appendChild(Drink(drink));
});
