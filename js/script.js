const form = document.getElementById('form')

const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const doc = document.getElementById('doc')
const password = document.getElementById('password')

const button = document.getElementById('submit')
const p = document.getElementById('results')


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
        setErrorFor(email, '* Campo Obrigatório *')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }

    if(phoneValue === '') {
        setErrorFor(phone, '* Campo Obrigatório *')
    } else if(phoneValue.length < 11) {
        setErrorFor(phone, 'Telefone inválido')
    } else {
        setSuccessFor(phone)
    }

    if(docValue === '') {
        setErrorFor(doc, '* Campo Obrigatório *')
    } else if(docValue.length < 11) {
        setErrorFor(doc, '* Documento inválido *')
    } else {
        setSuccessFor(doc)
    }

    if(passwordValue === '') {
        setErrorFor(password, '* Campo Obrigatório *')
    } else if(passwordValue.length < 1) {
        setErrorFor(doc, '* Campo Obrigatório *')
    } else {
        setSuccessFor(password)
    }

    if (username.value != '' && email.value != '' && phone.value != '' && doc.value != '' && password.value != '') {
        document.getElementById('results').innerHTML = 'Sucesso!'
        document.getElementById('results').style.color = '#00D6ED'
        document.getElementById('results').style.display = 'block'
        setTimeout(() => {
            document.getElementById('results').style.display = 'none'
            form.reset()
        }, 5000)
    } else {
        document.getElementById('results').innerHTML = 'Campos obrigatórios não registrados'
        document.getElementById('results').style.color = 'red';
        setTimeout(() => {
        document.getElementById('results').style.display = 'none'
        }, 3000)
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



