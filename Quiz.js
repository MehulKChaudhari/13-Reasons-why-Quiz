var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question('May I have your name? ');

var score =0;

console.log(chalk.red.bgWhite.inverse('Welcome ' + userName +"!\n" + " Let's see, How well do you know 13th reasons Why?"));

console.log(chalk.bgMagenta.bold("**Instructions**"));

console.log(chalk.yellow.bold.underline(`1. For Going to level One you need atleast 2 points! Good luck\n
No cheating :')' `));

function letssee(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log(chalk.black.bgGreen.bold("Correct!"));
    console.log("You earned One Point");
    score++
  }else{
    console.log(chalk.bgRed.bold("Wrong"));
    console.log("No point for this");
  }

  console.log("Current Score:" , score);
  console.log(chalk.bgRed.bold("-*-*-*-*-*-*-*-*-*-* \n"));

}
var questions = [{
  question: `How Hannah died?
  	a: Murdered
	b: Suicide
	c: Road Accident \n`,
  answer: "b"
}, {
  question: `Who killed Bryce?
  a: Alex
  b: Monty
  c:Mrs.Baker \n
  `,
  answer:"a"
}, {
  question:` Who was Girlfriend of clay in S3
  a: Hannah
  b:jessica
  c:Ani \n`,
  answer:"c"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  letssee(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.red.bgWhite.bold.italic.underline("You have SCORED:", score));