$(document).ready(function(){
   var newNum = [];
   var input = [];
   var result= [];
   var equation = [];
   var operator = ['+', '*', '/', '%'];

  $(".calc-button").click(function() {
    input = (this.textContent);
    if($("#lower-display").text() == 0 ){
      $("#lower-display").html('');
    }
    $("#lower-display").append(input);
  });

  $("body").on("click", "#equal", function(){
    equation = $('#lower-display').text();
    evaluate(equation);
  });

  $("#clears").click(function(){
    $('#top-display').html('');
    $("#lower-display").html('0');
    $("#rolling-display").html('');
    result = null;
  });

  function evaluate(){
    result = (eval(equation));
    $('#top-display').html(equation);
    $("#lower-display").html(result);
    $("#rolling-display").html('');
    return result;
  }

  $("body").on("click", '#calculator',function(){
   var display = $('#lower-display').text();
    operator.forEach(function(opt){
      
      if(display.indexOf(opt) == 0){
        alert('input cant start with operator');
        $("#lower-display").html('0');
      }else{
      }
    });

      rollingEval();

    }); 

  function rollingEval(){
    if(input == '+'|| input == '-' || input == '/' || input == '*' || input == '%'){

    }else{
    var equation = $('#lower-display').text();
    var rollingResult = eval(equation);
    $("#rolling-display").html(rollingResult);
    }  
  }
});
