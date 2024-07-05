import inquirer from "inquirer";

let myBalance=10000;
let myPin = 3455;
let pinAnswer=await inquirer.prompt([
    {
        name:"pin",
        message:"Enter your pin",
        type:"number",
    
    }
])

if(pinAnswer.pin===myPin){
    console.log("your pin is correct");

let operationAns=await inquirer.prompt([
    {
        name:"operations",
        message:"please select option",
        type:"list",
        choices:["widraw","Fast cash","check balance"]
    }
])

//if user select widraw
if(operationAns==="widraw"){
    let amountAns=await inquirer.prompt([
        {
            name:"amount",
            message:"Enter your amount",
            type:"number",
        }
    ])
    if(amountAns.amount<=myBalance){
    let balance=myBalance-amountAns.amount;
    console.log(`the remaining balance is ${balance}`);
    }
    else{
        console.log("you have insufficient balance");
    }
}
//if user select fast cash
else if(operationAns.operation==="Fast cash"){
    let FastcashAns=await inquirer.prompt([
        {
            name:"amount",
            type:"list",
            chioces:["1000","3000","5000","15000"]
        }
    ])
    if(FastcashAns.amount<=myBalance){
        let balance2=myBalance-FastcashAns;
        console.log(`the remaining balance is ${balance2}`);
    }
    else{
        console.log("you have insufficient amount");
    }
      }else if(operationAns.operation==="check balance"){
        console.log(myBalance);
    }
}
else
console.log("your pin is wrong");
