document.addEventListener('DOMContentLoaded', ()=> {
    const loginInput = document.querySelector('.loginInput');
    const loginBtn = document.querySelector('.loginBtn');
    const loginForm = document.querySelector('.loginForm')

    const validateInput = ({ target })=>{
        if (target.value.length > 2){
            loginBtn.removeAttribute('disabled');
        } else {
            loginBtn.setAttribute('disabled', '');
        }
    }

    loginInput.addEventListener('input', validateInput);

    const handleSubmit = (event)=>{
        event.preventDefault();
        localStorage.setItem('player', loginInput.value);
        window.location = 'game.html'
    }

    loginForm.addEventListener('submit', handleSubmit)
})