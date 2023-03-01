const categoriesItemEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesItemEl.length);

categoriesItemEl.forEach((el) => {
  const titleEl = el.firstElementChild;
  const itemsEl = el.lastElementChild.children;
  console.log("Categories:", titleEl.textContent);
  console.log("Elements:", itemsEl.length);
});
