import { app } from "./app.js";
const start = document.getElementById("start");
start.addEventListener("click", () => {
  start.style.display = "none";
  document.getElementById("app").style.visibility = "visible";
  app.start();
});