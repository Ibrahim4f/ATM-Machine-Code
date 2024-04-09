import inquirer from "inquirer";
let totalBalance = 30000;
const pinNumber = 2003;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    }
]);
if (pinEntered.pin == pinNumber) {
    let atmQuestions = await inquirer.prompt([
        {
            name: 'accountType',
            message: 'Select your account type',
            type: 'list',
            choices: [
                'Current Account',
                'Savings Account',
            ]
        },
        {
            name: 'transMethod',
            message: 'Select your transaction method',
            type: 'list',
            choices: [
                'cash withdrawal',
                'Fast cash'
            ]
        }
    ]);
    let cashwithdrawAmount;
    if (atmQuestions.transMethod === "cash withdrawal") {
        cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        if (totalBalance >= cashwithdrawAmount.withdrawal) {
            totalBalance -= cashwithdrawAmount.withdrawal;
            console.log(`Your Total Balance is: ${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (atmQuestions.transMethod === "Fast cash") {
        let fastcashAmount = await inquirer.prompt([
            {
                name: 'fastcash',
                message: 'Select the amount you want to withdraw',
                type: 'list',
                choices: [
                    "5000",
                    "10000",
                    "30000",
                ],
            },
        ]);
        if (totalBalance >= parseInt(fastcashAmount.fastcash)) {
            totalBalance -= parseInt(fastcashAmount.fastcash);
            console.log(`Your Total Balance is: ${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
else {
    console.log('Enter Valid PIN');
}
