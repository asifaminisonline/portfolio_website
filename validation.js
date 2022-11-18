let checkEmail;
const validateForm = () => {
  const validEmail = checkEmail();
  return validEmail;
};
const registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', (event) => {
  if (!validateForm()) { event.preventDefault(); }
});

let makeValid;
let makeInValid;

checkEmail = () => {
  const inputEl = document.querySelector('#email');
  const inputFeedbackEl = document.querySelector('#email-feedback');
  const regExp = /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/; //eslint-disable-line
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  }

  makeInValid(inputEl, inputFeedbackEl);

  return false;
};

makeInValid = (inputEl, inputFeedbackEl) => {
  inputFeedbackEl.classList.add('text-danger');
  inputFeedbackEl.innerText = ('make sure to use lowercase letters , (@)  (.) in your email');
};
