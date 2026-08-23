emailjs.init({
  publicKey: "wapaFyNkWceu3yWK6"
});

const contactForm = document.getElementById("contact-form");
const responseElement = document.getElementById("form-response");
const submitButton = document.getElementById("submit-button");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    responseElement.textContent = "";
    responseElement.style.color = "";

    const templateParams = {
      from_name: document.getElementById("name").value.trim(),
      from_email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    emailjs
      .send(
        "service_djl9k4k",
        "template_fwq8azi",
        templateParams
      )
      .then(function () {
        responseElement.textContent =
          "Message sent successfully! I'll get back to you soon.";

        responseElement.style.color = "#2F6D4F";

        contactForm.reset();

        submitButton.disabled = false;
        submitButton.textContent = "Send message →";
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);

        responseElement.textContent =
          "Failed to send the message. Please try again.";

        responseElement.style.color = "#C4501F";

        submitButton.disabled = false;
        submitButton.textContent = "Send message →";
      });
  });
}
