const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputChange);

function onInputChange(event) {
  const inputLengthEl = event.currentTarget.dataset.length;
  if (event.currentTarget.value.length == inputLengthEl) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
