  document.addEventListener('DOMContentLoaded', function() {
    var elemslider = document.querySelectorAll('.slider');
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instanceslider = M.Slider.init(elemslider,{
        indicators:true,
        height:500,
        interval:1500
    });
    
    arrowright.addEventListener('click', () => {
      var instances = M.Slider.getInstance(elemslider[0])
      instances.next()
    })
      arrowleft.addEventListener('click', () => {
      var instances = M.Slider.getInstance(elemslider[0])
      instances.prev() 
      })
      

  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var elemshora = document.querySelectorAll('.datepicker');
    var instancehora = M.Datepicker.init(elemshora);
    var instancehora = M.Datepicker.getInstance(elemshora)
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems);
  });
  