import jobsTemplate from "../templates/jobsTemplate.hbs";
import jobsData from "../data/jobs_ru.json";
document.addEventListener("DOMContentLoaded", () => {
  const jobsContainer = document.querySelector(".jobs__content");
  console.log(jobsContainer);
  jobsContainer.innerHTML = jobsTemplate(jobsData);
});
