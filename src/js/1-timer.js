import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from '../img/error.svg';

const startBtn = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const daysBox = document.querySelector('[data-days]');
const hoursBox = document.querySelector('[data-hours]');
const minutesBox = document.querySelector('[data-minutes]');
const secondsBox = document.querySelector('[data-seconds]');

let intervalId;
let userSelectedDate;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentTime = new Date();
    if (userSelectedDate > currentTime) {
      startBtn.disabled = false;
      startBtn.classList.add('is-active');
    } else {
      startBtn.disabled = true;
      iziToast.error({
        position: 'topRight',
        theme: 'dark',
        messageColor: 'white',
        iconUrl: imageUrl,
        color: '#ef4040',
        message: 'Please choose a date in the future',
      });
    }
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const currentDate = Date.now();
    const diff = userSelectedDate - currentDate;
    const timeLeft = convertMs(diff);
    startBtn.disabled = true;
    input.disabled = true;
    input.classList.add('active');
    startBtn.classList.remove('is-active');
    daysBox.textContent = addLeadingZero(timeLeft.days);
    hoursBox.textContent = addLeadingZero(timeLeft.hours);
    minutesBox.textContent = addLeadingZero(timeLeft.minutes);
    secondsBox.textContent = addLeadingZero(timeLeft.seconds);
    if (diff - 1000 < 0) {
      clearInterval(intervalId);
      input.disabled = false;
      startBtn.disabled = false;
      startBtn.classList.remove('is-active');
    }
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

// ===================================================================

// ================== additionaly ===============================

const body = document.querySelector('body');
const murkup = `<section>
      <a href="./index.html" class="nav-link-timer">Go to home</a>
    </section>`;
body.insertAdjacentHTML('afterbegin', murkup);
