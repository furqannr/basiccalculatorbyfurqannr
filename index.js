#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
export { continueChoice };
//let a=chalkAnimation.rainbow("Hi").stop();
async function askQuestion() {
    await inquirer.prompt([
        {
            type: "list",
            name: "calculate",
            message: chalk.blue("Kindly choose the operation you want to perform"),
            choices: ["Addition", "Subtraction ", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "Number1",
            message: "Enter 1st Number"
        },
        {
            type: "number",
            name: "Number2",
            message: "Enter 2nd Number"
        },
    ]).then((answers) => {
        if (isNaN(answers.Number1) || isNaN(answers.Number2)) {
            console.log(chalk.redBright("You didn't put number. Kindly enter number next time if you want to continue"));
        }
        else {
            if (answers.calculate == "Addition") {
                console.log(`${answers.Number1} + ${answers.Number2} =${answers.Number1 + answers.Number2}`);
            }
            else if (answers.calculate == "Subtraction ") {
                console.log(`${answers.Number1} - ${answers.Number2} =${answers.Number1 - answers.Number2}`);
            }
            else if (answers.calculate == "Multiplication") {
                console.log(`${answers.Number1} * ${answers.Number2} =${answers.Number1 * answers.Number2}`);
            }
            else if (answers.calculate == "Division") {
                console.log(`${answers.Number1} / ${answers.Number2} =${answers.Number1 / answers.Number2}`);
            }
            else {
                console.log("Will never come here");
            }
        }
    });
}
async function continueChoice() {
    do {
        await askQuestion();
        var choice = await inquirer.prompt({
            type: "input",
            name: "qa",
            message: chalk.greenBright("Do you want to continue? Press Y or y for Yes")
        });
    } while (choice.qa == 'yes' || choice.qa == 'Yes' || choice.qa == 'YES' || choice.qa == 'y' || choice.qa == 'Y');
}
continueChoice();
