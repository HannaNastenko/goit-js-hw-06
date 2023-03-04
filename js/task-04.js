const ref = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};

let counterValue = 0;

ref.decrement.addEventListener("click", () => {
  counterValue -= 1;
  ref.span.textContent = counterValue;
});

ref.increment.addEventListener("click", () => {
  counterValue += 1;
  ref.span.textContent = counterValue;
});
