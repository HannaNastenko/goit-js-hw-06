const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
console.log(ingredients);

const list = document.querySelector("#ingredients");
const ingredientsArr = [];

ingredients.forEach((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");

  ingredientsArr.push(element);
});

list.append(...ingredientsArr);
