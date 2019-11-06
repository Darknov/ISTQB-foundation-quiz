import { getQuestions } from "./questions.js";
import { updateView } from "./view.js";
import { randomInt } from "./utils.js";

const app = {}

app.state = {};

app.nextQuestion = function() {
  const randomQuestion = this.questions[randomInt(0,this.questions.length - 1)];
  console.log(randomQuestion);
  this.state.correctAnswers = randomQuestion.correctAnswers;
  this.state.totalAnswers++;
  this.state.question = randomQuestion.question;
  this.state.possibleAnswers = randomQuestion.possibleAnswers;
  this.state.explanation = randomQuestion.explanation;
  this.state.showExplanation = true;
  console.log(this.state);
}

app.setup = async function () {
  const questions = await getQuestions();
  return questions;
}

app.start = function () {
  this.setup()
    .then(questions => {
      this.questions = questions;
      this.state.totalAnswers = 0;
      this.nextQuestion();
    })
    
}

export { app };