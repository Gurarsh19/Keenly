let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(loginForm);
  let data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    let found = user.find(
      (item) => item.email === data.email && item.password === data.password
    );
    if (found) {
      localStorage.setItem("loggedUser", JSON.stringify(found));
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  } else {
    alert("Invalid credentials");
  }
});
