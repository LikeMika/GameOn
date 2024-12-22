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

