const getElement = id => document.getElementById(id);

export const pageElements = {
  correctAnswers: getElement("correctAnswers"),
  totalAnswers: getElement("totalAnswers"),
  question: getElement("question"),
  
  buttons: [ ],
  possibleAnswers: [ ],
  explanations: [ ],

  answers: getElement("answers"),
  explanation: getElement("explanations")
}