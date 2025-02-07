if (module.hot) {
  module.hot.accept("./index.js", function () {
    console.log("Index module updated.");
  });
}

import "../../node_modules/modern-normalize/modern-normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../scss/index.scss";
import "../js/loadHtml";
import "../js/menuScript";
import "../js/showFixedEl";
import "./sliders";
// import "../js/loadHbs";

//   import '../js/main/languageScript';
