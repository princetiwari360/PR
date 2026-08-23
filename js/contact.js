document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
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
