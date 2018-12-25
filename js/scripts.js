$(document).ready(function(){
  $('form#userAnswer').submit(function(event){
    var responses = ["sideOne", "sideTwo","sideThree"];
    responses.forEach(function(responses){
      var userInput = $('input#' + responses).val();
    });
    var result = sideOne === sideTwo;
    var resultTwo = sideOne === sideThree;
    var resultThree = sideTwo === sideThree;

    if(!sideOne || !sideTwo || !sideThree){
      alert("fill in the blanks to get an accurate answer")
    }

    if(sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree){
      $('#type').text("it's an Equilateral")
    }else if(sideOne !== sideTwo || sideOne !== sideThree || sideTwo !== sideThree){
      $('#type').text("it's a scalene")
    }
    if(result !== sideThree){
      $('#type').text('its and isosceles');
    }else if(resultTwo !== sideTwo){
      $('#type').text('its and isosceles');
    }else if (resultThree !== sideOne)
    if(sideOne + sideTwo <= sideThree){
      $('#type').text('not a Triangle')
    }

    event.preventDefault();

  });
});
