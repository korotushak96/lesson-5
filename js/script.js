let menu = document.querySelector('.menu'),
    menuItem = menu.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);
let newLi= document.createElement('li');
newLi.classList.add('menu-item');
newLi.textContent = 'Пятый елемент'
menu.appendChild(newLi);
document.body.style.background = 'url(/img/apple_true.jpg)';
document.body.querySelector('.title').textContent='Мы продаем только подлинную технику Apple';
let adv = document.body.querySelector('.adv');
adv.hidden = true;
let promptDiv = document.querySelector('.prompt');
promptDiv.textContent = prompt('Что думаете о Apple?')