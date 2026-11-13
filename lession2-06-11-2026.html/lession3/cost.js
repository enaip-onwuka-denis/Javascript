let eta = Number(prompt("Quanti anni hai?"));
let prezzo = 10;

if (eta < 12) {
    prezzo = prezzo * 0.50;
} else if (eta <= 17) {
    prezzo = prezzo * 0.80;
} else if (eta <= 64) {
    prezzo = prezzo;
} else {
    prezzo = prezzo * 0.70;
}

alert("Il prezzo del biglietto è: " + prezzo.toFixed(2) + " €");