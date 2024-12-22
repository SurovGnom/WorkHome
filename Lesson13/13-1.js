document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const textArea = document.getElementById('textarea');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('textError');


    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const submitButton = document.getElementById('button');


    submitButton.addEventListener('click', function (event) {
        event.preventDefault();


        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';


        let isValid = true;


        if (!nameRegex.test(nameInput.value)) {
            nameError.innerText = '\nІм\'я має містити тільки літери.';
            nameError.style.color ='red';
            nameError.style.fontSize ='10px';
            isValid = false;
        }


        if (textArea.value.length < 5) {
            messageError.innerText = '\nПовідомлення повинно бути не менше 5 символів.';
            messageError.style.color ='red';
            messageError.style.fontSize ='10px';
            isValid = false;
        }


        if (!phoneRegex.test(phoneInput.value)) {
            phoneError.innerText = '\nТелефон має починатися з +380 і містити 9 цифр.';
            phoneError.style.color ='red';
            phoneError.style.fontSize ='10px';
            isValid = false;
        }


        if (!emailRegex.test(emailInput.value)) {
            emailError.innerText = '\nEmail має містити @ та крапку.';
            emailError.style.color ='red';
            emailError.style.fontSize ='10px';
            isValid = false;
        }


        if (isValid) {
            console.log('Ім\'я:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Телефон:', phoneInput.value);
            console.log('Повідомлення:', textArea.value);
        }
    });
})
