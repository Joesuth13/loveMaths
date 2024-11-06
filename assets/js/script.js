//DOMfinish loading listener
document.addEventListener("DOMContentLoaded", function(){
//get buttons, add listeners
let buttons = document.getElementsByTagName("button");
for (let button of buttons){
    button.addEventListener("click", function(){
        if (this.getAttribute("data-type") === "submit"){
            alert("You clicked submit");
        } else {
           let gameType =  this.getAttribute("data-type");
           alert(`You clicked ${gameType}`);
        }
    })
}
})




function runGame() {
document.addEventListener
}
function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incremementScore() {

}
function incremementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {

}