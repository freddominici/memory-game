document.addEventListener('DOMContentLoaded', ()=> {
    const loginInput = document.querySelector('.loginInput');
    const loginBtn = document.querySelector('.loginBtn');

    const validadeInput = ({ target })=>{
        if (target.value.length > 2){
            loginBtn.removeAttribute('disabled');
        } else {
            loginBtn.setAttribute('disabled', '')
        }
    }

    loginInput.addEventListener('input', validadeInput);
})