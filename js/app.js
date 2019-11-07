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
  if (this.state.chosenAnswers.length < this.state.correctAnswers.split(" ").length) {
    this.state.chosenAnswers.push(number);
    this.checkState();
  }
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

app.getQuestion = function () {
  let question = this.questions[randomInt(1, this.questions.length)];
  while (question.isAnswered) {
    question = this.questions[randomInt(1, this.questions.length)];
  }
  question.isAnswered = true;
  return question;
}

app.setQuestion = function () {
  const randomQuestion = this.getQuestion();

  this.state.correctAnswers = randomQuestion.correctAnswers;
  this.state.question = randomQuestion.question;
  this.state.possibleAnswers = randomQuestion.possibleAnswers;
  this.state.explanation = randomQuestion.explanation;
  this.state.showExplanation = false;
  this.state.showNextQuestion = false;
  this.state.chosenAnswers = [];
}

app.nextQuestion = function () {
  if (this.questions.length !== this.state.totalAnswersNumber) {
    this.setQuestion();
    nextQuestionView(this.state);
    this.setButtons();
  }
}

app.setup = async function () {
  const questions = await getQuestions()
  for (const q of questions) {
    q.isAnswered = false;
  }
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

app.finish = function() {

}

export { app };