  
    var config = {
      apiKey: "AIzaSyCCsQr6sJsoRK1ag1BTp685CerTcf5SYds",
      authDomain: "hotel-daeca.firebaseapp.com",
      databaseURL: "https://hotel-daeca.firebaseio.com",
      projectId: "hotel-daeca",
      storageBucket: "hotel-daeca.appspot.com",
      messagingSenderId: "829762605681"
    };
    firebase.initializeApp(config);
    
    const $btnSaveRegister = document.querySelector('#save-register')
    if($btnSaveRegister) $btnSaveRegister.addEventListener('click', sun())
    
  function registrar(){
     
      var email = document.getElementById('email').value;
      var contrasena = document.getElementById('contrasena').value;
  
      firebase.auth().createUserWithEmailAndPassword(email, contrasena)
      .then(function(){
          verificar()
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
      });  
  }
  
  function ingreso(){
      var email2 = document.getElementById('email2').value;
      var contrasena2 = document.getElementById('contrasena2').value;
  
      firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ...
        });
  }
  
  function observador(){
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              console.log('usuario activo')
              aparece(user);
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
  
            console.log('************');
            console.log(user.emailVerified)
            console.log('************'); 
  
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
          } else {
            // User is signed out.
            console.log('usuario no activo')
            // ...
          }
        });
  }
  observador();
  
  function aparece(user){
      var user = user;
      var contenido = document.getElementById('contenido');
      if(user.emailVerified){
          contenido.innerHTML = `
          <h2>Bienvenido.</h2>
          <button onclick="cerrar()">cerrar sesion</button>
          `;  
      }
  }
  
  function cerrar(){
      firebase.auth().signOut()
      .then(function(){
          console.log('saliendo.....')
      })
      .catch(function(error){
          console.log(error)
      })
  }
  
  function verificar(){
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {
      // Email sent.
      console.log('enviando correo...')
      }).catch(function(error) {
      // An error happened.
      console.log('error');
      });
  }
  //registro administrador y recepcionista
  
function registrar(){
  var nombre, correo, usuario, clave, telefono;
  nombre = document.getElementById('nombre').value;
  apellidos = document.getElementById('apellidos').value;
  correo = document.getElementById('correo').value;
  usuario = document.getElementById('usuario').value;
  clave = document.getElementById('clave').value;
  telefono = document.getElementById('telefono').value;

  if (nombre === ''){
    alert("El campo nombre esta vacío");
  }
}
AOS.init();

  //slider de página de reservas
  document.addEventListener('DOMContentLoaded', function() {
    var elemslider = document.querySelectorAll('.slider')
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instanceslider = M.Slider.init(elemslider,{
        indicators:true,
        height:500,
        interval:1000
    });

  arrowright.addEventListener('click', () => {
    var instances = M.Slider.getInstance(elemslider[0])
    instances.next()
})
    arrowleft.addEventListener('click', () => {
    var instances = M.Slider.getInstance(elemslider[0])
    instances.prev() 
    })
})
