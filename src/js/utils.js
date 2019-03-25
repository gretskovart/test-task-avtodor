// Показываем/скрываем меню для мобильной версии
const toggleMenu = (evt) => {
  let btn = evt.target;

  // Находим кнопку
  if (btn.tagName === `SPAN`) {
    btn = btn.parentNode;
  }

  // Получаем класс блока
  const className = getNavClass(btn.className)[1];
  // Находим меню следующее после кнопки
  const nav = btn.nextElementSibling;

  // Показываем/скрываем
  nav.classList.toggle(className + `__list--active`);
};

const getNavClass = (className) => {
  const regExp = /(\w+-nav+)__/;

  return className.match(regExp);
};

const maintoggle = document.querySelector(`.main-nav__toggle`);
const secondToggle = document.querySelector(`.second-nav__toggle`);
const thirdToggle = document.querySelector(`.third-nav__toggle`);

maintoggle.addEventListener(`click`, toggleMenu);
secondToggle.addEventListener(`click`, toggleMenu);
thirdToggle.addEventListener(`click`, toggleMenu);


// Имитируем клик по ссылке у пунктов меню
const clickByLink = (evt) => {
  const target = evt.target;

  // Исключаем лишние события
  if (target.tagName !== `LI`) {
    return;
  }

  // Получаем URL дочерней ссылки элемента
  const url = getUrl(target);

  // Делаем переход
  window.location.href = url;
};

const getUrl = (item) => {
  let link = null;

  do {
    link = item.firstChild;
  } while (item.firstChild.tagName !== `A`);

  return link.getAttribute(`href`);
};

const sidebar = document.querySelector(`.sidebar`);
const secondNav = document.querySelector(`.second-nav`);

sidebar.addEventListener(`click`, clickByLink);
secondNav.addEventListener(`click`, clickByLink);
