(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n    <particles [style]=\"myStyle\" [width]=\"width\" [height]=\"height\" [params]=\"myParams\"></particles>\n    <nav class=\"navbar navbar-primary navbar-fixed-top\" id=\"mNavbar\" style=\"background-color: white\">\n\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed btn\" data-toggle=\"collapse\"\n                    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>Menu\n                </button>\n                <a class=\"navbar-brand\" href=\"#\"><img src=\"../assets/college.jpg\" style=\"width: 75px\"> </a> </div>\n            <div class=\"collapse navbar-collapse \" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav text-center\">\n\n                    <li><a routerLink=\"/\">Home</a></li>\n                    <li><a routerLink=\"/cultural\" routerLinkActive=\"active-link\">Cultural Events</a></li>\n                    <li><a routerLink=\"/sports\" routerLinkActive=\"active-link\">Sports Events</a></li>\n                    <li><a routerLink=\"/sponsers\" routerLinkActive=\"active-link\">Sponsers</a></li>\n                    <li><a routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact us</a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-6 col-md-6\">\n      <div id=\"map-container-google-3\" class=\"z-depth-1-half map-container-3\">\n        <iframe src=\"https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\"\n          style=\"border:0\" allowfullscreen></iframe>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-6 col-md-6\">\n\n    </div>\n  </div>\n</div> -->\n\n\n\n<div class=\"container\" style=\"margin-top: 5%\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div>\n        <div class=\"panel panel-default\">\n          <div class=\"text-center header\">Meet Us At...</div>\n          <div class=\"panel-body text-center\">\n            <div class=\"row\">\n              <h5 class=\"text-center\">OVERALL EVENT CO-ORDINATER(S)</h5>\n              <div class=\"col-sm-4 col-md-4 col-4\">\n                <div>\n                  <h4 class=\"text-center\"><strong> O.VISHNU SAI</strong></h4>\n                  <h5 class=\"text-center\"><u><strong> 9505576479</strong></u></h5>\n                </div>\n              </div>\n              <div class=\"col-sm-4 col-md-4 col-4\">\n                <div>\n                  <h4 class=\"text-center\"><strong> A.RAHUL VARMA</strong></h4>\n                  <h5 class=\"text-center\"><u><strong> 7660813456</strong></u></h5>\n                </div>\n              </div>\n              <div class=\"col-sm-4 col-md-4 col-4\">\n                <div>\n                  <h4 class=\"text-center\"><strong> T.AJAY</strong></h4>\n                  <h5 class=\"text-center\"><u><strong> 8500424258</strong></u></h5>\n                </div>\n              </div>\n            </div>\n\n            <hr />\n            <div class=\"row\">\n              <div class=\"col-sm-6 col-md-6 col-6\">\n                <div>\n                  <h5 class=\"text-center\">CULTERAL EVENT CO-ORDINATER(S)</h5>\n                  <h4 class=\"text-center\"><strong> S.Y.KUMAR</strong></h4>\n                  <h5 class=\"text-center\"><u><strong> 9966143857</strong></u></h5>\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6 col-6\">\n                <div>\n                  <h5 class=\"text-center\">SPORTS EVENT CO-ORDINATER(S)</h5>\n                  <h4 class=\"text-center\"><strong> S.HARI KRISHNA KUMAR</strong></h4>\n                  <h5 class=\"text-center\"><u><strong> 6300813031</strong></u></h5>\n                </div>\n              </div>\n            </div>\n\n            <hr />\n            <div>\n              <h4>Address</h4>\n              <div>\n                Besides VSEZ Vadlapudi Duvvada<br />\n                Gajuwaka, Visakhapatnam<br />\n                Andhra Pradesh<br />\n                530049, India<br />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"well well-sm\">\n        <form class=\"form-horizontal\" method=\"post\">\n          <fieldset>\n            <legend class=\"text-center header\">Contact us</legend>\n            <div class=\"form-group\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <input id=\"fname\" name=\"name\" type=\"text\" placeholder=\"First Name\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <input id=\"lname\" name=\"name\" type=\"text\" placeholder=\"Last Name\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email Address\" class=\"form-control\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-md-10 col-md-offset-1\">\n                <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control\">\n              </div>\n            </div>\n\n\n\n            <div class=\"form-group\">\n              <div class=\"col-md-12 text-center\">\n                <button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button>\n              </div>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<script src=\"http://maps.google.com/maps/api/js?sensor=false\"></script>\n\n<script type=\"text/javascript\">\n  jQuery(function ($) {\n    function init_map1() {\n      var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);\n      var mapOptions = {\n        center: myLocation,\n        zoom: 16\n      };\n      var marker = new google.maps.Marker({\n        position: myLocation,\n        title: \"Property Location\"\n      });\n      var map = new google.maps.Map(document.getElementById(\"map1\"),\n        mapOptions);\n      marker.setMap(map);\n    }\n    init_map1();\n  });\n</script>\n\n<style>\n  .map {\n    min-width: 300px;\n    min-height: 300px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .header {\n    background-color: #F5F5F5;\n    color: #36A0FF;\n    height: 70px;\n    font-size: 27px;\n    padding: 10px;\n  }\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cultural/cultural.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cultural/cultural.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"cultural-container\">\n  <div class=\"flip-card\" style=\"background-color: #FFF056; color: black\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <div class=\"backgroundImage\">\n          <div>\n            <h1 style=\"color: #0074D9\">Dance</h1>\n            <hr />\n          </div>\n          <div>\n            <h5>SOLO</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>Group(5-10)</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>On-Spot</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"flip-card-back\">\n        <h1><i class=\"fas fa-user-tag\"></i>Contact US</h1>\n        <hr />\n        <h3>\n          S.Y.KUMAR\n        </h3>\n\n        <p>9966143857 </p>\n      </div>\n    </div>\n  </div>\n  <!-- Card 2 -->\n  <div class=\"flip-card\" style=\"background-color: teal; color: black\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <div class=\"backgroundImage\">\n          <div>\n            <h1 style=\"color: #FF851B\">\n              MUSIC\n            </h1>\n            <hr />\n          </div>\n          <div>\n            <h5>SOLO</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>Group(5-10)</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>On-Spot</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"flip-card-back\">\n        <h1><i class=\"fas fa-user-tag\"></i>Contact US</h1>\n        <hr />\n        <h3>\n          SRIKANTH\n        </h3>\n\n        <p>8121763179 </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Card 3 -->\n  <div class=\"flip-card\" style=\"background-color: #2ECC40; color: black\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <div class=\"backgroundImage\">\n          <div>\n            <h1 style=\"color: #FFF056\">\n              DRAMATICS\n            </h1>\n            <hr />\n          </div>\n          <div>\n            <h5>STAGE PLAY</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>STREET PLAY</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>MONO ACTING</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"flip-card-back\">\n        <h1><i class=\"fas fa-user-tag\"></i>Contact US</h1>\n        <hr />\n        <h3>\n          SURYA TEJA\n        </h3>\n\n        <p>7096145392</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"flip-card\" style=\"background-color: #FF851B; color: black\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <div>\n          <h2 style=\"color: #FF4136\">PHOTOGRAPHY</h2>\n          <hr />\n        </div>\n        <ul class=\"row\">\n          <li> SHORT FILM MAKING(12)</li>\n          <li> YUVTARANG DOCUMENTARY MAKING</li>\n          <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          <li> PHOTO STORY COMPETITION</li>\n          <li> CLICK IT(WITH IN THE COLLEGE PREMISES)</li>\n\n        </ul>\n      </div>\n      <div class=\"flip-card-back\">\n        <h1><i class=\"fas fa-user-tag\"></i>Contact US</h1>\n        <hr />\n        <h3>\n          SURYA\n        </h3>\n\n        <p>9010072493</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"flip-card \" style=\"background-color: #0074D9; color: black\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <div class=\"backgroundImage\">\n          <div>\n            <h1 style=\"color: #001f3f\">\n              FINE ARTS\n            </h1>\n            <hr />\n          </div>\n          <div>\n            <h5>RANGOLI(5)</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n          <div>\n            <h5>MEHANDI</h5>\n            <hr class=\"mr-5 ml-5\" style=\"margin-left: 25%;margin-right: 25%\" />\n          </div>\n\n        </div>\n      </div>\n      <div class=\"flip-card-back\">\n        <h1><i class=\"fas fa-user-tag\"></i>Contact US</h1>\n        <hr />\n        <h3>\n          NAVYA SRI\n        </h3>\n\n        <p>9133580330</p>\n      </div>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-primary navbar-fixed-top\" id=\"mNavbar\">\n\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display \n<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle collapsed btn\" data-toggle=\"collapse\"\n    data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>Menu\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Brand</a>\n</div>\n\n<div class=\"collapse navbar-collapse \" id=\"bs-example-navbar-collapse-1\">\n  <ul class=\"nav navbar-nav text-center\">\n\n    <li><a routerLink=\"/\">Home</a></li>\n    <li><a routerLink=\"/cultural\" routerLinkActive=\"active-link\">Cultural Events</a></li>\n    <li><a routerLink=\"/sports\" routerLinkActive=\"active-link\">Sports Events</a></li>\n    <li><a routerLink=\"/sponsers\" routerLinkActive=\"active-link\">Sponsers</a></li>\n    <li><a routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact us</a></li>\n  </ul>\n</div>\n</div>\n</nav> -->\n\n<!-- <h1 class=\"ml7\">\n  <span class=\"text-wrapper\">\n    <span class=\"letters\">Reality is broken</span>\n  </span>\n</h1> -->\n<div class=\"container\" style=\"margin-top: 10%;  overflow:hidden\">\n  <!-- <div style=\"text-align: center\" class=\"animated flip infinite\">\n    content\n  </div> -->\n\n  <!-- <div class=\"card\">\n    <h2 class=\"animated flip infinite\">Bharath </h2>\n  </div> -->\n\n  <div style=\"text-align: center; color: #BD3632;  font-size: 3rem\" class=\"animated bounceInDown \">\n    <h1 style=\"font-size: 10rem\"> <span style=\"color: #CB8C1D\" class=\"animated bounceInDown\">Yuv</span>Tarang</h1>\n  </div>\n  <div style=\"text-align: center; color: #DFE2DB;  font-size: 3rem\" class=\"animated flipInX \">\n    <h1 style=\"font-size: 2rem\"> A National Level Youth Festival</h1>\n  </div>\n\n  <div style=\"text-align: center; color: #E4DBBF;  font-size: 3rem\" class=\"animated flipInY infinite\">\n    <h1 style=\"font-size: 10rem\"> 2<span style=\"color: red\" class=\"animated flash infinite\">K</span>20</h1>\n  </div>\n\n  <div style=\"text-align: center; color: #FFF056;  font-size: 3rem\" class=\"animated heartBeat infinite\">\n    <h1 style=\"font-size: 2rem \" id=\"demo\">\n\n    </h1>\n  </div>\n  <!-- <div class=\"jumbotron\" style=\"margin-top: 10%;  overflow:hidden\"> -->\n\n  <!-- \n    <div style=\"text-align: center\" class=\"animated flip infinite\">\n      <h1> content</h1>\n    </div> -->\n  <!-- <h1 class=\"ml7\">\n      <div class=\"\">\n        <h2 class=\" animated rotateOut \">Bharath </h2>\n      </div>\n      <span class=\"text-wrapper\">\n        <span class=\"letters\">Reality is broken</span>\n      </span>\n    </h1> -->\n  <!-- <span style=\"white-space: nowrap;\">\n      <h1 class=\"ml8\">\n        <span class=\"letters-container\">\n          <span class=\"letters letters-left\">Hi</span>\n          <span class=\"letters bang\">!</span>\n        </span>\n        <span class=\"circle circle-white\"></span>\n        <span class=\"circle circle-dark\"></span>\n        <span class=\"circle circle-container\"><span class=\"circle circle-dark-dashed\"></span></span>\n      </h1>\n\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js\"></script>\n      <script>\n        anime.timeline({ loop: true })\n          .add({\n            targets: '.ml8 .circle-white',\n            scale: [0, 3],\n            opacity: [1, 0],\n            easing: \"easeInOutExpo\",\n            rotateZ: 360,\n            duration: 1100\n          }).add({\n            targets: '.ml8 .circle-container',\n            scale: [0, 1],\n            duration: 1100,\n            easing: \"easeInOutExpo\",\n            offset: '-=1000'\n          }).add({\n            targets: '.ml8 .circle-dark',\n            scale: [0, 1],\n            duration: 1100,\n            easing: \"easeOutExpo\",\n            offset: '-=600'\n          }).add({\n            targets: '.ml8 .letters-left',\n            scale: [0, 1],\n            duration: 1200,\n            offset: '-=550'\n          }).add({\n            targets: '.ml8 .bang',\n            scale: [0, 1],\n            rotateZ: [45, 15],\n            duration: 1200,\n            offset: '-=1000'\n          }).add({\n            targets: '.ml8',\n            opacity: 0,\n            duration: 1000,\n            easing: \"easeOutExpo\",\n            delay: 1400\n          });\n\n        anime({\n          targets: '.ml8 .circle-dark-dashed',\n          rotateZ: 360,\n          duration: 8000,\n          easing: \"linear\",\n          loop: true\n        });\n      </script>\n    </span>\n    <p>...</p>\n    <p><a class=\"btn btn-primary btn-lg animated flip infinite\" href=\"#\" role=\"button\">Learn more</a></p> -->\n</div>\n<!-- <ul class=\"animated fadeIn infinite\">\n    <li>content2</li>\n  </ul> -->\n\n<!-- </div> -->\n<!-- <script>\n  $(document).ready(function () {\n    var $navbar = $(\"#mNavbar\");\n\n    AdjustHeader(); // Incase the user loads the page from halfway down (or something);\n    $(window).scroll(function () {\n      AdjustHeader();\n    });\n\n    function AdjustHeader() {\n      if ($(window).scrollTop() > 60) {\n        if (!$navbar.hasClass(\"navbar-fixed-top\")) {\n          $navbar.addClass(\"navbar-fixed-top\");\n        }\n      } else {\n        $navbar.removeClass(\"navbar-fixed-top\");\n      }\n    }\n  });\n</script> -->\n<!-- <router-outlet></router-outlet> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsers/sponsers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsers/sponsers.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 7%\">\n\n  <div class=\"row\">\n    <div class=\"col-5 col-md-5 col-sm-5\" style=\"margin-top: 5%\">\n      <div>\n        <div class=\"header text-center\">\n          <h2 class=\"text-center\" style=\"color: white\">The Big Daddy</h2>\n        </div>\n      </div>\n      <img class=\"media-object\" src=\"../../assets/sponsor1.jpg\" alt=\"...\" style=\"width: 80%\">\n    </div>\n\n    <div class=\"col-1 col-md-1 col-sm-1 vl\"></div>\n\n    <div class=\"col-6 col-md-6 col-sm-6\" style=\"margin-top: 10%\">\n      <img class=\"media-object\" src=\"../../assets/sponsor2.jpg\" alt=\"...\" style=\"width: 80%\">\n      <div>\n        <div class=\"header text-center\">\n          <h2 class=\"text-center\" style=\"color: white\">The Big Daddy</h2>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sports/sports.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sports/sports.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"jumbotron text-center\" style=\"background-color: transparent!important\">\n  <h2><u>SPORTS EVENT CO-ORDINATERS</u></h2>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-6 col-md-6 text-center\">\n      <div>\n        <h4 class=\"text-center\">Contact</h4>\n        <h2 class=\"text-center\"><u><strong> KRISHNA KUMAR</strong></u></h2>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-6 col-md-6 text-center\">\n\n      <div>\n        <h4 class=\"text-center\">Mobile</h4>\n        <h2 class=\"text-center\"><u><strong>6300813031</strong></u></h2>\n      </div>\n    </div>\n  </div>\n\n</div> -->\n\n<div class=\"row\" style=\"margin-top: 5%\">\n  <div class=\"col-md-1 col-1 col-sm-1\">\n\n  </div>\n\n  <div class=\"col-md-5 col-sm-5 col-5 pl-5 animated bounce\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title text-center\"><strong>CRICKET</strong></h3>\n      </div>\n      <div class=\"panel-body\">\n\n        <div class=\"col-6 col-md-6 col-sm-6 \">\n          <div>\n            <h6 class=\"text-center\">Contact</h6>\n            <h4 class=\"text-center\">Y.HARSHA REDDY</h4>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-6 col-sm-6\">\n          <div>\n            <h6 class=\"text-center\">Mobile</h6>\n            <h4 class=\"text-center\">9032198936</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-5 col-sm-5 col-5 ml-5 animated rubberBand\">\n    <div class=\"panel panel-success\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title text-center\"><strong>THROWBAL</strong></h3>\n      </div>\n      <div class=\"panel-body\">\n\n        <div class=\"col-6 col-md-6 col-sm-6\">\n          <div>\n            <h6 class=\"text-center\">Contact</h6>\n            <h4 class=\"text-center\">S.HARI KRISHNA KUMAR</h4>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-6 col-sm-6\">\n          <div>\n            <h6 class=\"text-center\">Mobile</h6>\n            <h4 class=\"text-center\">6300813031</h4>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"row\" style=\"margin-left: 7px;margin-right: 5px\">\n\n\n    <div class=\"col-md-4 col-sm-4 col-4 animated fadeInDown \">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title text-center\"><strong>BASKETBAL</strong></h3>\n        </div>\n        <div class=\"panel-body\">\n\n          <div class=\"col-6 col-md-6 col-sm-6\">\n            <div>\n              <h6 class=\"text-center\">Contact</h6>\n              <h4 class=\"text-center\">Y.HARSHA REDDY</h4>\n            </div>\n          </div>\n          <div class=\"col-6 col-md-6 col-sm-6\">\n            <div>\n              <h6 class=\"text-center\">Mobile</h6>\n              <h4 class=\"text-center\">9032198936</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-4 col-4 animated fadeInRight\">\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title text-center\"><strong>VOLLEYBAL</strong></h3>\n        </div>\n        <div class=\"panel-body\">\n\n          <div class=\"col-6 col-md-6 col-sm-6\">\n            <div>\n              <h6 class=\"text-center\">Contact</h6>\n              <h4 class=\"text-center\">S.HARI KRISHNA</h4>\n            </div>\n          </div>\n          <div class=\"col-6 col-md-6 col-sm-6\">\n            <div>\n              <h6 class=\"text-center\">Mobile</h6>\n              <h4 class=\"text-center\">6300813031</h4>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 col-sm-4 col-4 animated flipInX\">\n      <div class=\"panel panel-danger\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title text-center\"><strong>KHO-KHO</strong></h3>\n        </div>\n        <div class=\"panel-body\">\n\n          <div class=\"col-6 col-md-6 col-sm-6\">\n            <div>\n              <h6 class=\"text-center\">Contact</h6>\n              <h4 class=\"text-center\">S.HARI KRISHNA</h4>\n            </div>\n          </div>\n          <div class=\"col-6 col-md-6 col-sm-6\">\n            <div>\n              <h6 class=\"text-center\">Mobile</h6>\n              <h4 class=\"text-center\">6300813031</h4>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-1 col-1 col-sm-1\">\n\n      </div>\n\n      <div class=\"col-md-5 col-sm-5 col-5 pl-5 animated flip\">\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title text-center\"><strong>TABLE TENNIS</strong></h3>\n          </div>\n          <div class=\"panel-body\">\n\n            <div class=\"col-6 col-md-6 col-sm-6\">\n              <div>\n                <h6 class=\"text-center\">Contact</h6>\n                <h4 class=\"text-center\">Y.HARSHA REDDY</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-6 col-sm-6\">\n              <div>\n                <h6 class=\"text-center\">Mobile</h6>\n                <h4 class=\"text-center\">9032198936</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-5 col-sm-5 col-5 ml-5\">\n        <div class=\"panel panel-success\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title text-center\"><strong>CHESS</strong></h3>\n          </div>\n          <div class=\"panel-body\">\n\n            <div class=\"col-6 col-md-6 col-sm-6\">\n              <div>\n                <h6 class=\"text-center\">Contact</h6>\n                <h4 class=\"text-center\">P.R.C.SARATH</h4>\n              </div>\n            </div>\n            <div class=\"col-6 col-md-6 col-sm-6\">\n              <div>\n                <h6 class=\"text-center\">Mobile</h6>\n                <h4 class=\"text-center\">7095980849</h4>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n\n      <div class=\"row\" style=\"margin-left: 7px;margin-right: 5px\">\n\n\n        <div class=\"col-md-4 col-sm-4 col-4 \">\n          <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title text-center\"><strong>BADMINTON</strong></h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div>\n                  <h6 class=\"text-center\">Categories</h6>\n                  <h4 class=\"text-center\">SINGLES,DOUBLES</h4>\n                </div>\n              </div>\n              <hr />\n              <div class=\"row\">\n                <div class=\"col-6 col-md-6 col-sm-6\">\n                  <div>\n                    <h6 class=\"text-center\">Contact</h6>\n                    <h4 class=\"text-center\">Y.HARSHA REDDY</h4>\n                  </div>\n                </div>\n                <div class=\"col-6 col-md-6 col-sm-6\">\n                  <div>\n                    <h6 class=\"text-center\">Mobile</h6>\n                    <h4 class=\"text-center\">9032198936</h4>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4 col-sm-4 col-4 \">\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title text-center\"><strong>CARROMS</strong></h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div>\n                  <h6 class=\"text-center\">Categories</h6>\n                  <h4 class=\"text-center\">SINGLES,DOUBLES</h4>\n                </div>\n              </div>\n              <hr />\n              <div class=\"row\">\n                <div class=\"col-6 col-md-6 col-sm-6\">\n                  <div>\n                    <h6 class=\"text-center\">Contact</h6>\n                    <h4 class=\"text-center\">S.HARI KRISHNA</h4>\n                  </div>\n                </div>\n                <div class=\"col-6 col-md-6 col-sm-6\">\n                  <div>\n                    <h6 class=\"text-center\">Mobile</h6>\n                    <h4 class=\"text-center\">6300813031</h4>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4 col-sm-4 col-4\">\n          <div class=\"panel panel-danger\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title text-center\"><strong>ATHLETICS</strong></h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div>\n                  <h6 class=\"text-center\">Categories</h6>\n                  <h5 class=\"text-center\"><strong>100M</strong>,<strong>200M</strong>,\n                    <strong>400M</strong>,<strong>4*100m RELAY</strong>,<strong>800M</strong>,\n                    <strong>1500M</strong>,<strong>3K</strong></h5>\n                </div>\n              </div>\n              <hr />\n              <div class=\"row\">\n                <div class=\"col-6 col-md-6 col-sm-6\">\n                  <div>\n                    <h6 class=\"text-center\">Contact</h6>\n                    <h4 class=\"text-center\">S.HARI KRISHNA</h4>\n                  </div>\n                </div>\n                <div class=\"col-6 col-md-6 col-sm-6\">\n                  <div>\n                    <h6 class=\"text-center\">Mobile</h6>\n                    <h4 class=\"text-center\">6300813031</h4>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cultural_cultural_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cultural/cultural.component */ "./src/app/cultural/cultural.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _sports_sports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sports/sports.component */ "./src/app/sports/sports.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");









