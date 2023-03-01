const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  let newFontSize = event.currentTarget.value;
  outputEl.style.fontSize = `${newFontSize}px`;
});
