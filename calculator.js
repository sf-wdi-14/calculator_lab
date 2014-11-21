window.onload = function() {
  var hiddenOperand;
  var display  = document.querySelector("#result_display_value");
      operator = document.querySelector("#operator_display");
      entOp    = document.querySelector("#op_ent"),
      clrOp    = document.querySelector("#op_clr");

  //Number Button Setup
  var numbers = document.querySelectorAll(".num") 
  for(var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function() {
      display.innerHTML += this.innerHTML;
    };
  }
  //Operation Button Setup
  var ops = document.querySelectorAll('div[id^="op"]');
  for(var i = 0; i<ops.length;i++) {
    ops[i].onclick = function() {
      hiddenOperand      = display.innerHTML;
      display.innerHTML  = '';
      operator.innerHTML = this.innerHTML;
    };
  }

  entOp.onclick = function() {
    display.innerHTML  = eval(parseInt(hiddenOperand) + operator.innerHTML + display.innerHTML);
    operator.innerHTML = '';
  };

  clrOp.onclick = function() {
    hiddenOperand      = undefined;
    display.innerHTML  = '';
    operator.innerHTML = '';
  };
};