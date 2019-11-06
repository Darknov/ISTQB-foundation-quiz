import {pageElements as elements} from "./pageElements.js";

const letterTab = ["a", "b", "c", "d", "e", "f", "g", "h"];

function createAnswers(possibleAnswers) {
  elements.possibleAnswers = [];
  elements.buttons = [];

  for(let i = 0; i < possibleAnswers.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = letterTab[i];

    const answer = document.createElement("span");
    answer.innerHTML = possibleAnswers[i];

    elements.answers.appendChild(button);
    elements.answers.appendChild(answer);
  }
}

function createExplanations(explanations) {
  elements.explanations = [];
}

export function updateView(state) {
  elements.correctAnswers.innerHTML = state.correctAnswers;
  elements.totalAnswers.innerHTML = state.totalAnswers;

  elements.question.innerHTML = state.question;

  createAnswers(state.possibleAnswers);
  createExplanations(state.explanations);

  state.showExplanation ? 
    elements.explanation.visibility = "visible":
    elements.explanation.visibility = "hidden";
}