const header_top = document.querySelector('.header_top');
const header_mid = document.querySelector('.header_mid');

window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;

  if (scroll == 0 && scroll < 53) {
    header_top.style.overflow = 'visible';
    header_top.style.height = '44px';
    header_mid.style.height = '100px';
    header_mid.classList.remove('header_mid_scroll');
  } else if (scroll > 53 && scroll < 106) {
    header_top.style.overflow = 'hidden';
    header_top.style.height = '0px';
    header_mid.style.height = '91px';
    header_mid.classList.remove('header_mid_scroll');
  } else if (scroll > 106) {
    header_mid.style.height = '65px';
    header_mid.classList.add('header_mid_scroll');
  }
});

const header_top_default = () => {};

const header_top_scrolled = () => {};
