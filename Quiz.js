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

if (score => 2){
  
    console.log(chalk.black.bgCyan.bold("Welcome to level One"));
    var questions = [{
    question: `what was Last Name of hannah?
      a: Jensen
    b: Foley
    c: Baker \n`,
    answer: "c"
  }, {
    question: `Who was mechanic?
    a: Alex
    b: Tony
    c:justine \n
    `,
    answer:"b"
  }, {
    question:` Who had guns?
    a: Hannah
    b:Mr.porter
    c:Tyler \n`,
    answer:"c"
  }];

  for (var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    letssee(currentQuestion.question, currentQuestion.answer)
  }

}else if(score==1){
  console.log("Nice 🙂");
}else{
  console.log(" Better luck next time");
}


console.log(chalk.red.bgWhite.bold.italic.underline("You have SCORED:", score));
if (score == 6){
  console.logO(chalk.black.bgYellow.bold.underline("Congratulations, you have scored maximum points!"));
};