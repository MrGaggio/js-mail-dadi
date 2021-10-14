/* alert("prova!"); */


//Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull'esito del controllo.

/* STRUMENTI:

- Prompt
- Array
- For
- if / else


*/


// Chiedi all'utente la sua email
/* 
const email = prompt('Inserisci la tua email');

// Crea una lista di email

const authorizedEmail = ["steruggiu@gmail.com", "mario.rossi@tiscali.it", "paperino@disney.com", "batman@dc.com"]

// Se la mail è contenuta all'interno dell'array è autorizzata
// Se la mail non è contenuta nell'array non è autorizzata

let email_trovata = false

for (let i = 0; i < authorizedEmail.length; i++) {
    const accesso = authorizedEmail[i];
    if (email == accesso) {
        email_trovata = true    
    }
}
 
console.log(email_trovata) ;

if(email_trovata == true){
    /* console.log('la tua email è verificata'); */   
/* }else if(email_trovata == false){ */
    /* console.log('la tua mail non è verificata'); */
/* } */ 

//HO COMMENTATO I RISULTATI PER FARE I


    //SECONDO ESERCIZIO

// Genera un numero random da 1 a 6 sia per il giocatore che per il computer. Stabilire il vincitore in base a chi fa il punteggio + alto


/* STRUMENTI    

- Math.round
- math.random
- stabilire il vincitore


*/


// genera un numero random tra 1 e 6

num = Math.round(Math.random() * 5) + 1;






// assegnare giocatore e computer

const x = "giocatore"
const y = "computer"

