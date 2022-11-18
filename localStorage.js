var makeInput = document.getElementById("make");
var emailInput = document.getElementById("email");

var storageInfo = JSON.parse(localStorage.getItem("storageInfo"));
if (storageInfo) {
  makeInput.value = storageInfo.make;
  emailInput.value = storageInfo.email;
}
document
  .getElementById("register-form")
  .addEventListener("submit", function () {
    var make = makeInput.value.trim();
    var email = emailInput.value.trim();

    if (!make || !email) {
      return;
    }

    var storageInfo = {
      email: email,
      make: make,
    };
    localStorage.setItem("storageInfo", JSON.stringify(storageInfo));
  });
