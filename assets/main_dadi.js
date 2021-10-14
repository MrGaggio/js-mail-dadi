//HO COMMENTATO I RISULTATI PER FARE I


    //SECONDO ESERCIZIO

// Genera un numero random da 1 a 6 sia per il giocatore che per il computer. Stabilire il vincitore in base a chi fa il punteggio + alto


/* STRUMENTI    

- Math.round
- math.random
- stabilire il vincitore


*/


// genera un numero random tra 1 e 6


/* prompt('Premi invio per generare il tiro del') + " giocatore"; */
function giocatore() {
numGiocatore = Math.round(Math.random() * 5) + 1;
console.log(numGiocatore);
document.getElementById("giocatore").innerHTML ="Giocatore, il tuo tiro è pari a: " + num;
}

/* prompt('Adesso premi invio per generare la giocata del') + " computer" */
function computer() {
numComputer = Math.round(Math.random() * 5) + 1;
document.getElementById("computer").innerHTML ="Computer, il tuo tiro è pari a: " + num;
}

if( numGiocatore > numComputer){
    alert('mi dispiace computer, ha vinto il giocatore')
}else if( numComputer > numGiocatore){
    alert('mi dispiace giocatre, ha vino il computer')
}else if( numGiocatore == numComputer){
    alert('avete pareggiato, provate un nuovo tiro di dadi')
}



// fare 2 tiri di dadi, dare un nome a ogni tiro, stabilire il numero + alto tra i 2






