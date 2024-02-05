(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scss/main.scss */ "./assets/styles/scss/main.scss");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/script.js */ "./assets/js/script.js");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_1__);
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
console.log('coucou les amis');
var nav = document.querySelector('.nav');
console.log(nav);
nav.style.backgroundColor = 'transparent';
nav.style.padding = "2vh 5vw";
document.addEventListener("scroll", function () {
  if (window.scrollY > 70) {
    nav.style.backgroundColor = '#19376D';
    nav.querySelectorAll('a').forEach(function (e) {
      e.style.fontSize = "14px";
    });
    nav.style.padding = "1vh 5vw";
    nav.querySelector('.logo').style.width = "70px";
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.querySelectorAll('a').forEach(function (e) {
      e.style.fontSize = "16px";
    });
    nav.style.padding = "2vh 5vw";
  }
});
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var line4 = document.querySelector('.line4');
console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
// line1.style.display = "none"
function display_text(element, time) {
  setTimeout(function () {
    element.style.opacity = 1;
  }, time);
}
display_text(line1, 200);
display_text(line2, 600);
display_text(line3, 1000);
display_text(line4, 1400);
document.addEventListener('DOMContentLoaded', function () {
  var currentPage = window.location.pathname;
  console.log(currentPage);
  // Sélectionnez tous les liens avec la classe "menu-link"
  var menuLinks = document.querySelectorAll('.nav_link');

  // Parcourez chaque lien et ajoutez la classe "active" si son href correspond à la page actuelle
  menuLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

//--------------------------MENU BURGER ------------------------------
var menuburger = document.querySelector('.burgerMenu');
// var toggle = document.querySelector('.toggle');
var close_menu = document.querySelector('.closed');
// var body = document.querySelector('body');
var burgerMenu = document.querySelector('.BurgermenuIcone');
console.log(burgerMenu);
burgerMenu.addEventListener('click', function () {
  menuburger.classList.toggle('active');
});
close_menu.addEventListener('click', function () {
  menuburger.classList.toggle('active');
});

/***/ }),

