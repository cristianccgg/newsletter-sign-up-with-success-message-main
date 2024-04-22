const thanksContainer = document.getElementById("thanks-container");
const mainContainer = document.getElementById("main-container");
const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const EmailInput = document.getElementById("email-input");
const EmailError = document.getElementById("email-error");
const confirmation = document.getElementById("confirmation");

subscribeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const isValidEmail = validateEmail(EmailInput.value);
  if (isValidEmail) {
    thanksContainer.classList.toggle("active");
    mainContainer.classList.toggle("active");
    confirmation.innerText = `A confirmation email has been sent to ${EmailInput.value}. Please open it and click the button inside to confirm your subscription`;
  } else {
    EmailError.classList.toggle("active-error");
    EmailInput.classList.toggle("input-error");
  }
});

dismissBtn.addEventListener("click", () => {
  thanksContainer.classList.toggle("active");
  mainContainer.classList.toggle("active");
});

function validateEmail(email) {
  let regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regex.test(email);
}