const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
        // children: [
        //   { path: "cultural", pathMatch: "full", component: CulturalComponent },
        //   { path: "sports", pathMatch: "full", component: SportsComponent },
        //   { path: "sponsers", pathMatch: "full", component: SponsersComponent },
        //   { path: "contact", pathMatch: "full", component: ContactComponent }
        // ]
    },
    { path: "cultural", pathMatch: "full", component: _cultural_cultural_component__WEBPACK_IMPORTED_MODULE_5__["CulturalComponent"] },
    { path: "sports", pathMatch: "full", component: _sports_sports_component__WEBPACK_IMPORTED_MODULE_7__["SportsComponent"] },
    { path: "sponsers", pathMatch: "full", component: _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_6__["SponsersComponent"] },
    { path: "contact", pathMatch: "full", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\r\n  font-family: \"Poppins\", sans-serif;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #1f2532;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.btn {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzFmMjUzMjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'yuvatarang';
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    ngOnInit() {
        this.myStyle = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': -2,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'triangle',
                    stroke: {
                        width: 0,
                        color: '#fff'
                    },
                    polygon: {
                        nb_sides: 0
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#656d7e',
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 80,
                        duration: 2,
                        opacity: 2,
                        speed: 2
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        };
    }
    ;
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cultural_cultural_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cultural/cultural.component */ "./src/app/cultural/cultural.component.ts");
/* harmony import */ var _sports_sports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports/sports.component */ "./src/app/sports/sports.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _cultural_cultural_component__WEBPACK_IMPORTED_MODULE_5__["CulturalComponent"],
            _sports_sports_component__WEBPACK_IMPORTED_MODULE_6__["SportsComponent"],
            _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_7__["SponsersComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            angular_particle__WEBPACK_IMPORTED_MODULE_11__["ParticlesModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/cultural/cultural.component.css":
/*!*************************************************!*\
  !*** ./src/app/cultural/cultural.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cultural-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  color: #fff;\r\n  position: relative;\r\n  justify-content: center;\r\n  margin: 50px auto;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n}\r\n\r\n.flip-card {\r\n  margin: 10px;\r\n  background-color: transparent;\r\n  width: 300px;\r\n  height: 300px;\r\n  perspective: 1000px;\r\n  border-top-right-radius: 25px;\r\n}\r\n\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.6s;\r\n  transform-style: preserve-3d;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-top-right-radius: 25px;\r\n}\r\n\r\n.flip-card:hover .flip-card-inner {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.flip-card-front,\r\n.flip-card-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  border-top-right-radius: 75px;\r\n  border-bottom-left-radius: 75px;\r\n}\r\n\r\n.flip-card-front {\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n\r\n.flip-card-front1 {\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n\r\n/* .backgroundImage1{\r\n  opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n} */\r\n\r\n.flip-card-back {\r\n  background-color: #2980b9;\r\n  color: white;\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VsdHVyYWwvY3VsdHVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBQ0E7OztHQUdHOztBQUVIO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jdWx0dXJhbC9jdWx0dXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2N1bHR1cmFsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZsaXAtY2FyZCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250LFxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDc1cHg7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5mbGlwLWNhcmQtZnJvbnQxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4vKiAuYmFja2dyb3VuZEltYWdlMXtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xyXG59ICovXHJcblxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/cultural/cultural.component.ts":
/*!************************************************!*\
  !*** ./src/app/cultural/cultural.component.ts ***!
  \************************************************/
/*! exports provided: CulturalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturalComponent", function() { return CulturalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CulturalComponent = class CulturalComponent {
    constructor() { }
    ngOnInit() {
    }
};
CulturalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cultural',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cultural.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cultural/cultural.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cultural.component.css */ "./src/app/cultural/cultural.component.css")).default]
    })
], CulturalComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ml7 {\r\n  position: relative;\r\n  font-weight: 900;\r\n  font-size: 3.7em;\r\n}\r\n.ml7 .text-wrapper {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding-top: 0.2em;\r\n  padding-right: 0.05em;\r\n  padding-bottom: 0.1em;\r\n  overflow: hidden;\r\n}\r\n.ml7 .letter {\r\n  transform-origin: 0 100%;\r\n  display: inline-block;\r\n  line-height: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWw3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDMuN2VtO1xyXG59XHJcbi5tbDcgLnRleHQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogMC4yZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC4wNWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjFlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tbDcgLmxldHRlciB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        var countDownDate = new Date("Jan 11, 2020 00:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/sponsers/sponsers.component.css":
/*!*************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vl {\r\n  border-left: 6px solid white;\r\n  margin-top: 10%;\r\n  height: 50vh;\r\n  padding-bottom: 15%;\r\n}\r\n\r\nh1.ml8 {\r\n  font-weight: 900;\r\n  font-size: 4.5em;\r\n  color: #fff;\r\n  width: 3em;\r\n  height: 3em;\r\n}\r\n\r\n.ml8 .letters-container {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  height: 1em;\r\n}\r\n\r\n.ml8 .letters {\r\n  position: relative;\r\n  z-index: 2;\r\n  display: inline-block;\r\n  line-height: 0.7em;\r\n  right: -0.12em;\r\n  top: -0.2em;\r\n}\r\n\r\n.ml8 .bang {\r\n  font-size: 1.4em;\r\n  top: auto;\r\n  left: -0.06em;\r\n}\r\n\r\n.ml8 .circle {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.ml8 .circle-white {\r\n  width: 3em;\r\n  height: 3em;\r\n  border: 2px dashed white;\r\n  border-radius: 2em;\r\n}\r\n\r\n.ml8 .circle-dark {\r\n  width: 2.2em;\r\n  height: 2.2em;\r\n  background-color: #4f7b86;\r\n  border-radius: 3em;\r\n  z-index: 1;\r\n}\r\n\r\n.ml8 .circle-dark-dashed {\r\n  border-radius: 2.4em;\r\n  background-color: transparent;\r\n  border: 2px dashed #4f7b86;\r\n  width: 2.3em;\r\n  height: 2.3em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNlcnMvc3BvbnNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zZXJzL3Nwb25zZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmwge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xyXG59XHJcblxyXG5oMS5tbDgge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiA0LjVlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogM2VtO1xyXG4gIGhlaWdodDogM2VtO1xyXG59XHJcblxyXG4ubWw4IC5sZXR0ZXJzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5tbDggLmxldHRlcnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogMC43ZW07XHJcbiAgcmlnaHQ6IC0wLjEyZW07XHJcbiAgdG9wOiAtMC4yZW07XHJcbn1cclxuXHJcbi5tbDggLmJhbmcge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgdG9wOiBhdXRvO1xyXG4gIGxlZnQ6IC0wLjA2ZW07XHJcbn1cclxuXHJcbi5tbDggLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5tbDggLmNpcmNsZS13aGl0ZSB7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG59XHJcblxyXG4ubWw4IC5jaXJjbGUtZGFyayB7XHJcbiAgd2lkdGg6IDIuMmVtO1xyXG4gIGhlaWdodDogMi4yZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmN2I4NjtcclxuICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1sOCAuY2lyY2xlLWRhcmstZGFzaGVkIHtcclxuICBib3JkZXItcmFkaXVzOiAyLjRlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgIzRmN2I4NjtcclxuICB3aWR0aDogMi4zZW07XHJcbiAgaGVpZ2h0OiAyLjNlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/sponsers/sponsers.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.ts ***!
  \************************************************/
/*! exports provided: SponsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsersComponent", function() { return SponsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SponsersComponent = class SponsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
SponsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sponsers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sponsers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsers/sponsers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sponsers.component.css */ "./src/app/sponsers/sponsers.component.css")).default]
    })
], SponsersComponent);



/***/ }),

/***/ "./src/app/sports/sports.component.css":
/*!*********************************************!*\
  !*** ./src/app/sports/sports.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0cy9zcG9ydHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/sports/sports.component.ts":
/*!********************************************!*\
  !*** ./src/app/sports/sports.component.ts ***!
  \********************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SportsComponent = class SportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sports/sports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sports.component.css */ "./src/app/sports/sports.component.css")).default]
    })
], SportsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects-2019\December\yuvatarang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map