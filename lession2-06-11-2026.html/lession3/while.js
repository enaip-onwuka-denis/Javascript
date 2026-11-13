let i=0;
while(i<3){
    console.log(i);
    i++;
}

let parola;
while (true){
    parola = prompt("Scrivere una parola, Scrivere fino per anullare");
    if (parola== "fine"){
        alert("fino del ciclo.");
        break;
    }
    else{
        alert(parola);
    }
}