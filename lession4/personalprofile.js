let persona = {
    nome: "Luca",
    cognome: "Rossi",
    eta: 20,
    citta: "Torino"
};

console.log(persona.nome + " " + persona.cognome);
console.log(persona.eta);
persona.eta = 21
persona.professione = "Studente";
delete persona.citta;
console.log(persona);
