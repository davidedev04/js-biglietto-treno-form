

let nameUser = "valore iniziale vuoto";
let kmUser = "valore iniziale vuoto";
let ageUser = "valore iniziale vuoto";

// riferimenti degli id
const inputName = document.getElementById("user_name");
const inputKm = document.getElementById("user_km");
const inputAge = document.getElementById("user_age");
const buttonUser = document.getElementById("send_user");

// funzione bottone
buttonUser.addEventListener("click", function () {
    // Assegna i valori degli input alle variabili
    nameUser = inputName.value;
    kmUser = inputKm.value;
    ageUser = inputAge.value;

    // ENTRAAAAHHH???
    console.log("Nome Utente:", nameUser);
    console.log("Chilometri:", kmUser);
    console.log("Età:", ageUser);
});