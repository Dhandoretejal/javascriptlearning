var myName = "Sweety";
var yourName = "Cutie";
console.log("********Before swap********");
console.log(myName, yourName);
var temp = myName;
myName = yourName;
yourName = temp;
console.log("*******After swap**********");
console.log(myName, yourName);

var Num1 = 100;
var Num2 = 200;
var Num3 = 300;
console.log("**********Before swap*********");
console.log(Num1, Num2, Num3);
var temp = Num1,
  Num3;
Num1 = Num2;
Num2 = Num3;
Num3 = Num1;
console.log("**********After swap***********");
console.log(Num1, Num2, Num3);
