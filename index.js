import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Write paragraph here:  "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Bhai aap ky paragraph main ${words.length} words hain`);
