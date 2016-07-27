
describe("A calculator", function() {

  window.alert = function() {
    console.log.apply(console, arguments);
  };
  beforeEach(function(){
    loadFixtures('../../../index.html');
  });
  it("adds 2 values ", function() {
    document.forms["myform"]["num1"].value = "1";
    document.forms["myform"]["num2"].value = "1";
    document.getElementById('+').click();
    document.getElementById('submit').click();
    expect(document.getElementById("result").innerHTML).toBe("2");
  });

  it("subtracts 2 vaules", function() {
    document.forms["myform"]["num1"].value = "1";
    document.forms["myform"]["num2"].value = "5";
    document.getElementById('-').click();
    document.getElementById('submit').click();
    expect(document.getElementById("result").innerHTML).toBe("-4");
  });
  it("multiplys 2 vaules", function() {
    document.forms["myform"]["num1"].value = "0";
    document.forms["myform"]["num2"].value = "5";
    document.getElementById('*').click();
    document.getElementById('submit').click();
    expect(document.getElementById("result").innerHTML).toBe("0");
  });
  it("divides 2 vaules", function() {
    document.forms["myform"]["num1"].value = "25";
    document.forms["myform"]["num2"].value = "5";
    document.getElementById('/').click();
    document.getElementById('submit').click();
    expect(document.getElementById("result").innerHTML).toBe("5");
  });
  it("validates empty input", function() {
    expect(validateInput({number1: '',number2: ''})).toBe(false);
  });
  it("validates numeric input", function() {
    expect(validateInput({number1: '1',number2: '3'})).toBe(true);
  });
  it("validates text input", function() {
    expect(validateInput({number1: 'e',number2: '4'})).toBe(false);
  });
});