/***/ "./assets/styles/scss/main.scss":
/*!**************************************!*\
  !*** ./assets/styles/scss/main.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-5fa493"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEdBQUcsQ0FBQ3dCLFdBQVcsQ0FBQztFQUN4QjtFQUNBLElBQUlHLFNBQVMsR0FBR3pCLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsV0FBVyxDQUFDOztFQUV0RDtFQUNBaUIsU0FBUyxDQUFDaEIsT0FBTyxDQUFDLFVBQVNpQixJQUFJLEVBQUU7SUFDN0IsSUFBSUEsSUFBSSxDQUFDQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUtMLFdBQVcsRUFBRTtNQUMzQ0ksSUFBSSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDaEM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7O0FBR0Y7QUFDQSxJQUFJQyxVQUFVLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdEQ7QUFDQSxJQUFJOEIsVUFBVSxHQUFHL0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ2xEO0FBQ0EsSUFBSStCLFVBQVUsR0FBR2hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzNESixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tDLFVBQVUsQ0FBQztBQUN2QkEsVUFBVSxDQUFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFlBQVk7RUFDNUN5QixVQUFVLENBQUNGLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFDRkYsVUFBVSxDQUFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFlBQVk7RUFDNUN5QixVQUFVLENBQUNGLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUN6QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3RFRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3Njc3MvbWFpbi5zY3NzPzYwNTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vanMvc2NyaXB0LmpzJztcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJjb25zb2xlLmxvZygnY291Y291IGxlcyBhbWlzJyk7XHJcbmxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JylcclxuY29uc29sZS5sb2cobmF2KTtcclxuXHJcbm5hdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J3RyYW5zcGFyZW50JztcclxubmF2LnN0eWxlLnBhZGRpbmcgPSAgXCIydmggNXZ3XCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoKT0+e1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZPjcwKSB7XHJcbiAgICAgICAgbmF2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9JyMxOTM3NkQnOyBcclxuICAgICAgICBuYXYucXVlcnlTZWxlY3RvckFsbCgnYScpXHJcbiAgICAgICAgLmZvckVhY2goKGUpPT57ZS5zdHlsZS5mb250U2l6ZT1cIjE0cHhcIn0pXHJcbiAgICAgICAgbmF2LnN0eWxlLnBhZGRpbmcgPSAgXCIxdmggNXZ3XCI7XHJcbiAgICAgICAgbmF2LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJykuc3R5bGUud2lkdGg9XCI3MHB4XCJcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICBuYXYuc3R5bGUuYmFja2dyb3VuZENvbG9yPSd0cmFuc3BhcmVudCc7XHJcbiAgICBuYXYucXVlcnlTZWxlY3RvckFsbCgnYScpXHJcbiAgICAgICAgLmZvckVhY2goKGUpPT57ZS5zdHlsZS5mb250U2l6ZT1cIjE2cHhcIn0pXHJcbiAgICBuYXYuc3R5bGUucGFkZGluZyA9ICBcIjJ2aCA1dndcIjtcclxuXHJcblxyXG4gICAgfVxyXG59KVxyXG5sZXQgbGluZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZTEnKVxyXG5sZXQgbGluZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZTInKVxyXG5sZXQgbGluZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZTMnKVxyXG5sZXQgbGluZTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZTQnKVxyXG5jb25zb2xlLmxvZyhsaW5lMSk7XHJcbmNvbnNvbGUubG9nKGxpbmUyKTtcclxuY29uc29sZS5sb2cobGluZTMpO1xyXG5jb25zb2xlLmxvZyhsaW5lNCk7XHJcbi8vIGxpbmUxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG5mdW5jdGlvbiBkaXNwbGF5X3RleHQoZWxlbWVudCx0aW1lKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfSwgdGltZSk7XHJcbn1cclxuZGlzcGxheV90ZXh0KGxpbmUxLDIwMClcclxuZGlzcGxheV90ZXh0KGxpbmUyLDYwMClcclxuZGlzcGxheV90ZXh0KGxpbmUzLDEwMDApXHJcbmRpc3BsYXlfdGV4dChsaW5lNCwxNDAwKVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjdXJyZW50UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcclxuICAgIC8vIFPDqWxlY3Rpb25uZXogdG91cyBsZXMgbGllbnMgYXZlYyBsYSBjbGFzc2UgXCJtZW51LWxpbmtcIlxyXG4gICAgdmFyIG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfbGluaycpO1xyXG5cclxuICAgIC8vIFBhcmNvdXJleiBjaGFxdWUgbGllbiBldCBham91dGV6IGxhIGNsYXNzZSBcImFjdGl2ZVwiIHNpIHNvbiBocmVmIGNvcnJlc3BvbmQgw6AgbGEgcGFnZSBhY3R1ZWxsZVxyXG4gICAgbWVudUxpbmtzLmZvckVhY2goZnVuY3Rpb24obGluaykge1xyXG4gICAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUVOVSBCVVJHRVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBtZW51YnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlck1lbnUnKTtcclxuLy8gdmFyIHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUnKTtcclxudmFyIGNsb3NlX21lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VkJyk7XHJcbi8vIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG52YXIgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5CdXJnZXJtZW51SWNvbmUnKTtcclxuY29uc29sZS5sb2coYnVyZ2VyTWVudSk7XHJcbmJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgIG1lbnVidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufSlcclxuY2xvc2VfbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgbWVudWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJmb250U2l6ZSIsIndpZHRoIiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwibGluZTQiLCJkaXNwbGF5X3RleHQiLCJlbGVtZW50IiwidGltZSIsInNldFRpbWVvdXQiLCJvcGFjaXR5IiwiY3VycmVudFBhZ2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibWVudUxpbmtzIiwibGluayIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsIm1lbnVidXJnZXIiLCJjbG9zZV9tZW51IiwiYnVyZ2VyTWVudSIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=