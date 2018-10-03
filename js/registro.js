const config = {
    apiKey: "AIzaSyDZEH5QjUHB-8nDjClbFhwlvwUOWFOCy-o",
    authDomain: "prueba-984e5.firebaseapp.com",
    databaseURL: "https://prueba-984e5.firebaseio.com",
    projectId: "prueba-984e5",
    storageBucket: "prueba-984e5.appspot.com",
    messagingSenderId: "775963729178"
  };
  firebase.initializeApp(config);
const $formRegister = document.querySelector('.form-register')
var firebaseDB = firebase.database()
var refUsers = firebase.database().ref('users')
var user

$formRegister.addEventListener('submit', async function (event) {
    event.preventDefault()
    const dataForm = new FormData($formRegister)
    user = await firebase.auth().createUserWithEmailAndPassword(dataForm.get('email'), dataForm.get('clave'))
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    })
    let newUser = {
        nombre: dataForm.get('nombre'),
        cedula: dataForm.get('cedula'),
        telefono: dataForm.get('telefono'),
        correo: dataForm.get('email'),
        rol: 'cliente'
    }
    firebase.database().ref(`users/${user.user.uid}`).set(newUser).then(()=> {
        swal("Todo bien!", "ya te as registrado!", "success")
        $formRegister.reset()
    }).catch((e)=>{
        console.log(e)
    })
})