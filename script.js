document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("input");
  const invalidMessage = document.querySelector(".invalid");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      emailInput.style.backgroundColor = "white";
      emailInput.style.color = "black";
      invalidMessage.classList.remove("hidden");
    } else {
      emailInput.style.borderColor = "";
      emailInput.style.backgroundColor = "";
      invalidMessage.classList.add("hidden");

      const bootstrapAlert = new bootstrap.Alert(invalidMessage);
      bootstrapAlert.close();
    }
  });
  form.setAttribute("novalidate", true);

  emailInput.addEventListener("input", function () {
    emailInput.style.borderColor = "";
    emailInput.style.backgroundColor = "";
    invalidMessage.classList.add("hidden");
  });
});
