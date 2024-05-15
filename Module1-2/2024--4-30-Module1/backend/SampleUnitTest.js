//Specification example
//this function returns the sum of two numbers
function sum(a,b){
}

//Create the Test
if(sum(2,4)!=6)
{
    console.log("Test failed")
}
if(sum(3,4)==7)
{
    console.log("Test Passed")
}
if(sum(10, 5)==undefined)
{
    console.log("Test failed")
}
//Write the Code
function sum(a,b){
return a + b
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    return a/b;
}
function subtract(a, b)
{
    return a - b;
}
function Calculate(document)
{
    let number1 = parseInt(document.getElementById("txtNum1").value);
    let number2 = parseInt(document.getElementById("txtNum2").value);
    let optionSelected = document.getElementById("selectOperation").selectedIndex;
    if(optionSelected==0)
        document.getElementById("result").innerText = sum(number1, number2)
    if(optionSelected==1)
        document.getElementById("result").innerText = multiply(number1, number2)
    if(optionSelected==2)
        document.getElementById("result").innerText = subtract(number1, number2)
    if(optionSelected==3)
        document.getElementById("result").innerText = divide(number1, number2)
}