import { getQuestions } from "./questions.js";
import { updateView } from "./view.js";

const app = {}

app.state = {};

app.setup = async function () {
  const questions = await getQuestions();
  return questions;
}

app.start = async function () {

}

export { app };