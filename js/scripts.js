$(document).ready(function() {
  $("form#stressTestQuiz").submit(function(event) {
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const stressResponseAnswers = $(this).val();
      $('#work-responses').append(stressResponseAnswers + "<br>");
    });
    $('#transportation_survey').hide();
  });
});