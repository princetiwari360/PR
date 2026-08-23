document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const isOpen = links.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });

    document.addEventListener("click", function (event) {
      if (
        !links.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        links.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12
        }
      );

      revealElements.forEach(function (element) {
        observer.observe(element);
      });
    } else {
      revealElements.forEach(function (element) {
        element.classList.add("visible");
      });
    }
  }
});
