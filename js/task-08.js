const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    alert("Please fill in all the fields!");
  }
  console.log(formData);
  event.currentTarget.reset();
}
