const inputEl = document.querySelector("#validation-input");
const inputLengthEl = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputChange);

function onInputChange(event) {
  inputEl.classList.toggle(
    "valid",
    event.currentTarget.value.trim().length === Number(inputLengthEl)
  );
  inputEl.classList.toggle(
    "invalid",
    event.currentTarget.value.trim().length !== Number(inputLengthEl)
  );
}
