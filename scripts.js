// Card 1
const card = document.querySelector('.card');

// Card 2
const card2 = document.querySelector('.card-success');

// handleForm
const form = document.querySelector('.form');
const input = document.querySelector('.subscribe .input input');
const spanInvalid = document.querySelector('.subscribe .label span');

// handleSuccess
const pSuccess = document.querySelector('.card-success .content-success p');
const btnSuccess = document.querySelector('.card-success .content-success button');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //obtener los datos del formulario
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const regexEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!regexEmail.test(formJson.email)){
        spanInvalid.textContent = 'Email invalido';

        input.style.border = '1px solid var(--tomato)';
        input.style.backgroundColor = 'rgba(255, 99, 71, 0.1)';
        input.style.color = 'var(--tomato)';
        
        input.classList.add('shake');

        setTimeout(() => {
            input.classList.remove('shake');
        }, 1000);
        return
    }

    //mostrar mensaje de exito

    
    pSuccess.innerHTML = `A confirmation email has been sent to <strong>${formJson.email}</strong> Please open it and click the button inside to confirm your subscription.`;


    card.style.transform = 'scale(0)';
    card.style.transition = 'transform 0.2s ease-in-out';

    setInterval(() => {
        card.classList.add('hide');
        card2.style.transform = 'scale(0)';
        card2.classList.remove('hide');
        card2.style.transition = 'transform 0.3s ease-in-out';
        setInterval(() => {
            card2.style.transform = 'scale(1)';
        }, 0);
    }, 300);

});

btnSuccess.addEventListener('click', function () {
    window.location.reload();
})