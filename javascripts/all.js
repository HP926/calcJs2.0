$(document).ready(function(){
   var input = [];
   var result= [];
   var equation = [];
   var operator = ['+', '*', '/', '%'];
   var previousKey = [];
   getViewport()

  $(".calc-button").click(function() {
    input = (this.textContent);

    if($("#lower-display").text() == 0){
      $("#lower-display").html('');
    }else if((previousKey == '+'|| previousKey == '-' || previousKey == '/' || previousKey == '*' || previousKey == '%') && 
             (input == '+'|| input == '-' || input == '/' || input == '*' || input == '%') ){
    alert('input error')
    return
    }

    if (previousKey == '=' && (!(input == '+'|| input =='-' || input == '/' || input == '*' || input == '%'))){
      $("#lower-display").html('');
    }

    $("#lower-display").append(input);
    previousKey = input;
  });

// try to fix
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
    previousKey = '='
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

  function getViewport() {

     var viewPortWidth;
     var viewPortHeight;

       viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
       viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
       console.log(viewPortHeight);
      //  
       return [viewPortWidth, viewPortHeight];
      }
});

