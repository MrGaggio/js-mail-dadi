/* alert("prova!"); */


//Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull'esito del controllo.

/* STRUMENTI:

- Prompt
- Array
- For
- if / else


*/


// Chiedi all'utente la sua email

const email = prompt('Inserisci la tua email');


// Crea una lista di email

const authorizedEmail = ["steruggiu@gmail.com", "mario.rossi@tiscali.it", "paperino@disney.com", "batman@dc.com"]


// Se la mail è contenuta all'interno dell'array è autorizzata
// Se la mail non è contenuta nell'array non è autorizzata



for (let i = 0; i < authorizedEmail.length; i++) {
    const accesso = authorizedEmail[i];
    if (email == accesso) {
    console.log('puoi continuare a inserire i tuoi dati')
    }else if(email != accesso)
    alert('mi spiace non sei autorizzato')
    
    }



    //SECONDO ESERCIZIO

// Genera un numero random da 1 a 6 sia per il giocatore che per il computer. Stabilire il vincitore in base a chi fa il punteggio + alto


//Genera un numero random



