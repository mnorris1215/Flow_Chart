
var counter = 0;


jQuery(document).ready(function(){


  var yes = document.getElementsByName('yes').value;
  var no = document.getElementsByName('no').value;
  var quizForm = document.getElementById('form');
  var userInput = []; //Where user selections are stored


  //Animate button hover
  jQuery('#Submit').on('mouseenter', function(e){
    jQuery(this).addClass('active');
    e.preventDefault();
  });
  jQuery('#Submit').on('mouseleave', function(){
    jQuery(this).removeClass('active');
  });
  $('#Submit').on('click', display());

  function display(){
    jQuery('#cc').append(counter);//For the final score
  };

})
