const form = document.getElementById('form')

const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const doc = document.getElementById('doc')
const password = document.getElementById('password')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const docValue = doc.value.trim()
    const passwordValue = password.value.trim()


    if(usernameValue === '') {
        setErrorFor(username, '* Campo Obrigatório *')
    } else if(usernameValue.length < 3) {
        setErrorFor(username, 'Nome incompleto')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro e adicionar  a classe erro
        setErrorFor(email, '* Campo Obrigatório *')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
        campos['email'] = false
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
        campos['email'] = true
    }

    if(phoneValue === '') {
        // mostrar erro e adicionar a classe erro
        setErrorFor(phone, '* Campo Obrigatório *')
        // campos['phone'] = false
    } else if(phoneValue.length < 11) {
        setErrorFor(phone, 'Telefone inválido')
        // campos['phone'] = false
    } else {
        setSuccessFor(phone)
    }

    if(docValue === '') {
        // mostrar erro e adicionar a classe erro
        setErrorFor(doc, '* Campo Obrigatório *')
    } else if(docValue.length < 11) {
        setErrorFor(doc, '* Documento inválido *')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(doc)
    }

    if(passwordValue === '') {
        // mostrar erro e adicionar a classe erro
        setErrorFor(password, '* Campo Obrigatório *')
        // campos['password'] = false
    } else if(passwordValue.length < 6) {
        setErrorFor(doc, '* Campo Obrigatório *')
        campos['password'] = false
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
        // campos['password'] = true
    }
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}


function result() {
    if(!checkInputs()) {
        results.style.display = 'block'
        results.innerHTML = 'Campos obrigatórios não registrados'
        setTimeout(function(){results.style.display = 'none';}, 6000);
        return false
    }
}