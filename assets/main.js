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

let email_trovata = false

for (let i = 0; i < authorizedEmail.length; i++) {
    const accesso = authorizedEmail[i];
    if (email == accesso) {
        email_trovata = true    
    }
}
 
console.log(email_trovata) ;

if(email_trovata == true){
 console.log('la tua email è verificata');    
}else if(email_trovata == false){ 
console.log('la tua mail non è verificata'); 
} 

