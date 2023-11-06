const form = document.querySelector("form")
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let modal = document.getElementById('modal')
let alertBox = document.getElementById('error')
let res = document.getElementById('res')

form.onsubmit = event => {
     event.preventDefault()

     const weight  = inputPeso.value
     const height  = inputAltura.value

     const showAlertError = notNumber(weight) || notNumber(height)

     if(showAlertError){
         alertBox.classList.add('open')
         return
     }

     alertBox.classList.remove('open')


     let imc = (weight / ((height / 100) ** 2)).toFixed(2)

     modal.classList.add("open")
     res.innerHTML = (`Seu IMC é de ${imc}`)

}

function fechar(){
    modal.classList.remove("open")
}

window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event){
   if(event.key === 'Escape'){
      fechar()
   }
}

function notNumber(value){
   return isNaN(value) || value == ""
}


inputPeso.oninput = () => alertBox.classList.remove('open')
inputAltura.oninput = () => alertBox.classList.remove('open')