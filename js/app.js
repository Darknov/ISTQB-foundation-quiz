import { getQuestions } from "./questions.js";
import { updateView, nextQuestionView } from "./view.js";
import { randomInt } from "./utils.js";
import { pageElements as elements } from "./pageElements.js";

const app = {}

app.state = {};

app.addScore = function () {
  this.state.correctAnswersNumber++;
  updateView(this.state);
}

app.addTotalAnswersNumber = function () {
  this.state.totalAnswersNumber++;
  updateView(this.state);
}

app.checkAnswers = function () {
  const answerLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const correctAnswersTab = this.state.correctAnswers.split(" ");
  const chosenAnswers = this.state.chosenAnswers;
  let isCorrectAnswer = true;

  if (chosenAnswers.length === correctAnswersTab.length) {
    for (const chosenAnswer of chosenAnswers) {
      if (correctAnswersTab.indexOf(answerLetters[chosenAnswer]) === -1) {
        isCorrectAnswer = false;
      }
    }
  }

  return (isCorrectAnswer) && ((chosenAnswers.length) === correctAnswersTab.length);
}

app.checkState = function () {
  const isCorrectAnswer = this.checkAnswers();
  if (isCorrectAnswer) {
    this.addScore();
  }

}

app.addAnswer = function (number) {
  this.state.chosenAnswers.push(number);
  this.checkState();
  this.state.showExplanation = true;
  this.state.showNextQuestion = true;
  updateView(this.state);
}

app.setButtons = function () {
  for (let i = 0; i < elements.buttons.length; i++) {
    elements.buttons[i].addEventListener("click", () => {
      app.addAnswer(i);
    });
  }
}

app.setQuestion = function () {
  const randomQuestion = this.questions[randomInt(1, this.questions.length - 1)];

  this.state.correctAnswers = randomQuestion.correctAnswers;
  this.state.question = randomQuestion.question;
  this.state.possibleAnswers = randomQuestion.possibleAnswers;
  this.state.explanation = randomQuestion.explanation;
  this.state.showExplanation = false;
  this.state.showNextQuestion = false;
  this.state.chosenAnswers = [];
}

app.nextQuestion = function () {
  this.setQuestion();
  nextQuestionView(this.state);
  this.setButtons();
}

app.setup = async function () {
  const questions = await getQuestions();
  return questions;
}

app.start = function () {
  elements.nextQuestion.addEventListener("click", () => {
    app.addTotalAnswersNumber();
    app.nextQuestion();
  });

  this.setup()
    .then(questions => {
      this.questions = questions;
      this.state.totalAnswersNumber = 1;
      this.state.correctAnswersNumber = 0;
      this.nextQuestion();
      updateView(this.state);
    })
}

export { app };