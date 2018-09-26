  document.addEventListener('DOMContentLoaded', function() {
    var elemslider = document.querySelectorAll('.slider');
    var instanceslider = M.Slider.init(elemslider,{
        indicators:false,
        height:500,
        interval:1000
    });
    
    AOS.init();

  }) 

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
    var instance = M.Datepicker.getInstance(elems,{
      
    });
  });
