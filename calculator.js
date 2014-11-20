window.onload = function() {
  // displays
  var display = document.getElementById("result_display_value");
  var operator = document.getElementById("operator_display");
  var calc = document.querySelector("#container")
  // Operations
  var entOp = document.querySelector("#op_ent"),
      clrOp = document.querySelector("#op_clr");
  // state
  var hiddenOperand;

  //Number Button Setup
  var numbers = document.querySelectorAll(".num") 
  for(var i = 0; i<numbers.length;i++){
    numbers[i].onclick = function(){
      display.innerHTML += this.innerHTML;
    }
  }
  //Operation Button Setup
  var ops = document.querySelectorAll('div[id^="op"]');
  for(var i = 0; i<ops.length;i++){
    ops[i].onclick = function(){
      hiddenOperand = display.innerHTML;
      display.innerHTML = '';
      operator.innerHTML = this.innerHTML
    }
  }
  entOp.onclick = function() {
    var result = parseInt(hiddenOperand);
    if (operator.innerHTML === '+') {
      result += parseInt(display.innerHTML);
    } else if (operator.innerHTML === '-') {
      result -= parseInt(display.innerHTML);
    } else if (operator.innerHTML === '*') {
      result *= parseInt(display.innerHTML);
    } else if (operator.innerHTML === '/') {
      result /= parseInt(display.innerHTML);
    } else {
      result = display.innerHTML;
    }
    display.innerHTML = result;
    operator.innerHTML = '';
  };

  clrOp.onclick = function() {
    hiddenOperand = undefined;
    display.innerHTML = '';
    operator.innerHTML = '';
  };
};