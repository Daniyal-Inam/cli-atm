#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 20000;
let myPin = 7861;
console.log(chalk.yellow("_____Welcome to ATM_____"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your 4-digit pin code",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("correct pin code!!!"));
    let operationsAns = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "what you want to do",
            choices: ["Withdraw", "Fast cash", "Check balance"],
        },
    ]);
    if (operationsAns.operations === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        if (amountAns.amount <= mybalance) {
            mybalance -= amountAns.amount;
            console.log(`Your remaning balance is : ${chalk.blue(mybalance)}`);
        }
        else {
            console.log(chalk.red(`Unable to process the transition! \nYour current balnace is: ${chalk.yellowBright(mybalance)}`));
        }
    }
    else if (operationsAns.operations === "Fast cash") {
        let fastCashWithdrw = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                message: "Select your amount",
                choices: ["1000", "5000", "10000", "20000"],
            },
        ]);
        if (fastCashWithdrw.cash <= mybalance) {
            mybalance -= fastCashWithdrw.cash;
            console.log(`Your remaning balance is : ${chalk.blue(mybalance)}`);
        }
        else {
            console.log(chalk.red(`Unable to process the transition! \nYour current balnace is: ${chalk.yellow(mybalance)}`));
        }
    }
    else if (operationsAns.operations === "Check balance") {
        console.log(`Your current balnace is: ${chalk.yellow(mybalance)}`);
    }
}
else if (pinAnswer.pin !== myPin) {
    console.log(chalk.red("Incorrect pin number"));
}
