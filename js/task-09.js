function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const randomHexColor = getRandomHexColor();

changeColorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = randomHexColor;
  color.textContent = randomHexColor;
});
