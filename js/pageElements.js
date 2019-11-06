const getElement = id => document.getElementById(id);

export default pageElements = {
  correctAnswers: getElement("correctAnswers"),
  totalAnswers: getElement("totalAnswers"),
  question: getElement("question"),
  buttons: {
    a: getElement("a"),
    b: getElement("b"),
    c: getElement("c"),
    d: getElement("d"),
  },
  answers: {
    a: getElement("answerA"),
    b: getElement("answerB"),
    c: getElement("answerC"),
    d: getElement("answerD"),
  },
  explanations: {
    a: getElement("explanationA"),
    b: getElement("explanationB"),
    c: getElement("explanationC"),
    d: getElement("explanationD"),
  },

  explanation: getElement("explanations")
}