
const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll' , () => {
    if(window.pageYOffset > 200) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

const pageTopBtn = document.querySelector('#back-to-top');
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});