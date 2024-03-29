const getElement = id => document.getElementById(id);

export const pageElements = {
  correctAnswersNumber: getElement("correctAnswersNumber"),
  totalAnswersNumber: getElement("totalAnswersNumber"),
  question: getElement("question"),

  buttons: [],
  possibleAnswers: [],
  explanations: [],

  answers: getElement("answers"),
  explanation: getElement("explanations"),
  nextQuestion: getElement("nextQuestion"),
  app: getElement("app"),
  finalScore: getElement("finalScore"),
  finish: getElement("finish"),
  reset: getElement("reset")
}