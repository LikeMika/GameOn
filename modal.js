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
const closeModal = document.querySelector(".close-modal");
const buttonClose = document.querySelector(".button-close");
const emailFields = document.getElementById("email");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const quantity = document.getElementById("quantity");
const naissance = document.getElementById("birthdate");
const tournois = document.getElementsByName("location");
const success = document.getElementById("success");
const formulaire = document.getElementById("form");
const form = document.getElementById("form");
const error = document.querySelector(".formData");

//variable de controle
let verifChamp = false;
let verifQantity = false;
let verifRadio = false;
let verifSelect = false;



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModaleEvent() {
  modalbg.style.display = "none";
  console.log("modale fermée");
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch close modal event
closeModal.addEventListener("click", closeModaleEvent);
buttonClose.addEventListener("click", closeModaleEvent);

// Fonction de vérification des champs input text
function verifierChamp(champ) {
  const valeurChamp = champ.value.trim();
   // Variable Regex pour valider une adresse email
   const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   console.log("VerifChamp"+verifChamp)
  // Si le champ est vide, on modifie le css pour afficher l'état d'erreur et on modifie la valeur de la variable de controle
  if (champ.value === "" || valeurChamp.length < 2 || (champ.type === "email" && !regexEmail.test(valeurChamp))) {
    champ.parentElement.setAttribute('data-error-visible', 'true');
    verifChamp = true;
  }
  else {
    champ.parentElement.setAttribute('data-error-visible', 'false');
    if (verifChamp)
    {
      verifChamp = true;
    }
    else
    {
      verifChamp = false;
    }

  }
}

//Fonction de vérification de l'input qantité
function verifierQantity(qant) {
  let numberFloat = parseFloat(quantity.value);
  if (isNaN(numberFloat)) {
    qant.parentElement.setAttribute('data-error-visible', 'true');
    verifQantity = true;
  }
  else {
    qant.parentElement.setAttribute('data-error-visible', 'false');
    verifQantity = false;
  }
}

// Fonction de vérification de l'input Radio
function verifyRadioSelection(groupName) {
  const radioButtons = document.getElementsByName(groupName);
  let isChecked = false;

  // On verifie si au moins un bouton radio est coché
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          isChecked = true;
          break;
      }
  }

  // Si aucun bouton n'est coché, on modifie la propriété css pour afficher l'erreur
  if (!isChecked) {
      for (const radioButton of radioButtons) {
        radioButton.parentElement.setAttribute('data-error-visible', 'true');
        verifRadio = true;
      }
        
  } else {
      // Si tout est OK et qu'un bouton est coché, on laisse tel quel
      for (const radioButton of radioButtons) {
        radioButton.parentElement.setAttribute('data-error-visible', 'false');
        verifRadio = false;
      }
  }

}

//Fonction de vérification de l'input Checkbox
function verifyCheckbox(checkbox) {
  const selectButton = document.getElementById(checkbox);
  let isChecked2 = false;


  // On vérifie que le bouton est bien checké
      if (selectButton.checked) {
          isChecked2 = true;
      }

  // Si ce n'est pas le cas, on modifie la propriété CSS pour afficher l'erreur
  if (!isChecked2) {
    selectButton.parentElement.setAttribute('data-error-visible', 'true');
    verifSelect = true;
  } 
  else {
      selectButton.parentElement.setAttribute('data-error-visible', 'false');
      verifSelect = false;
  }
}

//Fonction qui lance les différentes fonctions de vérification au click Submit du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifChamp = false;
  verifierChamp(firstName)
  verifierChamp(lastName)
  verifierChamp(emailFields)
  verifierQantity(quantity)
  verifierChamp(naissance)
  verifyRadioSelection("location");
  verifyCheckbox("checkbox1");
  console.log(verifChamp,verifQantity,verifRadio, verifSelect);
  if (!verifChamp && !verifQantity && !verifRadio && !verifSelect) 
  {
    success.setAttribute('data-valid', 'true');
    formulaire.setAttribute('data-valid', 'true');
  }
}
)


