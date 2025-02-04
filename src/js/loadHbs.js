import jobsTemplate from "../templates/jobs.hbs";
import jobsData from "../data/jobs_ru.json";
document.addEventListener("DOMContentLoaded", () => {
  const jobsContainer = document.querySelector(".jobs__content");

  jobsContainer.innerHTML = jobsTemplate(jobsData);
});
