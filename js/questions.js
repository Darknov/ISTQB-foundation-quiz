export const getQuestions = async () => {
  const json = await fetch('https://darknov.github.io/ISTQB-foundation-quiz/data/setA.json', {})
    .then(response => response.json());
  return json.questions;
}