
document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector(".article-content");
  const links = document.querySelectorAll(".article-index a");
  const sections = document.querySelectorAll(".article-section");

  if (!article) return;

  const progress = document.createElement("div");

  progress.className = "article-progress";

  document.body.prepend(progress);

  function updateProgress() {
    const scrollTop = window.scrollY;

    const articleTop =
      article.getBoundingClientRect().top + window.scrollY;

    const articleHeight = article.offsetHeight;

    const windowHeight = window.innerHeight;

    const progressHeight =
      articleHeight - windowHeight;

    if (progressHeight <= 0) {
      progress.style.width = "100%";
      return;
    }

    const current =
      ((scrollTop - articleTop) / progressHeight) * 100;

    const value = Math.min(
      100,
      Math.max(0, current)
    );

    progress.style.width = value + "%";
  }

  function updateActiveSection() {
    let currentSection = "";

    sections.forEach(function (section) {
      const top =
        section.getBoundingClientRect().top;

      if (top <= 180) {
        currentSection = section.id;
      }
    });

    links.forEach(function (link) {
      const href = link.getAttribute("href");

      link.classList.remove("active");

      if (href === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener(
    "scroll",
    function () {
      updateProgress();
      updateActiveSection();
    },
    { passive: true }
  );

  updateProgress();
  updateActiveSection();
});
