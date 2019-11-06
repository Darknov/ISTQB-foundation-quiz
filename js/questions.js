export const getQuestions = async () => {
  const response = await fetch('https://darknov.github.io/ISTQB-foundation-quiz/data/setA.json', {});
  const json = await response.json();
  return json;
}