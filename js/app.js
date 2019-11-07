import { getQuestions } from "./questions.js";
import { updateView } from "./view.js";
import { randomInt } from "./utils.js";
import { addAnswerButtonEvent } from "./button.js";
import { pageElements as elements } from "./pageElements.js";

const app = {}

app.state = {};

app.addScore = function () {
  this.state.correctAnswersNumber++;
}

app.addTotalAnswersNumber = function () {
  this.state.totalAnswersNumber++;
}

app.checkAnswers = function () {

}

app.checkState = function () {
  this.checkAnswers();
}

app.addAnswer = function (number) {
  this.state.chosenAnswers.push(number);
  this.checkState();
}

app.setButtons = function () {
  for (let i = 0; i < elements.buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      app.addAnswer(i);
    });
  }
}

app.setQuestion = function () {
  const randomQuestion = this.questions[randomInt(1, this.questions.length - 1)];

  this.state.correctAnswer = randomQuestion.correctAnswer;
  this.state.question = randomQuestion.question;
  this.state.possibleAnswers = randomQuestion.possibleAnswers;
  this.state.explanation = randomQuestion.explanation;
  this.state.showExplanation = true;
  this.state.chosenAnswers = [];
}

app.nextQuestion = function () {
  this.setQuestion();
  updateView(this.state);

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