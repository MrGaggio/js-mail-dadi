//HO COMMENTATO I RISULTATI PER FARE I


    //SECONDO ESERCIZIO

// Genera un numero random da 1 a 6 sia per il giocatore che per il computer. Stabilire il vincitore in base a chi fa il punteggio + alto


/* STRUMENTI    

- Math.round
- math.random
- stabilire il vincitore


*/




// genera un numero random tra 1 e 6 per il giocatore
prompt('Premi invio per generare il tiro del giocatore')
numGiocatore = Math.round(Math.random() * 5) + 1;
// mostra a schermo il risultato del tiro del giocatore
document.getElementById("giocatore").innerHTML = "il tiro del giocatore è pari a " + numGiocatore


// genera un numero random tra 1 e 6 per il computer
prompt('Adesso premi invio per generare la giocata del computer')
numComputer = Math.round(Math.random() * 5) + 1;
// mostra a schermo il risultato del tiro del computer
document.getElementById("computer").innerHTML = "il tiro del computer è pari a " + numComputer


// Dichiara il vincitore
if( numGiocatore > numComputer){
    document.getElementById("numGiocatore").innerHTML = "il giocatore ha vinto con il tiro di " + numGiocatore
}else if( numComputer > numGiocatore){
    document.getElementById("numComputer").innerHTML = "il computer ha vinto con il tiro di " + numComputer
}else if( numComputer == numGiocatore){
    document.getElementById("pareggio").innerHTML = "avete pareggiato, ritirate i dadi "
}


