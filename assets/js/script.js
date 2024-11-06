//DOMfinish loading listener
document.addEventListener("DOMContentLoaded", function(){
//get buttons, add listeners
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
            checkAnswer();
            } else {
            let gameType =  this.getAttribute("data-type");
            runGame(gameType);
            }
        });
    }
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
            checkAnswer();
        }
    })

    runGame("addition");
});


/** The main gameplay loop, called when the script is first loaded and after the user's answer has been processed */

function runGame(gameType) {
    document.getElementById("answer-box").value ="";
    document.getElementById("answer-box").focus();
    //creates two random integers between 1 and 25
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }
   else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    }
   else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }
    else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    }
    else{
        alert(`Unknown game type : ${gameType}`);
        throw `Unknown game type : ${gameType}. Aborting`;
    }
}

/**
 * checks user's submitted answer against the return of the calculateCorrectAnswer() array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if(isCorrect){
        alert("That is correct!");
        incremementScore();
    } else{
        alert(`So close!! but ${userAnswer} was incorrect... The correct answer is ${calculatedAnswer[0]}!`);
        incremementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * gets operands and the operator directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    
    if(operator === "+"){
        return [operand1 + operand2, "addition"];
    }
     else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    }
    else if(operator === "-"){
        return [operand1 - operand2, "subtract"];
    }
    else if(operator === "/"){
        return [operand1 / operand2, "division"];
    }
    else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. aborting...`;
    }
}
/**
 * gets current score from the DOM and increments the value by one 
 */
function incremementScore() {
let oldScore = parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerText = ++oldScore;
}
/**
 * gets current incorrect answers tally from the DOM and increments the value by one 
 */
function incremementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
function displayAdditionQuestion(operand1, operand2) {
document.getElementById("operand1").textContent = operand1;
document.getElementById("operand2").textContent = operand2;
document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 < operand2 ? operand1 : operand2;
    document.getElementById("operator").textContent = "-";
}
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}
function displayDivisionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}