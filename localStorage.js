const makeInput = document.getElementById('make');
const emailInput = document.getElementById('email');

let storageInfo = JSON.parse(localStorage.getItem('storageInfo'));
if (storageInfo) {
  makeInput.value = storageInfo.make;
  emailInput.value = storageInfo.email;
}
document
  .getElementById('register-form')
  .addEventListener('submit', () => {
    const make = makeInput.value.trim();
    const email = emailInput.value.trim();

    if (!make || !email) {
      return;
    }

    storageInfo = {
      email,
      make,
    };
    localStorage.setItem('storageInfo', JSON.stringify(storageInfo));
  });
