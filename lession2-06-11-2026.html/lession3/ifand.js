let anni= 19
let sesso = "Uomo";
if (anni >=18&&sesso=="Donna"){
    alert("Benvenuta");
}
else if(anni<18){
    alert("Accesso negato: sei minorenne");
}
else if(sesso!="Donna"){
    alert("Accesso negato: club per sole donne");
}
else{
    alert("Accesso negato");
}