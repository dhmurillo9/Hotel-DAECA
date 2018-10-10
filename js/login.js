document.addEventListener('DOMContentLoaded', function() {
  var elemsnav = document.querySelectorAll('.sidenav');
  var instancesnav = M.Sidenav.init(elemsnav);
  
});
  $('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
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

  const $formRegister = document.querySelector('.form-register')
  const $formLogin = document.querySelector('#formLogin')
  var firebaseDB = firebase.database()
  var refUsers = firebase.database().ref('users')
  var user
  
  $formRegister.addEventListener('submit', async function (event) {
      event.preventDefault()
      const dataForm = new FormData($formRegister)
      user = await firebase.auth().createUserWithEmailAndPassword(dataForm.get('email'), dataForm.get('pass'))
          .catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
          })
      let newUser = {
          usuario: dataForm.get('usuario'),
          cedula: dataForm.get('cedula'),
          telefono: dataForm.get('telefono'),
          correo: dataForm.get('email'),
          rol: 'cliente'
      }
      firebase.database().ref(`users/${user.user.uid}`).set(newUser).then(() => {
        const user = firebase.auth().currentUser;
          $formRegister.reset()
          swal("Todo bien!", "ya te as registrado!", "success")
      }).catch((e) => {
          console.log(e)
      })
  })
  

$formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData($formLogin)
    firebase.auth().signInWithEmailAndPassword(formData.get('email2'), formData.get('pass2')).then( user => {
        console.log(user)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      })
})



