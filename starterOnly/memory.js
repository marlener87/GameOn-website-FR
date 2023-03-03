


// variables

// fonctions

// events 



// TODO : 
/*

V1: 
- Terminer les fonctions de validations (checkbox + btn radios )
- Chaque fonction de validation doit retourner vrai ou faux
- recupere ces valeurs dans l'event sur le click du btn submit (const isFirstnameIsvalid, ...)
//- En fonction de ces valeurs on affiche soit une erreur générale (sous le btn de validation du formulaire) soit on masque le formulaire et on affiche la fenetre "merci" 
//- Reset le formulaire une fois qu'il est validé 
//- Ne pas oublier : quand on ferme la fenetre "merci " de re switcher affichage formulaire / fenetre merci ( pour pouvoir recommencer une inscription )

Finitions : 
- documentation de chaque fonction ( en vert )
- commentaire si besoin, là ou c'est difficile
- Ordre des fonctions (on déclare C avant A)
- Variables => fonctions => events 
- ESLint 


La semaine d'après : 
- Tout vérifier
- Utiliser l'api html constrainte

*/

function openClosePageNavigation() {
    console.log('on click');

    var nodeNavigation = document.getElementById("pageNavigation");

    if (nodeNavigation.classList.contains("isNavigationOpen")) {
        nodeNavigation.classList.remove("isNavigationOpen");
    } else {
        nodeNavigation.classList.add("isNavigationOpen");
    } 
}


// On récupère le noeud avec l'ID myTopnav
const superBtn = document.querySelector("#mySuperBtn");
superBtn.addEventListener("click", openClosePageNavigation);


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


// TO OPEN OR CLOSE THE FORM
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// closing modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// closing modal form
function closeModal() {
    modalbg.style.display = "none";


    const tutu = document.querySelector('#Tutu');
    tutu.classList.remove('active');

    // qsdqsdqsd
    const titi = document.querySelector('#Titi');
    titi.classList.remove('hidden');
}


// AJOUT CODE
/**
 * Pour vérifier si des champs ne sont pas correctement remplis
 */
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formData error';
    const small = formControl.querySelector('span');
    small.innerText = message;
}

/**
 * Pour vérifier si les champs sont correctement remplis
 */
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formData success';
}


let control = document.querySelectorAll('.text-control');
let erreur = document.querySelectorAll('#erreur');
let input = document.querySelectorAll('input');
// création de la variable qui récupère les données de l'input
let inputValue = '';
let today = new Date().toISOString().split('T')[0];
document.getElementsByName('birthdate')[0].setAttribute('max', today);


let btn = document.querySelector('#button');
let inputFirst = document.querySelector('#first');
let inputLast = document.querySelector('#last');
let inputEmail = document.querySelector('#email');
let inputBirthdate = document.querySelector('#birthdate');
let inputQuantity = document.querySelector('#quantity');


/**
 * function to validate email
 */
function checkInputValidationEmail() {
    const error = document.querySelector('#emailError');

    //console.log('on insert');
    //console.log(event.target);
    //console.log(event.target.value);
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
    let valueToCheck = email.value;

    if (regex.test(valueToCheck)) {
        error.innerHTML = '';
    } else {
        error.innerHTML = 'Merci de remplir correctement ce champ.';
    }
    console.log(email.value);
}

/**
 * function to validate birthdate
 */
function checkInputValidationBirthdate(toto, titi) {
    const error = document.querySelector('#birthdateError');
    //let date = new Date();
    let birthday = birthdate.value;

    //console.log(date);
    if (birthday === '') {
        error.innerHTML = 'Merci de remplir ce champ';
    } else {
        error.innerHTML = '';
    }

    return true
    console.log(birthdate.value);
}

/**
 * function to validate tournament quantity
 */
function checkInputValidationQuantity() {
    const error = document.querySelector('#quantityError');
    if (quantity.value === '' || isNaN(quantity.value) || quantity.value >= 100) {
        error.innerHTML = 'Merci de remplir ce champ';
    } else {
        error.innerHTML = '';
    }
    console.log(quantity.value);
}


// function checkInputFirstName () {
//   //console.log('coucou')
//   const error = document.querySelector('#firstNameError');

//   if (firstName.value === '' || firstName.value.length < 2) {
//       error.innerHTML = 'Merci de remplir ce champ';
//   } else {
//       error.innerHTML = '';
//   }
//   console.log(firstName.value);
// }

// function checkInputLastName() {
//   const error = document.querySelector('#lastNameError')

//   if (lastName.value === '' || lastName.value.length < 2) {
//       error.innerHTML = 'Merci de remplir ce champ';
//     } else {
//         error.innerHTML = '';
//   }
//   console.log(lastName.value);
// }


