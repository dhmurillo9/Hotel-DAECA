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
/*++++++++FECHA ***************************************/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });

