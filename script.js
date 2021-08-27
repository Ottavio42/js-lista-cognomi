var cognome = ["bianchi", "neri", "gialli", "viola"]
var Tcognome = prompt("Inserisci il tuo Cognome:");
cognome.push(Tcognome);
console.log(cognome.sort());
document.getElementById("posizione").innerHTML = "la tua posizione è: " + (cognome.indexOf(Tcognome) + 1 );