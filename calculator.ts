import inquirer from "inquirer";

let calculator=await inquirer.prompt([
{message:"enter first number", type: "number","name":"firstNumber"},
{message:"enter second number", type:"number","name":"secondNumber"},
{message:"select one of the operator to perform function",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Division","Multiplication"],
}
])
    
    console.log(calculator)

    
//conditional test
    
if(calculator.operator==="Addition"){
console.log(calculator.firstNumber+calculator.secondNumber);
    
}else if (calculator.operator==="Subtraction"){
console.log(calculator.firstNumber-calculator.secondNumber)
    
}else if(calculator.operator==="Division"){
console.log(calculator.firstNumber/calculator.secondNumber)
    
}else if(calculator.operator==="Multiplication"){
console.log(calculator.firstNumber*calculator.secondNumber);
}


