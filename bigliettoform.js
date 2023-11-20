

let nameUser = "valore iniziale vuoto";
let kmUser = "valore iniziale vuoto";
let ageUser = "valore iniziale vuoto";
let prezzoBiglietto = "valore iniziale vuoto";
let prezzoScontato = "valore iniziale vuoto";

// riferimenti degli id
const inputName = document.getElementById("user_name");
const inputKm = document.getElementById("user_km");
const inputAge = document.getElementById("user_age");
const buttonUser = document.getElementById("send_user");

// funzione bottone
buttonUser.addEventListener("click", function () {
    nameUser = inputName.value;
    kmUser = inputKm.value;
    ageUser = inputAge.value;

    console.log("Nome Utente:", nameUser);
    console.log("Chilometri:", kmUser);
    console.log("Età:", ageUser);

    // calcolo prezzo
    const prezzoBiglietto = kmUser * 0.21;

    // calcolo sconti
    if (ageUser < 18) {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto * 20) / 100);

    } else if (ageUser > 65) {
        prezzoScontato = prezzoBiglietto - ((prezzoBiglietto * 40) / 100);
    } else {
        prezzoScontato = prezzoBiglietto * 1;
    }

    console.log(prezzoScontato);
});

