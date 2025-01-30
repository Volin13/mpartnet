if (module.hot) {
  module.hot.accept("./index.js", function () {
    console.log("Index module updated.");
  });
}
import "../../node_modules/modern-normalize/modern-normalize.css";
import "swiper/css";

import "../scss/index.scss";
import "../js/loadHtml";
//   import '../js/main/menuScript';
// import "../js/hbsLoader";
//   import '../js/main/samplesSlider';

//   import '../js/main/languageScript';
