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
  // var information = saveInfo(event.target.contactInfo.information );
  console.log(event.target.firstname.value);
  //assign correct positions
  //var firstname
  //var lastname
  //call saveInfo
  saveInfo();
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
