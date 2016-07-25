
describe("A calculator", function() {


  it("adds 2 values ", function() {
    document.forms["myform"]["num1"].value = "1";
    document.forms["myform"]["num2"].value = "1";
    document.forms["myform"]["operator"].value = "add";
    getnum();
    expect(document.getElementById("result").innerHTML).toBe("2");
  });

  it("subtracts 2 vaules", function() {
    document.forms["myform"]["num1"].value = "1";
    document.forms["myform"]["num2"].value = "5";
    document.forms["myform"]["operator"].value = "sub";
    getnum();
    expect(document.getElementById("result").innerHTML).toBe("-4");
  });
  it("multiplys 2 vaules", function() {
    document.forms["myform"]["num1"].value = "0";
    document.forms["myform"]["num2"].value = "5";
    document.forms["myform"]["operator"].value = "mul";
    getnum();
    expect(document.getElementById("result").innerHTML).toBe("0");
  });
  it("divides 2 vaules", function() {
    document.forms["myform"]["num1"].value = "25";
    document.forms["myform"]["num2"].value = "5";
    document.forms["myform"]["operator"].value = "div";
    getnum();
    expect(document.getElementById("result").innerHTML).toBe("5");
  });
});
