document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu__link-effect");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          // top: targetSection.offsetTop - 20, // Відступ зверху
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
