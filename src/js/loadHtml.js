import headerHTML from "../partials/header.html";
import headerTemplate from "../templates/header.hbs";
// import translations from '../../data/translations.json';
import menuHTML from "../partials/menu.html";
import menuTemplate from "../templates/menu.hbs";
import aboutHTML from "../partials/about.html";
import aboutTemplate from "../templates/about.hbs";
import partnersHTML from "../partials/partners.html";
import partnersTemplate from "../templates/partners.hbs";
import candidatsHTML from "../partials/candidats.html";
import candidatsTemplate from "../templates/candidats.hbs";
import jobsHTML from "../partials/jobs.html";
import jobsTemplate from "../templates/jobs.hbs";
import benefitsHTML from "../partials/benefits.html";
import benefitsTemplate from "../templates/benefits.hbs";
import contactsHTML from "../partials/contacts.html";
import contactsTemplate from "../templates/contacts.hbs";

import footerHTML from "../partials/footer.html";
import footerTemplate from "../templates/footer.hbs";

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem("lang") || "uk";
  // const langContext = translations[currentLang] || {}; // Перевірка наявності мови
  const langContext = {};
  // Функція для вставки шаблонів або HTML
  const renderContent = (elementId, template, html) => {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
    // if (element) {
    //   if (Object.keys(langContext).length) {
    //     element.innerHTML = template(langContext);
    //   } else {
    //     element.innerHTML = html;
    //   }
    // }
  };

  // Вставка головного контенту
  renderContent("menu", menuTemplate, menuHTML);
  renderContent("about", aboutTemplate, aboutHTML);
  renderContent("partners", partnersTemplate, partnersHTML);
  renderContent("candidats", candidatsTemplate, candidatsHTML);
  renderContent("jobs", jobsTemplate, jobsHTML);
  renderContent("benefits", benefitsTemplate, benefitsHTML);
  renderContent("contacts", contactsTemplate, contactsHTML);

  // Вставка хедера
  const headers = document.querySelectorAll(".headerThumb");

  headers.forEach((header) => {
    if (Object.keys(langContext).length) {
      header.innerHTML = headerTemplate(langContext);
    } else {
      header.innerHTML = headerHTML;
    }
  });

  // Вставка футера
  const footers = document.querySelectorAll(".footerThumb");
  footers.forEach((footer) => {
    if (Object.keys(langContext).length) {
      footer.innerHTML = footerTemplate(langContext);
    } else {
      footer.innerHTML = footerHTML;
    }
  });

  //   const helloBtn = document.getElementById('greetings');
  //   const nameLable = document.getElementById('atimateEl');
  //   helloBtn.addEventListener('click', function () {
  //     nameLable.classList.toggle('animated');
  //   });
});
