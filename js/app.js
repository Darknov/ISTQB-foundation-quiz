import { getQuestions } from "./questions.js";
import { updateView } from "./view.js";
import { randomInt } from "./utils.js";

const app = {}

app.state = {};

app.nextQuestion = function () {
  const randomQuestion = this.questions[randomInt(0, this.questions.length - 1)];

  this.state.correctAnswer = randomQuestion.correctAnswer;
  this.state.question = randomQuestion.question;
  this.state.possibleAnswers = randomQuestion.possibleAnswers;
  this.state.explanation = randomQuestion.explanation;
  this.state.showExplanation = true;
}

app.setup = async function () {
  const questions = await getQuestions();
  return questions;
}

app.start = function () {
  this.setup()
    .then(questions => {
      this.questions = questions;
      this.state.totalAnswersNumber = 0;
      this.state.correctAnswersNumber = 0;
      this.nextQuestion();
      updateView(this.state);
    })

}

export { app };