import { pageElements as elements } from "./pageElements.js";

function createAnswers(possibleAnswers) {
  elements.possibleAnswers = [];
  elements.buttons = [];

  for (let i = 0; i < possibleAnswers.length; i++) {
    const answerDiv = document.createElement("div");
    const button = document.createElement("button");
    button.innerHTML = " --> ";

    const answer = document.createElement("span");
    answer.innerHTML = possibleAnswers[i];

    elements.possibleAnswers.push(answer);
    elements.buttons.push(button);

    answerDiv.appendChild(button);
    answerDiv.appendChild(answer);

    elements.answers.appendChild(answerDiv);
  }
}

function createExplanations(explanations) {
  elements.explanations = [];

  for (let i = 0; i < explanations.length; i++) {
    const explanation = document.createElement("div");

    explanation.innerHTML = explanations[i];

    elements.explanation.appendChild(explanation);
  }
}

export function updateView(state) {
  elements.correctAnswersNumber.innerHTML = state.correctAnswersNumber;
  elements.totalAnswersNumber.innerHTML = state.totalAnswersNumber;

  elements.question.innerHTML = state.question;

  createAnswers(state.possibleAnswers);
  createExplanations(state.explanation);

  if (state.showExplanation) {
    elements.explanation.style.visibility = "visible";
  } else {
    elements.explanation.style.visibility = "hidden";
  }
}