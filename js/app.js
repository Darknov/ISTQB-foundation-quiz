import { getQuestions } from "./questions.js";

const app = {}

app.setup = function() {
  getQuestions();
}

app.start = function() {
  this.setup();
}

export {app};