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
const emailFields = document.getElementById("email");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const quantity = document.getElementById("quantity");

const form = document.getElementById("form");
const error = document.querySelector(".formData");
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


window.verifierChamp = verifierChamp;
function verifierChamp(champ) {
  // Si le champ est vide, on lance une exception
  if (champ.value === "") {
      
    champ.parentElement.setAttribute('data-error-visible', 'true');
      console.log("erreur texte trop petit"+champ.id);

  }
  else {
    champ.parentElement.setAttribute('data-error-visible', 'false');
  }
}

function verifierQantity(qant) {
  let numberFloat = parseFloat(quantity.value);
  if (isNaN(numberFloat)) {
    qant.parentElement.setAttribute('data-error-visible', 'true');
    console.log("Ajouter une valeur"+qant.id);
  }
  else {
    qant.parentElement.setAttribute('data-error-visible', 'false');
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifierChamp(firstName)
  verifierChamp(lastName)
  verifierChamp(emailFields)
  verifierQantity(quantity)
}
)


