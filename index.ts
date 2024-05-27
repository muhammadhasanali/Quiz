#! /usr/bin/env node
import inquirer from 'inquirer'

console.log("Welcome to Daily Quiz")
console.log("Each Question of 10 Marks \n")

let marks = 0;

let answers = await inquirer.prompt([
    {
        name: "question1",
        message: "1. What is Capital city of Pakistan?",
        type: "list",
        choices: ["Islamabad","Karachi","Lahore","Peshawar","Multan"]
    },
    {
        name: "question2",
        message: "2. How many times name Ahmed came in Quran?",
        type: "list",
        choices: [1,2,3,10,15]
    },
    {
        name: "question3",
        message: "3. How many Surahs are there in Holy Quran?",
        type: "list",
        choices: [3,45,70,114,100]
    },
    {
        name: "question4",
        message: "4. Most Populated city in Pakistan?",
        type: "list",
        choices: ["Islamabad","Karachi","Lahore","Peshawar","Multan"]
    },
    {
        name: "question5",
        message: "5. How many days are there in leap year?",
        type: "list",
        choices: [365,355,366,370,360]
    }
])

const {question1,question2,question3,question4,question5} = answers

let correctOptions = ["Islamabad",1,114,"Karachi",366]

if(question1 === "Islamabad") marks += 10;
if(question2 === 1) marks += 10;
if(question3 === 114) marks += 10;
if(question4 === "Karachi") marks += 10;
if(question5 === 366) marks += 10;

console.log(marks)

function myAnswers(){
    console.log(`\n Correct options:`, correctOptions)

    if(marks == 50){console.log(`\nCongratulations! You got ${marks} marks, out of 50`)}
    else if(marks > 0){console.log(`\nYou got ${marks} marks, out of 50`)}
    else{console.log(`\n Unfortunately! You got ${marks} marks, out of 50`)}
}

myAnswers()