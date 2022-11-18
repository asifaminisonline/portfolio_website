if(storageInfo){
    makeInput.value = storageInfo.make;
    emailInput.value = storageInfo.email;
}
document.getElementById('register-form')
.addEventListener('submit', function (){
     
var make = makeInput.value.trim();
var email = emailInput.value.trim();

if(!make || !email){
return;
}

var storageInfo = {
    make: make,
    email: email
}
localStorage.setItem("storageInfo", JSON.stringify(storageInfo));
});