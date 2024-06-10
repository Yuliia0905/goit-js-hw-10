import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  const delay = Math.abs(Number(formElem.delay.value));
  const state = formElem.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        icon: '',
        messageColor: 'white',
        position: 'topRight',
        iconUrl: '../img/ok.svg',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        position: 'topRight',
        icon: '',
        messageColor: 'white',
        iconUrl: '../img/error.svg',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
  formElem.reset();
});

// ===============================================

const body = document.querySelector('body');
const murkup = `<section>
      <a href="./index.html" class="nav-link-timer">Go to home</a>
    </section>`;
body.insertAdjacentHTML('afterbegin', murkup);
