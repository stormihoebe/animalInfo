$(function(){
  $("#animalForm").submit(function() {
    event.preventDefault();

    var animalInput = $("#animal").val();
    
    $(".animalInfo").hide();
    if (animalInput === "turtles") {
      $(".turtles").show();
    } else if (animalInput === "snakes") {
      $(".snakes").show();

    } else if (animalInput === "insects"){
      $(".insects").show();
    };
  });
});
