var onPageLoad = () => {
  !localStorage.getItem("loggedUser") && (window.location.href = "login.html");

  var logoutAction = document.getElementById("logoutAction");

  logoutAction &&
    logoutAction.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      window.location.href = "login.html";
    });
};
onPageLoad();
