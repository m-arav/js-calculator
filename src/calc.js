var calculator = {
  add: function(num1,num2) {
    return num1 + num2;
  },
  sub: function(num1,num2) {
    return num1 - num2;
  },
  mul: function(num1,num2) {
    return num1 * num2;
  },
  div: function(num1,num2) {
    return num1 / num2;
  }
};

function getnum() {
  object = processInput();
  if (validateInput(object)){
    operand1 = parseInt(object.number1);
    operand2 = parseInt(object.number2);
    operator = document.forms["myform"]["operator"].value;
    num = calculator[operator](operand1,operand2);
    document.getElementById("result").innerHTML = num;
  }
}

function processInput() {
  op1 = document.forms["myform"]["num1"].value;
  op2 = document.forms["myform"]["num2"].value;
  return {
    number1: op1,
    number2: op2
  };
}


function validateInput(object) {
  var numbers = /^[0-9]+$/;
  if (object.number1 == '' || object.number2 == '') {
    alert('Enter values for number');
    document.forms["myform"].focus();
    return false;
  }
  else if(object.number1.match(numbers) && object.number2.match(numbers) ) {
      return true;
  }
  else {
    alert('Enter numeric values : ');
    document.forms["myform"].focus();
    return false;
  }
}
