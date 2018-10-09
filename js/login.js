document.addEventListener('DOMContentLoaded', function() {
  var elemsnav = document.querySelectorAll('.sidenav');
  var instancesnav = M.Sidenav.init(elemsnav);
  
});


var config = {
  apiKey: "AIzaSyB3G1sNiRiMGXR48wR0FAjlF_zaIsMA6c8",
  authDomain: "hotel-daeca-244ad.firebaseapp.com",
  databaseURL: "https://hotel-daeca-244ad.firebaseio.com",
  projectId: "hotel-daeca-244ad",
  storageBucket: "hotel-daeca-244ad.appspot.com",
  messagingSenderId: "957899814726"
};
  firebase.initializeApp(config);

const $formRegister = document.querySelector('.form-ingresar')
var firebaseDB = firebase.database()
var refUsers = firebase.database().ref('users')
var user

function validar(){
  var usuario = document.getElementById("usuario").value;
  var contraseña = document.getElementById("contraseña").value;
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});


