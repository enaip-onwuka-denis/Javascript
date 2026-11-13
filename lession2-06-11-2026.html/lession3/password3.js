let username = prompt("Inserisci il nome utente:");
let password = prompt("Inserisci la password:");

if (username === "admin" && password === "12345") {
    alert("Welcome administrator!");
} else {
    alert("Wrong credentials!");
}