import { Modal } from './modal.js'
import { AlertError } from'./alerta-error.js'
import { calculateIMC, notNumber} from './utils.js'

export const inputWeight = document.querySelector("#weight")
export const inputHeight = document.querySelector("#height")
const btnCalculate = document.querySelector(".btn-calculate")

btnCalculate.addEventListener("click", handleClick)
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

function handleClick(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()

        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()

}

