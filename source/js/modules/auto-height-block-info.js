const cards = document.querySelectorAll('.card-room');

const updateInfoHeight = () => {
  cards.forEach((card) => {
    const orderBlock = card.querySelector('.card-room__order');
    const popup = card.querySelector('.card-room__popup');
    const infoBlock = card.querySelector('.card-room__info');
    const contentBlock = card.querySelector('.card-room__content');

    if (orderBlock && popup && infoBlock && contentBlock) {
      const orderHeight = orderBlock.offsetHeight;

      const contentStyle = window.getComputedStyle(contentBlock);
      const paddingBottom = parseFloat(contentStyle.paddingBottom);

      const totalHeight = orderHeight + paddingBottom;

      infoBlock.style.minHeight = `${totalHeight }px`;
    }
  });
};

export {updateInfoHeight};
