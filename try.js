#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("\n\t DEAR USER! WELCOME TO CURRENCY CONVERTOR.\n"));
let exchange_rate = {
    "KWD": 0.31,
    "BHD": 0.38,
    "USD": 1,
    "OMR": 0.38,
    "PKR": 280,
    "AUD": 1.65,
    "JPY": 113,
    "QAR": 3.64,
    "SAR": 3.75,
    "SDD": 59870,
};
let Answer = await inquirer.prompt([
    {
        name: "currency1",
        type: "list",
        message: chalk.yellow("SELECT THE CURRENCY YOU WANT TO CONVERT FROM :"),
        choices: ["KWD", "BHD", "USD", "OMR", "PKR", "AUD", "JPY", "QAR", "SAR", "SDD"]
    },
    {
        name: "currency2",
        type: "list",
        message: "SELECT THE CURRENCY YOU WANT TO CONVERT INTO :",
        choices: ["KWD", "BHD", "USD", "OMR", "PKR", "AUD", "JPY", "QAR", "SAR", "SDD"]
    },
    {
        name: "quantity",
        type: "input",
        message: "ENTER THE AMOUNT YOU WANT TO CONVERT :"
    }
]);
let amount1 = exchange_rate[Answer.currency1];
let amount2 = exchange_rate[Answer.currency2];
let taken_amount = Answer.quantity;
let main_currency = taken_amount / amount1;
let converted_currency = main_currency * amount2;
console.log(chalk.green.bold(`\n \t YOUR CONVERTED AMOUNT IS :${converted_currency.toFixed(2)}\n`));
