  document.addEventListener('DOMContentLoaded', function() {
    var elemslider = document.querySelectorAll('.slider');
    var instanceslider = M.Slider.init(elemslider,{
        indicators:false,
        height:500,
        interval:1500
    });
    


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
  