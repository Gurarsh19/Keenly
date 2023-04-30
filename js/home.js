let subscribeForm = document.getElementById("subscribeForm");

subscribeForm &&
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(subscribeForm);
    let data = {
      email: formData.get("email"),
    };
    let subscriber = localStorage.getItem("subscriber");
    if (subscriber) {
      subscriber = JSON.parse(subscriber);
      subscriber.push(data);
      localStorage.setItem("subscriber", JSON.stringify(subscriber));
      alert("You have successfully subscribed");
    } else {
      localStorage.setItem("subscriber", JSON.stringify([data]));
      alert("You have successfully subscribed");
    }
  });
