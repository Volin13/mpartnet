document.addEventListener("DOMContentLoaded", () => {
  const headerSection = document.getElementById("header");
  const menuSection = document.getElementById("menu");

  const fixedLogo = document.querySelector(".logo__link");
  // const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

  const createObserver = (element, section) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove("visible");
          } else {
            element.classList.add("visible");
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(section);

    const initialEntry = {
      isIntersecting:
        section.getBoundingClientRect().top < window.innerHeight * 0.8,
    };
    if (initialEntry.isIntersecting) {
      element.classList.remove("visible");
    } else {
      element.classList.add("visible");
    }
  };

  createObserver(fixedLogo, headerSection);

  // createObserver(scrollToTopBtn, headerSection);
  // createObserver(scrollToTopBtn, menuSection);
});
