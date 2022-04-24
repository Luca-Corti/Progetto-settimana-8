"use strict";
class User {
    constructor(nome, modello) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.modello = modello;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
        console.log(`Ricarica di ${unaRicarica}€ effettuata da ${this.nome}`);
    }
    chiamata(minutiDurata) {
        if (minutiDurata * 0.20 < this.carica) {
            this.numeroChiamate++;
            this.carica -= minutiDurata * 0.20;
            console.log(`Chiamata terminata. Durata chiamata: ${minutiDurata} minuti.`);
        }
        else {
            alert("Credito non sufficiente per effettuare una chiamata così lunga, esegui una ricarica o parla di meno ;)");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Chiamate di ${this.nome} azzerate.`);
    }
}
let FirstUser = new User('Aldo', 'MotorolaBaracca');
let SecondUser = new User('Giovanni', 'Iphone');
let ThirdUser = new User('Giacomo', 'Samsung');
FirstUser.ricarica(20);
SecondUser.ricarica(50);
ThirdUser.ricarica(100);
console.log(FirstUser.numero404());
console.log(SecondUser.numero404());
console.log(ThirdUser.numero404());
FirstUser.chiamata(40);
SecondUser.chiamata(5);
ThirdUser.chiamata(15);
console.log(FirstUser.numero404());
console.log(SecondUser.numero404());
console.log(ThirdUser.numero404());
FirstUser.chiamata(10);
SecondUser.chiamata(10);
ThirdUser.chiamata(10);
console.log(FirstUser.getNumeroChiamate());
console.log(SecondUser.getNumeroChiamate());
console.log(ThirdUser.getNumeroChiamate());
console.log(FirstUser.numero404());
console.log(SecondUser.numero404());
console.log(ThirdUser.numero404());
FirstUser.azzeraChiamate();
SecondUser.azzeraChiamate();
ThirdUser.azzeraChiamate();
console.log(FirstUser.getNumeroChiamate());
console.log(SecondUser.getNumeroChiamate());
console.log(ThirdUser.getNumeroChiamate());
console.log(FirstUser);
console.log(SecondUser);
console.log(ThirdUser);
//resetto credito
FirstUser.ricarica(-10);
SecondUser.ricarica(-47);
ThirdUser.ricarica(-95);
console.log(FirstUser);
console.log(SecondUser);
console.log(ThirdUser);
console.log('********************************FINE PROVE********************************');
document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById("utenti");
    var strUser = select.value;
    select.addEventListener('change', function () {
        strUser = select.value;
        console.log(strUser);
    });
    var ricarica_btn = document.getElementById("ricarica-btn");
    ricarica_btn.addEventListener('click', function () {
        var ricarica = document.getElementById("ricarica");
        var importo = ricarica.value * 1;
        if (strUser === 'aldo') {
            FirstUser.ricarica(importo);
            document.getElementById("span-ricarica").innerText = `Ricarica effettuata! ${importo}€`;
        }
        else if (strUser === 'giovanni') {
            SecondUser.ricarica(importo);
            document.getElementById("span-ricarica").innerText = `Ricarica effettuata! ${importo}€`;
        }
        else if (strUser === 'giacomo') {
            ThirdUser.ricarica(importo);
            document.getElementById("span-ricarica").innerText = `Ricarica effettuata! ${importo}€`;
        }
        else {
            alert("invalid user or input");
        }
    });
    var chiamata_btn = document.getElementById("chiamata-btn");
    chiamata_btn.addEventListener('click', function () {
        var chiamata = document.getElementById("chiamata");
        var minuti = chiamata.value * 1;
        if (strUser === 'aldo') {
            let num = FirstUser.getNumeroChiamate();
            FirstUser.chiamata(minuti);
            let num2 = FirstUser.getNumeroChiamate();
            if (num2 > num) {
                document.getElementById("span-chiamata").innerText = `Chiamata terminata! Durata: ${minuti} minuti`;
            }
        }
        else if (strUser === 'giovanni') {
            let num = SecondUser.getNumeroChiamate();
            SecondUser.chiamata(minuti);
            let num2 = SecondUser.getNumeroChiamate();
            if (num2 > num) {
                document.getElementById("span-chiamata").innerText = `Chiamata terminata! Durata: ${minuti} minuti`;
            }
        }
        else if (strUser === 'giacomo') {
            let num = ThirdUser.getNumeroChiamate();
            ThirdUser.chiamata(minuti);
            let num2 = ThirdUser.getNumeroChiamate();
            if (num2 > num) {
                document.getElementById("span-chiamata").innerText = `Chiamata terminata! Durata: ${minuti} minuti`;
            }
        }
        else {
            alert("invalid user or input");
        }
    });
    var azzera_btn = document.getElementById("azzera-btn");
    azzera_btn.addEventListener('click', function () {
        if (strUser === 'aldo') {
            FirstUser.azzeraChiamate();
            document.getElementById("span-azzera").innerText = `Chiamate azzerate!`;
        }
        else if (strUser === 'giovanni') {
            SecondUser.azzeraChiamate();
            document.getElementById("span-azzera").innerText = `Chiamate azzerate!`;
        }
        else if (strUser === 'giacomo') {
            ThirdUser.azzeraChiamate();
            document.getElementById("span-azzera").innerText = `Chiamate azzerate!`;
        }
        else {
            alert("invalid user or input");
        }
    });
    var credito_btn = document.getElementById("credito-btn");
    credito_btn.addEventListener('click', function () {
        if (strUser === 'aldo') {
            document.getElementById("span-credito").innerText = `Credito residuo: ${FirstUser.numero404()}€`;
        }
        else if (strUser === 'giovanni') {
            document.getElementById("span-credito").innerText = `Credito residuo: ${SecondUser.numero404()}€`;
        }
        else if (strUser === 'giacomo') {
            document.getElementById("span-credito").innerText = `Credito residuo: ${ThirdUser.numero404()}€`;
        }
        else {
            alert("invalid user or input");
        }
    });
});
