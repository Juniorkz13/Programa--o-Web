let numeroAleatorio = Math.floor(Math.random() * 100) + 1
console.log('Numero aleatório', numeroAleatorio)

const input = document.querySelector('#divForm input')
const btn = document.querySelector('#divForm button')
const ultimoResultado = document.querySelector('.ultimoResultado')
const palpites = document.querySelector('.palpites')
const baixoOuAlto = document.querySelector('.baixoOuAlto')
const tentativas = document.querySelector('span')

let contagem = 1
let reset = null
const divForm = document.querySelector('#divForm')

btn.addEventListener('click', () => {
    let numero = Number(input.value)
    if (numero < 1 || numero > 100) {
        ultimoResultado.textContent =
            'Por favor, digite um número entre 1 e 100'
        ultimoResultado.style.color = 'red'
        input.focus()
    } else if (numero === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!'
        ultimoResultado.style.color = 'green'
        btn.disabled = true
        input.disabled = true
        input.style.backgroundColor = 'lightgreen'
        reset = document.createElement('button')
        reset.textContent = 'Jogar novamente'
        reset.addEventListener('click', reiniciarJogo)
        divForm.appendChild(reset)
    } else if (contagem === 10) {
        ultimoResultado.textContent =
            'Você errou o número secreto ' + numeroAleatorio
        ultimoResultado.style.color = 'red'
        btn.disabled = true
        input.disabled = true
        input.style.backgroundColor = 'red'
        baixoOuAlto.textContent = ''
        tentativas.textContent = 10 - contagem
        reset = document.createElement('button')
        reset.textContent = 'Jogar novamente'
        reset.addEventListener('click', reiniciarJogo)
        divForm.appendChild(reset)
    } else {
        ultimoResultado.textContent = 'Errou!'
        ultimoResultado.style.color = 'orange'
        if (numero > numeroAleatorio && contagem != 11) {
            palpites.textContent += ' ' + numero + ' '
            baixoOuAlto.textContent = 'O número secreto é menor que ' + numero
            baixoOuAlto.style.color = 'blue'
            input.focus()
            tentativas.textContent = 10 - contagem
            contagem++
        } else if (numero < numeroAleatorio && contagem != 11) {
            palpites.textContent += ' ' + numero + ' '
            baixoOuAlto.textContent = 'O número secreto é maior que ' + numero
            baixoOuAlto.style.color = 'blue'
            input.focus()
            tentativas.textContent = 10 - contagem
            contagem++
        }
    }
})

const reiniciarJogo = () => {
    window.location.reload()
}
