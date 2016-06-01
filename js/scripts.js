$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var nameInput = $("#name").val();
    var address1Input = $("#address1").val();
    var address2Input = $("#address2").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput = $("#zipcode").val();
    $(".name").text(nameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);

    $("#receipt").show();
  event.preventDefault();
  });

});
