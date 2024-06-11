// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard=5
let secondCard=9
let thirdCard=6
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum= firstCard + secondCard

function resultado(){
   // resultadoEl.textContent=sum
    if (sum<21){
        suma.textContent= "¿Quieres otra carta? 🤠"
    }else if (sum === 21){
        suma.textContent= "Felicidades, Ganaste!!! 🥳"
    }else if (sum>21){
        suma.textContent= "Estas fuera del juego 🥲"
    }
}

function otraCarta(){
    document.getElementById("carta3").textContent=thirdCard
    if (sum+thirdCard!=21){
        suma.textContent="Estas fuera del juego 🥲"
    }else if(sum+thirdCard===21){
        suma.textContent= "Felicidades, Ganaste!!! 🥳"
    }
}    


function pedirCartas(){
     document.getElementById("carta1").textContent=firstCard
     document.getElementById("carta2").textContent=secondCard
     resultado()
}

