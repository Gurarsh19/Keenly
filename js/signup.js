let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(signupForm);
  let data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    user.push(data);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "login.html";
  } else {
    localStorage.setItem("user", JSON.stringify([data]));
    window.location.href = "login.html";
  }
});
