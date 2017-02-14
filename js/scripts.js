$(document).ready(function()  {
  $("#survey form").submit(function(event)  {
    var surveyUser = $("input#user").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val());
    var favoriteMusic = $("input:radio[name=genre]:checked").val();
    var beverage = $("#beverage").val();

    $(".output").text(surveyUser);


    $(".output").alert(surveyUser);

    event.preventDefault();
  });
});
