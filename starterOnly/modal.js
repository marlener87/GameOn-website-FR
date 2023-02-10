function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// ajout
const modalBtnClose = document.querySelectorAll(".close");

// Const pour récupérer les valeurs dans les inputs
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationTournoi = document.getElementsByName("#location");


// POUR OUVRIR OU FERMER LE FORMULAIRE
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ajout fermeture modale
//modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction fermeture modale
function closeModal() {
  modalbg.style.display = "none";
}



// AJOUT CODE
// Pour vérifier si des champs ne sont pas correctement remplis
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'formData error';
  const small = formControl.querySelector('span');
  small.innerText = message;
}

// Pour vérifier si les champs sont correctement remplis
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'formData success';
}

// Pour vérifier si l'adresse mail est valide
function checkEmail(input) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'L\'email est invalide');
  }
}

// Vérifier les champs obligatoires
function champsRequis()










// création de la variable btn
let btn = document.querySelector('#button');

let control = document.querySelectorAll('.text-control');
let erreur = document.querySelectorAll('#erreur');
let input = document.querySelectorAll('input');
// création de la variable qui récupère les données de l'input
let inputValue = '';

// vérifie si l'input est vide ou rempli et affiche un message si il est vide
btn.addEventListener('click', function() {
  //console.log('coucou')
    // on récupère la valeur de l'input et on l'a met dans la variable
    inputValue = input.value;

    // condition si l'input est vide ou rempli
    if(inputValue == '') {
      console.log('coucou')
      erreur.innerHTML = 'Veuillez remplir ce champ';
    } else {
      console.log('coco')
      erreur.innerHTML = '';
    }

    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(birthdate.value);
    console.log(quantity.value);
    console.log(locationTournoi.value);

})


// VERIFIER SI LES CHAMPS REMPLIS SONT CONFORMES



function validate(firstName) {
  if (firstName.lenght <= 1) {
    erreur.innerHTML = 'Veuillez remplir ce champ';
  } else {
    erreur.innerHTML = '';
  }
}
