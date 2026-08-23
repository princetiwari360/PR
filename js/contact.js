document.addEventListener("DOMContentLoaded", function () {
  emailjs.init({
    publicKey: "wapafyNkWceu3yWK6"
  });

  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-button");
  const response = document.getElementById("form-response");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";
    response.textContent = "";

    emailjs.sendForm(
      "service_dlj9k4k",
      "template_fwq8azi",
      form
    )
    .then(function () {
      response.textContent = "Message sent successfully.";

      form.reset();

      button.disabled = false;
      button.textContent = "Send message →";
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);

      response.textContent =
        "Unable to send message. Please try again.";

      button.disabled = false;
      button.textContent = "Send message →";
    });
  });
});
