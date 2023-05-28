import Notiflix from 'notiflix';

let formData = {};
let position = 1;
const refs = {
  form: document.querySelector('.form'),
};
const createPromise = (position, delay) => {
const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    const idTimeout = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};
const onFormData = (e) => {
  formData[e.target.name] = Number(e.target.value);
};
const onSubmitCreatePromises = (e) => {
  e.preventDefault();
  for (let i = 0; i < formData.amount; i += 1) {
    const delay = formData.delay + i * formData.step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    position += 1;
  }
};
refs.form.addEventListener('input', onFormData);
refs.form.addEventListener('submit', onSubmitCreatePromises);