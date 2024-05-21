function mostrar_senha(){
    var inputPass = document.getElementById('senhaLabel')
    var btnShowPass = document.getElementById('eyeIcon')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}