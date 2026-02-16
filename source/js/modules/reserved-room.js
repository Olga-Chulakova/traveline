const cardsContainer = document.querySelector('.rooms__cards-wrapper');
const cards = document.querySelectorAll('.card-room');
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
let activeCard = null;

const openPopup = (popup) => {
  popup.classList.add('is-active');
};

const closePopup = (popup) => {
  popup.classList.remove('is-active');
};

const initPopup = () => {

  cardsContainer.addEventListener('click', (e) => {
    if (e.target.closest('.card-room__button')) {
      e.stopPropagation();
      activeCard = e.target.closest('.card-room');

      if (isTouchDevice) {
        const popup = activeCard.querySelector('.card-room__popup');
        if (popup) {
          openPopup(popup);
          activeCard = null;
          return;
        }
      }
    }

    if (e.target.closest('.card-room')) {
      const card = e.target.closest('.card-room');
      const popup = card.querySelector('.card-room__popup');
      const payLink = card.querySelector('.card-room__link-pay');

      if (popup.classList.contains('is-active')) {
        closePopup(popup);
        payLink.setAttribute('tabindex', '-1');
      }
    }
  });

  if (!isTouchDevice) {
    cards.forEach((card) => {
      card.addEventListener('mouseleave', () => {
        if (activeCard === card) {
          const popup = card.querySelector('.card-room__popup');
          const payLink = card.querySelector('.card-room__link-pay');
          if (popup) {
            openPopup(popup);
            payLink.setAttribute('tabindex', '0');
          }
          activeCard = null;
        }
      });
    });
  }
};

export {initPopup};
