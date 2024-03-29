import { pageElements as elements } from "./pageElements.js";

const answerLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function createAnswers(possibleAnswers) {
  elements.possibleAnswers = [];
  elements.buttons = [];
  elements.answers.innerHTML = "";
  for (let i = 0; i < possibleAnswers.length; i++) {
    const answerDiv = document.createElement("div")
    answerDiv.classList.add("answer");

    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = 
    `
    <span class="icon is-medium">
      <i class="fas fa-arrow-right fa-2x"></i>
    </span>
    `

    const answer = document.createElement("div");
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
  elements.explanation.innerHTML = "";
  for (let i = 0; i < explanations.length; i++) {
    const explanation = document.createElement("div");

    explanation.innerHTML = explanations[i];

    elements.explanation.appendChild(explanation);
  }
}

function highlightAnswers(state) {
  const correctAnswersTab = state.correctAnswers.split(" ");
  const chosenAnswers = state.chosenAnswers;
  if (state.showExplanation) {
    for (let i = 0; i < chosenAnswers.length; i++) {
      elements.buttons[chosenAnswers[i]].classList.remove('is-light', 'is-success');
      if (correctAnswersTab.indexOf(answerLetters[chosenAnswers[i]]) !== -1) {
        elements.buttons[chosenAnswers[i]].classList.add('is-success');
      } else {
        elements.buttons[chosenAnswers[i]].classList.add('is-danger');
        for (let j = 0; j < correctAnswersTab.length; j++) {
          elements.buttons[answerLetters.indexOf(correctAnswersTab[i])]
            .classList.add('is-success');
        }
      }
    }
  } else {
    for (const answer of state.chosenAnswers) {
      elements.buttons[answer].classList.add('is-light', 'is-success');
    }
  }
}

export function updateView(state) {
  elements.correctAnswersNumber.innerHTML = state.correctAnswersNumber;
  elements.totalAnswersNumber.innerHTML = state.totalAnswersNumber;

  elements.question.innerHTML = state.question;

  highlightAnswers(state);

  if (state.showExplanation) {
    elements.explanation.style.visibility = "visible";
  } else {
    elements.explanation.style.visibility = "hidden";
  }

  if (state.showNextQuestion) {
    elements.nextQuestion.style.visibility = "visible";
  } else {
    elements.nextQuestion.style.visibility = "hidden";
  }
}

export function nextQuestionView(state) {
  createAnswers(state.possibleAnswers);
  createExplanations(state.explanation);
  updateView(state);
}