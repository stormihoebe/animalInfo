$(function(){

  var animalPrompt = function() {
    return prompt("What animal do you want to learn about? turtles, snakes, or insects?");
  };

  $("#whatAnimal").click(function(){
    var animal = animalPrompt();
    $(".animalInfo").hide();
    if (animal === "turtles") {
      $(".turtles").show();
    } else if (animal === "snakes") {
      $(".snakes").show();

    } else if (animal === "insects"){
      $(".insects").show();}

  });



});
