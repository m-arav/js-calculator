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
  operand1 = parseInt(document.forms["myform"]["num1"].value);
  operand2 = parseInt(document.forms["myform"]["num2"].value);
  operator = document.forms["myform"]["operator"].value;
  num = calculator[operator](operand1,operand2);
  document.getElementById("result").innerHTML = num;
}
