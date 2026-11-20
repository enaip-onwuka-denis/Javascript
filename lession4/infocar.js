let auto = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2020,
    colore: "Bianco"
};

console.log(auto.marca);
console.log(auto.modello);

auto.colore = "Rosso";
auto.anno = 2022;
auto.prezzo = 15000;
console.log("prezzo" in auto);
console.log("alimentazione" in auto);
console.log(auto);