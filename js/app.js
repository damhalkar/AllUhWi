"use strict!";

var contactForm = document.getElementById("contactInfo");
contactForm.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  console.log(event.target.firstname.value);
  var firstname = event.target.firstname.value;
  var lastname = event.target.lastname.value;
  var email = event.target.email.value;
  var message = event.target.message.value;
  saveInfo(firstname, lastname, email, message);
}

function saveInfo(firstName, lastName, email, message) {
  var contactInfo = {
    first: firstName,
    last: lastName,
    email,
    msg: message
  };
  localStorage.setItem("data", JSON.stringify(contactInfo));
}

// Show/Hide button

function myFunction() {
    var hideContent = document.getElementById("hide");
      if (hideContent.style.display === "none") {
        hideContent.style.display = "block";
      } else {
        hideContent.style.display = "none";
      }
}
