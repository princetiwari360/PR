document.addEventListener("DOMContentLoaded", () => {

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }



  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {

    toggle.addEventListener("click", () => {

      const open = links.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    });


    /* Close menu after clicking a link */

    links.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        links.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach((element) => {

      observer.observe(element);

    });

  } else {

    /* Fallback for old browsers */

    revealElements.forEach((element) => {

      element.classList.add("visible");

    });

  }



  document.addEventListener("click", (event) => {

    if (!toggle || !links) {
      return;
    }

    const clickedInsideNav =
      links.contains(event.target) ||
      toggle.contains(event.target);

    if (!clickedInsideNav) {

      links.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && links && toggle) {

      links.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.focus();

    }

  });

});
