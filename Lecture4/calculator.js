var x = [];
function button_7() {
	x.push("7");
	document.getElementById("show").value = x.join("");
}

function button_8() {
	x.push("8");
	document.getElementById("show").value = x.join("");
}

function button_9() {
	x.push("9");
	document.getElementById("show").value = x.join("");
}

function button_4() {
	x.push("4");
	document.getElementById("show").value = x.join("");
}

function button_5() {
	x.push("5");
	document.getElementById("show").value = x.join("");
}

function button_6() {
	x.push("6");
	document.getElementById("show").value = x.join("");
}

function button_1() {
	x.push("1");
	document.getElementById("show").value = x.join("");
}

function button_2() {
	x.push("2");
	document.getElementById("show").value = x.join("");
}

function button_3() {
	x.push("3");
	document.getElementById("show").value = x.join("");
}

function button_0() {
	x.push("0");
	document.getElementById("show").value = x.join("");
}

function sign_div() {
	x.push("/");
	document.getElementById("show").value = x.join("");
}

function sign_multi() {
	x.push("*");
	document.getElementById("show").value = x.join("");	
}

function sign_minus() {
	x.push("-");
	document.getElementById("show").value = x.join("");	
}

function sign_plus() {
	x.push("+");
	document.getElementById("show").value = x.join("");	
}

function sign_dot() {
	x.push(".");
	document.getElementById("show").value = x.join("");	
}

function sign_left_bracket() {
	x.push("(");
	document.getElementById("show").value = x.join("");	
}

function sign_right_bracket() {
	x.push(")");
	document.getElementById("show").value = x.join("");	
}

function del() {
	if(x.length>0)
		x.pop();
	document.getElementById("show").value = x.join("");
}

function clean() {
	x.length = 0;
	document.getElementById("show").value = x.join("");	
}

function result() {



	try{
		if(eval(x.join("")) == undefined)
		{
			alert("非法輸入");
     		return;
		}
		document.getElementById("show").value = eval(x.join(""));


	}
	catch(exception) {
     	alert("非法輸入");
     	return;
    }

    x.length = 0;
    x.push(document.getElementById("show").value);
	
}

