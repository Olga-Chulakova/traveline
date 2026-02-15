import {initPopup} from './modules/reserved-room.js';
import {updateInfoHeight} from './modules/auto-height-block-info.js';
import './modules/unavailable-button.js';

document.addEventListener('DOMContentLoaded', () => {
  initPopup();
  updateInfoHeight();
});

window.addEventListener('resize', updateInfoHeight);
