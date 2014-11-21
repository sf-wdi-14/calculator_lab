//
//
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





