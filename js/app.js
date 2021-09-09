const emailInput = document.getElementById('floatingInput')
const passwordInput = document.getElementById('floatingPassword')
const validOrInvalid = document.getElementById('valid-invalid')

const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function(){
    const emailInputValue = emailInput.value
    const passwordInputValue = passwordInput.value

    console.log(emailInputValue)
    console.log(passwordInputValue)
    
    /* email check */
    if((/^\S+@\S+\.\S+$/).test(emailInputValue)===true){
        emailInput.classList.add('bg-mail-success')
        emailInput.classList.remove('bg-mail-danger')

        validOrInvalid.innerText = 'This is a valid address'
        validOrInvalid.classList.add('text-success', 'd-block')
        validOrInvalid.classList.remove('text-danger', 'd-none')
    }
    else{
        emailInput.classList.add('bg-mail-danger', )
        emailInput.classList.remove('bg-mail-success')

        validOrInvalid.innerText = 'This is an invalid address'
        validOrInvalid.classList.add('text-danger', 'd-block')
        validOrInvalid.classList.remove('text-success', 'd-none')
    }

    /* password check */
    if((/^[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(passwordInputValue)===true){
        passwordInput.classList.add('bg-password-success')
        passwordInput.classList.remove('bg-password-danger')
    }
    else{
        passwordInput.classList.add('bg-password-danger')
        passwordInput.classList.remove('bg-password-success')
    }
})
// /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,32})$/