/**
 * function to validate lastname and firstname
 */
function checkInputsValidationName(inputName, inputId) {
    const error = document.querySelector('#' + inputId);

    let isInputValid = false;

    if (inputName.value === '' || inputName.value.trim().length < 2) {
        error.innerHTML = 'Merci de remplir ce champ';
        isInputValid = false;
    } else {
        error.innerHTML = '';
        isInputValid = true;
    }

    return isInputValid;
}


// creation of the button variable
btn.addEventListener('click', (event) => {
    event.preventDefault();


    const truc = document.querySelector('input[name="location"]:checked');

    if(truc === null) {
        console.log('pas de truc')
    }else{
        console.log('truc')
        console.log(truc.value)
    }


    const toto = document.querySelector('#Toto')

    const isFirstnameIsValid = checkInputsValidationName(firstName, 'firstNameError');

    // const isLastnameIsValid = checkInputsValidationName(lastName, 'lastNameError');
    // const isEmailIsValid = checkInputValidationEmail();
    // const isBirthdateisValid = checkInputValidationBirthdate();
    // const isQuantityisvalid = checkInputValidationQuantity();


    if (isFirstnameIsValid) {
        toto.innerHTML = "";

        const tutu = document.querySelector('#Tutu');
        tutu.classList.add('active');

        const titi = document.querySelector('#Titi');
        titi.classList.add('hidden');

        resetMyForm()
    } else {

        toto.innerHTML = "Aie le formulaire n'est pas bon";
    }


})


/**
 * 
 */
function resetMyForm () {
    inputFirst.value = '';
}

// creation of the firstname variable
inputFirst.addEventListener('input', (event) => {
    event.preventDefault();

    //checkInputFirstName();
    checkInputsValidationName(firstName, 'firstNameError');
})

// creation of the lastname variable
inputLast.addEventListener('input', (event) => {
    event.preventDefault();

    //checkInputLastName();
    checkInputsValidationName(lastName, 'lastNameError');
})

inputEmail.addEventListener('input', (event) => {
    event.preventDefault();

    checkInputValidationEmail();
})

inputBirthdate.addEventListener('input', (event) => {
    event.preventDefault();

    checkInputValidationBirthdate()
})

inputQuantity.addEventListener('input', (event) => {
    event.preventDefault();

    checkInputValidationQuantity();
})


/*let btnLast = document.querySelector('#btnClickLast');
btnLast.addEventListener('click', (event) => {
  event.preventDefault();

  const error = document.querySelector('#lastNameError')

  if (lastName.value === '' || lastName.value.length < 2) {
      error.innerHTML = 'Merci de remplir ce champ';
  } else {
      error.innerHTML = '';
  }
  console.log(lastName.value);
})*/

/*let btnBirthdate = document.querySelector('#btnClickBirthdate');
btnBirthdate.addEventListener('click', (event) => {
  event.preventDefault();

  const error = document.querySelector('#birthdateError');
  let date = new Date();
  let birthday = birthdate.value;
  //birthdate.value === '' || 

  console.log(date);
  if(birthday >= date) {
    //console.log('coucou');
    error.innerHTML = 'Merci de remplir ce champ';
  } else {
    //console.log('au revoir')
    error.innerHTML = '';
  }
  console.log(birthdate.value);
})*/

/*let btnQuantity = document.querySelector('#btnClickQuantity');
btnQuantity.addEventListener('click', (event) => {
  event.preventDefault();

  const error = document.querySelector('#quantityError');
  if (quantity.value === '' || isNaN(quantity.value)) {
      error.innerHTML = 'Merci de remplir ce champ';
  } else {
      error.innerHTML = '';
  }
  console.log(quantity.value);

})*/

// vérifie si l'input est vide ou rempli et affiche un message si il est vide
/*btn.addEventListener('click', function (event) {
  //console.log('coucou')
  event.preventDefault();
  console.log("coucou");


  const error = document.querySelector('#firstNameError')

  if (firstName.value === '') {
      error.innerHTML = 'Aie une erreur est survenue... oups alors...';
  } else {
      error.innerHTML = '';
  }


  // on récupère la valeur de l'input et on l'a met dans la variable
  inputValue = input.value;

  // condition si l'input est vide ou rempli
  if (inputValue == '') {
      console.log('coucou')
      erreur.innerHTML = 'Veuillez remplir ce champ';
  } else {
      console.log('coco')
      erreur.innerHTML = '';
  }


  console.log(lastName.value);
  console.log(email.value);
  console.log(birthdate.value);
  console.log(quantity.value);
  console.log(locationTournoi.value);

})*/