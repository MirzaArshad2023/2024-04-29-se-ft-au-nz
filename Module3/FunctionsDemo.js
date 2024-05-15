//console.log(checkAge(20))

function callAndPrintFunctions(nameofFunc)
{
    console.log(nameofFunc.Name);
    nameofFunc();
}
// function checkAge returns a value when called
function checkAge(age) {
    let result = "";
    console.log(arguments.length)
    if (age >= 18) {
        result = 'adult'; // if the condition is true, return this string and exit
        console.log("You have been verified as adult")
        age  = age + 2;
        console.log(`You can obtain a licence after ${age} years `)
        return result;
    }
    
    return 'non-adult'; // if the condition was false, return this string and exit
}

let Add = function(){
    let result = 0
    if(arguments!=null && arguments.length>0)
    {
        for(let k=0; k<arguments.length; k++)
            result = result + arguments[k]
    }
    return result;
        
}
//console.log(Add(10, 20, 40, 50, 60, 70));
//console.log(checkAge(20))


Add = function()
{
    console.log("Adds two numbers")
}

//Add();
//callAndPrintFunctions(Add);

const subtract = (num1, num2) => { 
    console.log("subtract called")   

    return num1 - num2;
}

console.log(subtract(10, 20))