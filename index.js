let input1El = document.querySelector(".input-1");
let input2El = document.querySelector(".input-2");
let numbersEl = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation"); 

function setDisplay2(val){

input2El.innertext = val;
alert("hello world")


}

function setDisplay1(input1El, input2El, operationEl, is_equal_state){
let var1 = "";
let var2 = "";
let operand = "";
operand = operationEl.innertext;
var1= input1El.innertext;
var2 = input2El.innertext;

  if (clickEqual()=== true){
    is_equal_state === true
  }
  else if (clickEqual() === false){
    is_equal_state === false
  }
}

function getDisplay1(){
let result = parseFloat(result)
return result;
}

function getDisplay2(){
return {
  var1:"" ,
  var2: "",
  operand: "",
  is_equal_state: true
}
}

function numberPressed(){

}
function clickEqual() {
  equalEl.click();
}
setDisplay2(3)