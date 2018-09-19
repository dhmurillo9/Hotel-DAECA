
function registrar(){
    var nombre, correo, usuario, clave, telefono;
    nombre = document.getElementById('nombre').value;
    apellidos = document.getElementById('apellidos').value;
    correo = document.getElementById('correo').value;
    usuario = document.getElementById('usuario').value;
    clave = document.getElementById('clave').value;
    telefono = document.getElementById('telefono').value;

    if (nombre ===){
      alert("El campo nombre esta vacío");
    }
    

    
    firebase.auth().createUserWithEmailAndPassword(nombre, apellidos, correo, clave, telefono,expresion)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // ...
    }
  });


    var instanceR = M.Dropdown.getInstance(elemR);


    document.addEventListener('DOMContentLoaded', function() {
      var elemsR = document.querySelectorAll('.dropdown-trigger');
      var instancesR = M.Dropdown.init(elemsR, options);
      instanceR.open();

    });



    const form = document.getElementById('contactForm'); // Obtenemos la referencia al formulario

    if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
      form.addEventListener('submit', contactForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
    }

    function contactForm(event) {
      event.preventDefault(); 
    }
    // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
      const nombre = document.getElementById('nombre'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
      const email = document.getElementById('email');
      const sexo = document.querySelector('input[type=radio]:checked');
      const cotizacion = document.getElementById('cotizacion') || null;
      const rol_usuario = document.getElementById('rol_usuario');
      const mensaje = document.getElementById("mensaje");
      const data = {
        'name': nombre.value,
        'email': email.value,
        'sexo': sexo.value,
        'rol_usuario': rol_usuario.value,
        'mensaje': mensaje.value
      };

  function saveContactForm(data) {
    firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function(){
        alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function(){
        alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      })};
      document.addEventListener('DOMContentLoaded', function() {
        var elemsR = document.querySelectorAll('select');
        var instancesR = M.FormSelect.init(elemsR, options);
      });