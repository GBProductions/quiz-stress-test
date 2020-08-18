$(document).ready(function() {

  $("form#stressTestQuiz").submit(function(event) {
    event.preventDefault();

    
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      const stressSymptomsAnswers = $( ).val();
      $('#stress-symptoms').append(stressSymptomsAnswers + "<br>");
  
      $("#stress-symptoms").show();
    });


    $('#stressTestQuiz').hide();
  });
});
