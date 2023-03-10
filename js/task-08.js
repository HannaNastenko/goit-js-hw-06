const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (mail === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}
