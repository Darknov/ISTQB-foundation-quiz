import elements from "./pageElements.js";

export function updateView(state) {
  elements.correctAnswers.innerHTML = state.correctAnswers;
  elements.totalAnswers.innerHTML = state.totalAnswers;

  elements.question.innerHTML = state.question;

  elements.answers.a.innerHTML = state.answers.a;
  elements.answers.b.innerHTML = state.answers.b;
  elements.answers.c.innerHTML = state.answers.c;
  elements.answers.d.innerHTML = state.answers.d;

  elements.explanations.a.innerHTML = state.explanations.a;
  elements.explanations.a.innerHTML = state.explanations.a;
  elements.explanations.a.innerHTML = state.explanations.a;
  elements.explanations.a.innerHTML = state.explanations.a;

  state.showExplanation ? 
    elements.explanation.visibility = "visible":
    elements.explanation.visibility = "hidden";
}