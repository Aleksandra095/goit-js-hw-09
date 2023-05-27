import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

window.onload = () => {
    const datePicker = flatpickr('#datetime-picker', {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate.getTime() < Date.now()) {
            window.alert('Please choose a date in the future');
        } else {
            startTimer(selectedDate);
        }
    },
});
    const daysElement = document.querySelector('[data-days]');
    const hoursElement = document.querySelector('[data-hours]');
    const minutesElement = document.querySelector('[data-minutes]');
    const secondsElement = document.querySelector('[data-seconds]');
    const startButton = document.querySelector('[data-start]');

    let countdownInterval;

    startButton.addEventListener('click', () => {
    const selectedDate = datePicker.selectedDates[0];
        if (!selectedDate) {
            window.alert('Please choose a date and time');
        return;
    }

    if (selectedDate.getTime() < Date.now()) {
        window.alert('Please choose a date in the future');
        return;
    }

    startTimer(selectedDate);
});
    function startTimer(selectedDate) {
        clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        const timeDifference = selectedDate.getTime() - Date.now();
        if (timeDifference <= 0) {
        updateTimerValues(0, 0, 0, 0);
        clearInterval(countdownInterval);
            startButton.disabled = false;
        } else {
        const { days, hours, minutes, seconds } = convertMs(timeDifference);
        updateTimerValues(days, hours, minutes, seconds);
        }
    }, 1000);
        startButton.disabled = true;
        datePicker.close();
    }
    function updateTimerValues(days, hours, minutes, seconds) {
        daysElement.textContent = addLeadingZero(days);
        hoursElement.textContent = addLeadingZero(hours);
        minutesElement.textContent = addLeadingZero(minutes);
        secondsElement.textContent = addLeadingZero(seconds);
    }
    function addLeadingZero(value) {
        return value.toString().padStart(2, '0');
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
};