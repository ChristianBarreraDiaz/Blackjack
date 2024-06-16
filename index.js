
let sum=0
let cartasEl=[] //Array de cartas
let message ="" //Mensaje principal estado del juego
let cartas= document.getElementById("cartasEl") //Muestra el Array de acartas en html cartasEl
let sumaEl=document.getElementById("suma")
let enJuego= false
let blackJack= false


function numeroRandom(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if (randomNumber>10){
        return 10
    }else if (randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}

function pedirCartas(){
    enJuego= true
    blackJack= false
    let firstCard=numeroRandom()
    let secondCard=numeroRandom()
    sum= firstCard + secondCard //Suma de las cartas 
    cartasEl=[firstCard, secondCard] //Array de cartas
    estado()
}

function estado(){
    cartas.textContent="Cartas: "//textContent presenta un mensaje en cartas
    for(let i=0; i<cartasEl.length; i+=1){
        cartas.textContent+=cartasEl[i]+" "
    }
    sumaEl.textContent="Suma: "+ sum
    if (sum<21){
        message= "¿Quieres otra carta?"
    }else if (sum === 21){
        message= "Felicidades, Ganaste!"
        blackJack= true
    }else if (sum>21){
        message= "Estas fuera del juego"
        enJuego= false
    }
    document.getElementById("message-el").textContent=message
}

function otraCarta(){
    if(enJuego===true && blackJack===false){
        let thirdCard=numeroRandom()
        sum+=thirdCard
        cartasEl.push(thirdCard)
        estado()
    }
}    


