$(document).ready(function(){
   var newNum = [];
   var input = []
   var result;
   var equation = []


  $(".calc-button").click(function() {
    input = (this.textContent);
    if($("#lower-display").text() == 0 ){
        $("#lower-display").html('');
    }
    $("#lower-display").append(input);
  });

  $("body").on("click", "#equal", function(){
    equation = $('#lower-display').text();
    evaluate(equation)
  });

  $("#clears").click(function(){
    $('#top-display').html('');
    $("#lower-display").html('0')
    $("#rolling-display").html('');
    result = null;
  });

  function evaluate(){
    result = (eval(equation));
    $('#top-display').html(equation);
    $("#lower-display").html(result);
  }

  $("body").on("click", '#calculator',function(){
    if(typeof result !== 'undefined') {
    rollingEval(result)
    }
  });

  function rollingEval(){
      $("#rolling-display").html(result); 
      var operator = ['+', '-', '*', '/', '%'];
    for (var i = 0; i < operator.length; i++) {
      if (operator[i] != input) {
        var afterResult = $("#lower-display").text().replace(result,'');
        var rollingEquation = result + afterResult;
        var rollingResult = (eval(rollingEquation));
        $("#rolling-display").html(rollingResult);
      }
    }
  }
});
