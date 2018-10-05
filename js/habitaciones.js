 
document.addEventListener('DOMContentLoaded', function() {
  var elemsnav = document.querySelectorAll('.sidenav');
  var instancesnav = M.Sidenav.init(elemsnav);
  
});
  
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
  
  var fecha_inicio = new Date();
  var fecha_final  = new Date();
  var f_i, f_f;

  $('.datepicker').pickadate({
    weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    min: new Date(),
    selectMonths: true,
    selectYears: 1, 
    editable: false, 
    firstDay: false, 
    format: 'dd/mm/yyyy', 
    formatSubmit: 'yyyy-mm-dd', 
    today: 'Today',
    clear: 'Clear', 
    close: 'Ok', 
    closeOnSelect: false, 
  });

  $("#inicio").pickadate({
    date_min: fecha_inicio,
    date_max: fecha_final,
    onSelect: function() {
      f_i = $(this).pickadate("getDate");
      f_f = $(this).pickadate("getDate");
      f_i.setDate(f_i.getDate() + 1);
      f_f.setDate(f_f.getDate() + 365); 
      
      $("#final").pickadate({
        date_min: f_i,
        date_max: f_f
      });
    }
  });

  if (inicio_picker.get('value')) {
    final_picker.set('min', inicio_picker.get('select'))
  }
  if (final_picker.get('value')) {
    inicio_picker.set('max', final_picker.get('select'))
  }
  
  // When something is selected, update the “from” and “to” limits.
  inicio_picker.on('set', function(event) {
    if (event.select) {
      final_picker.set('min', inicio_picker.get('select'))
    } else if ('clear' in event) {
      final_picker.set('min', false)
    }
  })
  final_picker.on('set', function(event) {
    if (event.select) {
      inicio_picker.set('max', final_picker.get('select'))
    } else if ('clear' in event) {
      inicio_picker.set('max', false)
    }
  })

  
 // document.addEventListener('DOMContentLoaded', function() {
 //   var elemsfecha = document.querySelectorAll('.datepicker');
 //   var instancefecha = M.Datepicker.init(elemsfecha);
 //   var instancefecha = M.Datepicker.getInstance(elemsfecha);
 // });

 // document.addEventListener('DOMContentLoaded', function() {
//    var elemshora = document.querySelectorAll('.timepicker');
 //   var instancehora = M.Timepicker.init(elemshora);
 // });
  