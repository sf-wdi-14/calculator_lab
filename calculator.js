// 
// Nicole's calculator solution
//
var first = [];
var oper = null;
var second = [];
var result = null;
var allButtons = document.querySelectorAll(".button");

for(var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function() {
    console.log(this.textContent)
    if (this.textContent === "+") {
      oper = "+";
      document.querySelector("#operator_display").textContent = "+";
    } else if (this.textContent === "-") {
      oper = "-";
      document.querySelector("#operator_display").textContent = "-";
    } else if (this.textContent === "*") {
      oper = "*";
      document.querySelector("#operator_display").textContent = "*";
    } else if (this.textContent === "/") {
      oper = "/"
      document.querySelector("#operator_display").textContent = "/";
    } else if (this.textContent === "ENT") {
      if (oper === "+") {
        result = parseInt(first.join("")) + parseInt(second.join(""));
      } else if (oper === "-") {
        result = parseInt(first.join("")) - parseInt(second.join(""));
      } else if (oper === "*") {
        result = parseInt(first.join("")) * parseInt(second.join(""));
      } else if (oper === "/") {
        result = parseInt(first.join("")) / parseInt(second.join(""));
      }
      document.querySelector("#result_display_value").textContent = result;
      oper = null;
      first = [];
      second = [];
      document.querySelector("#operator_display").textContent = "";
    } else if (this.textContent === "CLR") {
      oper = null;
      first = [];
      second = [];
      document.querySelector("#operator_display").textContent = "";
      document.querySelector("#result_display_value").textContent = "";
    } else {
      if (oper != null) {
        second.push(this.textContent);

        document.querySelector("#result_display_value").textContent = second.join("");
      } else {
        first.push(this.textContent);
        document.querySelector("#result_display_value").textContent = first.join("");
      }

    }
  })
}


































/* Merge conflict / Colt's simple calculator.js solution. Saving for science/reference!
*/








window.onload = function() {
  // displays
  var display = document.getElementById("result_display_value");
  var operator = document.getElementById("operator_display");
  var calc = document.querySelector("#container")
  // Number buttons
  var numOne = document.querySelector("#number_1"),
      numTwo = document.querySelector("#number_2"),
      numThree = document.querySelector("#number_3"),
      numFour = document.querySelector("#number_4"),
      numFive = document.querySelector("#number_5"),
      numSix = document.querySelector("#number_6"),
      numSeven = document.querySelector("#number_7"),
      numEight = document.querySelector("#number_8"),
      numNine = document.querySelector("#number_9"),
      numZero = document.querySelector("#number_0");
  // Operations
  var addOp = document.querySelector("#op_plus"),
      subOp = document.querySelector("#op_sub"),
      multOp = document.querySelector("#op_mult"),
      divOp = document.querySelector("#op_div"),
      entOp = document.querySelector("#op_ent"),
      clrOp = document.querySelector("#op_clr");
  // state
  var hiddenOperand;
  
  // event handlers
  numOne.onclick = function() {
    display.innerHTML += '1';
  };
  numTwo.onclick = function() {
    display.innerHTML += '2';
  };
  numThree.onclick = function() {
    display.innerHTML += '3';
  };
  numFour.onclick = function() {
    display.innerHTML += '4';
  };
  numFive.onclick = function() {
    display.innerHTML += '5';
  };
  numSix.onclick = function() {
    display.innerHTML += '6';
  };
  numSeven.onclick = function() {
    display.innerHTML += '7';
  };
  numEight.onclick = function() {
    display.innerHTML += '8';
  };
  numNine.onclick = function() {
    display.innerHTML += '9';
  };
  numZero.onclick = function() {
    display.innerHTML += '0';
  };
  addOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    console.log(hiddenOperand);
    display.innerHTML = '';
    operator.innerHTML = '+';
  };
  subOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    console.log(hiddenOperand);
    display.innerHTML = '';
    operator.innerHTML = '-';
  };
  multOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    console.log(hiddenOperand);
    display.innerHTML = '';
    operator.innerHTML = '*';
  };
  divOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    console.log(hiddenOperand);
    display.innerHTML = '';
    operator.innerHTML = '/';
  };
  
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
