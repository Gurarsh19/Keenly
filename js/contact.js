let contactForm = document.getElementById("contactForm");

contactForm &&
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(contactForm);
    let data = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    let contact = localStorage.getItem("contact");
    if (contact) {
      contact = JSON.parse(contact);
      contact.push(data);
      localStorage.setItem("contact", JSON.stringify(contact));
      alert("Your message has been sent");
      contactForm.reset();
    } else {
      localStorage.setItem("contact", JSON.stringify([data]));
      alert("Your message has been sent");
      contactForm.reset();
    }
  });
