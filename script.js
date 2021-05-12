$(function() {
  $("button").click(function () {
    console.log("click button");
    console.log("maou");
  }); 

  $("input").keyup(function() {
    console.log("Touche du clavier appuyée");
  });
});