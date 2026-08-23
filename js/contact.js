document.addEventListener("DOMContentLoaded", function () {
  emailjs.init({
    publicKey: "wapafyNkWceu3yWK6"
  });

  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-button");
  const response = document.getElementById("form-response");

  if (!form) {
    console.error("Contact form not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";
    response.textContent = "";

    emailjs.sendForm(
      "service_djI9k4k",
      "template_fwq8azi",
      form
    )
    .then(function (result) {
      console.log("SUCCESS:", result.status, result.text);

      response.textContent = "Message sent successfully.";
      response.style.color = "green";

      form.reset();

      button.disabled = false;
      button.textContent = "Send message →";
    })
    .catch(function (error) {
      console.error("EMAILJS ERROR:", error);
      console.error("ERROR STATUS:", error.status);
      console.error("ERROR TEXT:", error.text);

      response.textContent =
        "Error: " + (error.text || "Unable to send message.");

      response.style.color = "red";

      button.disabled = false;
      button.textContent = "Send message →";
    });
  });
});
