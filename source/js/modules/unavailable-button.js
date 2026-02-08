const buttons = document.querySelectorAll('.card-room__button');
const AVAILABLE_TEXT = 'Забронировать';
const UNAVAILABLE_TEXT = 'Распродано';

const changeButtonState = (button) => {
  if (button.classList.contains('unavailable')) {
    button.disabled = true;
    button.textContent = UNAVAILABLE_TEXT;
  } else {
    button.disabled = false;
    button.textContent = AVAILABLE_TEXT;
  }
};

buttons.forEach(changeButtonState);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const button = mutation.target;
      changeButtonState(button);
    }
  });
});

buttons.forEach((button) => {
  observer.observe(button, {
    attributes: true,
    attributeFilter: ['class']
  });
});
