const password1El = document.querySelector("#password");
const password2El = document.querySelector("#conform_password");
const submitBtnEl = document.querySelector("#btn");
const passwordError = document.querySelector(".error");
submitBtnEl.addEventListener("click", (event) => {
  if (password1El.value != password2El.value) {
    passwordError.setAttribute("Style", "display:block");
  } else {
    passwordError.setAttribute("style", "display: none");
  }
});
