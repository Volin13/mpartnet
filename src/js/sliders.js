import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Navigation, Pagination, Autoplay } from "swiper/modules";
// import samples from "../../data/samples_uk.json";
// import engSamples from "../../data/samples_en.json";
// import template from "../../templates/samplesItem.hbs";

document.addEventListener("DOMContentLoaded", function () {
  //   const currentLang = localStorage.getItem('lang') || 'uk';
  //   if (currentLang === 'uk') {
  //     document.querySelector('.mainSwiper-wrapper').innerHTML = template(samples);
  //   } else {
  //     document.querySelector('.mainSwiper-wrapper').innerHTML =
  //       template(engSamples);
  //   }

  // Now you can use Swiper
  const partnersSwiper = new Swiper(".partnersSwiper", {
    speed: 500,

    loop: true,
    grabCursor: true,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.5,
    },
    pagination: {
      el: ".partnersSwiper__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} custom-bullet">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".partners__swiper-button-next",
      prevEl: ".partners__swiper-button-prev",
    },
    modules: [Mousewheel, Navigation, Pagination, Autoplay],
  });

  const benefitsSwiper = new Swiper(".benefitsSwiper", {
    speed: 500,

    loop: true,
    grabCursor: true,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.5,
    },
    pagination: {
      el: ".benefitsSwiper__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} custom-bullet">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".benefits__swiper-button-next",
      prevEl: ".benefits__swiper-button-prev",
    },
    modules: [Mousewheel, Navigation, Pagination, Autoplay],
  });

  const candidatsSwiper = new Swiper(".candidatsSwiper", {
    speed: 500,

    loop: true,
    grabCursor: true,
    mousewheel: false,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.5,
    },
    pagination: {
      el: ".candidatsSwiper__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} custom-bullet">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: ".candidats__swiper-button-next",
      prevEl: ".candidats__swiper-button-prev",
    },
    modules: [Mousewheel, Navigation, Pagination, Autoplay],
  });
});
