const userName = document.querySelector('#make');
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#message');

let formData = {
  name: '',
  email: '',
  message: '',
};
const loadFormData = () => {
  const persistantData = localStorage.getItem('form');
  if (persistantData) {
    const data = JSON.parse(persistantData);
    userName.value = data.name;
    userEmail.value = data.email;
    userMessage.value = data.message;
    formData = data;
  }
};

const stringfyForm = () => {
  const data = JSON.stringify(formData);
  localStorage.setItem('form', data);
};

userName.addEventListener('input', () => {
  formData.name = userName.value;
  stringfyForm();
});
userEmail.addEventListener('input', () => {
  formData.email = userEmail.value;
  stringfyForm();
});

userMessage.addEventListener('input', () => {
  formData.message = userMessage.value;
  stringfyForm();
});

loadFormData();
