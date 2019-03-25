const slider = document.querySelector(`.slider`);
const paginationPanel = slider.querySelector(`.pagination`);

const slides = [
  {
    src: `images/slider-img-1.png`,
    title: `Текст<br />спецпредложения`
  },
  {
    src: `images/slider-img-2.png`,
    title: `Текст<br />спецпредложения 2`
  },
  {
    src: `images/slider-img-3.png`,
    title: `Текст<br />спецпредложения 3`
  },
  {
    src: `images/slider-img-4.png`,
    title: `Текст<br />спецпредложения 4`
  },
];

const changeSlide = (num) => {
  const img = slider.querySelector(`.slider__img`);
  const title = slider.querySelector(`.slider__text`);
  const slideItem = slides[num];

  img.setAttribute(`src`, slideItem.src);
  title.innerHTML = slideItem.title;
};

const changePaginationMark = (num) => {
  const activeClassName = `pagination__item--active`;
  const activeMark = paginationPanel.querySelector(`.` + activeClassName);
  const marks = paginationPanel.querySelectorAll(`.pagination__item`);

  activeMark.classList.remove(activeClassName);
  marks[num].classList.add(activeClassName);
};

const getItemIndex = (item) => {
  return [].indexOf.call(item.parentNode.children, item);
};

const paginationPanelHandler = (evt) => {
  const target = evt.target;

  // Исключаем посторонние события и активный маркер
  if (!target.classList.contains(`pagination__item`) && target.classList.contains(`pagination__item--active`)) {
    return;
  }

  // Получаем индекс нажатого маркера
  const index = getItemIndex(target);

  // Отмечаем маркер
  changePaginationMark(index);
  // Меняем слайд
  changeSlide(index);
};

paginationPanel.addEventListener(`click`, paginationPanelHandler);
