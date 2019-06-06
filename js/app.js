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
//Local Storage for Creator Form

//Step 1 Get info from form
//a. document.getElement
//b. eventListener
//c. handler
//Step 2 Convert data
//Step 3 Save to local storage

var creatorForm = document.getElementById("creator-form");
creatorForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  document.getElementById("comicTitle");
  document.getElementById("genres");
  document.getElementById("genres2");
  document.getElementById("rating");
  document.getElementById("summary");
  document.getElementById("type");
  document.getElementById("name");
  document.getElementById("email");
  document.getElementById("creator1");
  document.getElementById("creator2");
  document.getElementById("writer");
  document.getElementById("penciler");
  document.getElementById("colourist");
  document.getElementById("inker");
  document.getElementById("coverArtist");
  document.getElementById("letterer");
  document.getElementById("legalRight");
  var title = event.target.comicTitle.value;
  var genre1 = event.target.genres.value;
  var genre2 = event.target.genres2.value;
  var rating = event.target.rating.value;
  var summary = event.target.summary.value;
  var type = event.target.type.value;
  var name = event.target.name.value;
  var email = event.target.email.value;
  var creator1 = event.target.creator1.value;
  var creator2 = event.target.creator2.value;
  var writer = event.target.writer.value;
  var penciler = event.target.penciler.value;
  var colourist = event.target.colourist.value;
  var inker = event.target.inker.value;
  var coverArtist = event.target.coverArtist.value;
  var letterer = event.target.letterer.value;
  var legalRight = event.target.legalRight.value;
  saveCreatorInfo(title, genre1, genre2, rating, summary, type, name, email, creator1, creator2, writer, penciler, colourist, inker, coverArtist, letterer, legalRight);
}

function saveCreatorInfo(comicTitle, genres1, genres2, rating, summary, type, name, email, creator1, creator2, writer, penciler, colourist, inker, coverArtist, letterer, legalRight) {
  var creatorInfo = {
    title: comicTitle,
    genre_1: genres1,
    genre_2: genres2,
    rating: rating,
    summary: summary,
    type: type,
    name: name,
    email: email,
    creator_1: creator1,
    creator_2: creator2,
    writer: writer,
    penciler: penciler,
    colourist: colourist,
    inker: inker,
    cover_artist: coverArtist,
    letterer: letterer,
    legal_right: legalRight
  };
  localStorage.setItem("creator-form", JSON.stringify(creatorInfo));
}
