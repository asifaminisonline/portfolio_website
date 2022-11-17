let registrationForm =document.querySelector('#register-form');
registrationForm.addEventListener('submit', function (event){
    if (! validateForm())
    event.preventDefault();   
});

let validateForm = () =>{
   var validUsername= checkUserName();
   var validEmail= checkEmail();
   var validMessage= checkMessage();
   return (validUsername && validEmail && validMessage)
};

let checkUserName = () =>{
    let  inputEl = document.querySelector('#make');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z]/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true
    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
    }
   return false 
};

let checkEmail = () =>{
    let  inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true
    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
    }
    return false
};

let checkMessage = () =>{
    let  inputEl = document.querySelector('#message');
    let inputFeedbackEl = document.querySelector('#message-feedback');
    let regExp = /^[a-zA-Z0-9]{10,500}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true
    }
    else{
        makeInValid(inputEl,inputFeedbackEl);
    }
    return false
};

let makeValid = (inputEl,inputFeedbackEl) =>{
   inputEl.classList.add('is-form-valid');
   inputEl.classList.remove('is-form-invalid');
   inputFeedbackEl.classList.add('text-success');
   inputFeedbackEl.classList.remove('text-danger'); 
   inputFeedbackEl.innerText = 'Looks Good';
};

let makeInValid = (inputEl,inputFeedbackEl) =>{
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger'); 
    inputFeedbackEl.innerText = `Please Enter ${inputEl.placeholder}`;
 };