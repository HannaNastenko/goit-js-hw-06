const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onOutputChange);

function onOutputChange(event) {
  outputEl.textContent = event.currentTarget.value.trim();

  if (event.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
}
