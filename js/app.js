"use strict!";
//Step 1 Get info from form
//a. document.getElement
//b. eventListener
//c. handler
//Step 2 Convert data
//Step 3 Save to local storage

var button = document.getElementById("contactInfo");
button.addEventListener("submit", handler);
console.log(button);

function handler(event) {
  event.preventDefault();
  console.log(event.target.firstname.value);
  //assign correct positions
  document.getElementById("firstname");
  document.getElementById("lastname");
  document.getElementById("email");
  document.getElementById("message");
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
    email: email,
    msg: message,
  };
  localStorage.setItem("data", JSON.stringify(contactInfo));
}
//--------------------------------------------------------------

