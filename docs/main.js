(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-section/about-section.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/about/about-section/about-section.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n  width: 100%;\n  margin-top: 40px;\n}\n"

/***/ }),

/***/ "./src/app/about/about-section/about-section.component.html":
/*!******************************************************************!*\
  !*** ./src/app/about/about-section/about-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-section\" [ngStyle]=\"customStyles\">\n  <app-section-header\n    [title]=\"title\"\n    [description]=\"description\"\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [myRole]=\"myRole\"\n  >\n  </app-section-header>\n  <a [routerLink]=\"route\">\n    <img src=\"{{ imgSrc }}\" alt=\"{{ imgAlt }}\" class=\"image\">\n  </a>\n</section>\n"

/***/ }),

/***/ "./src/app/about/about-section/about-section.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/about/about-section/about-section.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSectionComponent", function() { return AboutSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutSectionComponent = /** @class */ (function () {
    function AboutSectionComponent() {
    }
    AboutSectionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "startDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "endDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "myRole", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "imgSrc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "imgAlt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AboutSectionComponent.prototype, "route", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AboutSectionComponent.prototype, "customStyles", void 0);
    AboutSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-section',
            template: __webpack_require__(/*! ./about-section.component.html */ "./src/app/about/about-section/about-section.component.html"),
            styles: [__webpack_require__(/*! ./about-section.component.css */ "./src/app/about/about-section/about-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutSectionComponent);
    return AboutSectionComponent;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*All Screens*/\n\n#aboutContainer {\n\twidth: 100%;\n\tposition: relative;\n\tbox-sizing: border-box;\n}\n\n.h1 {\n\tmargin-top: 0;\n}\n\n.article {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\trow-gap: 64px;\n\tflex-wrap: wrap;\n}\n\n.about-section {\n\tmargin-top: 128px;\n}\n\n.article-column {\n\twidth: calc(50% - 64px);\n\tmin-width: 340px;\n\tflex-grow: 1;\n}\n\n.about-img {\n\tmax-width: 200px;\n}\n\n#intro-paragraph {\n\tfont-family: 'IBM Plex Mono';\n\tfont-size: 24px;\n\tline-height: 32px;\n}\n\n.link {\n\tfont-family: 'IBM Plex Mono';\n\tfont-size: 20px;\n\tline-height: 24px;\n\tcolor: #11C7A9;\n}\n\n.section {\n\tdisplay: block;\n}\n\n#contact-section {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-top: 64px;\n}\n\n#contact-heading {\n\tmargin-top: 0px;\n}\n\n.social-link {\n\tmargin-left: 16px;\n}\n\n.social-logo {\n\twidth: 40px;\n}\n\n/*Small screens only*/\n\n@media screen and (max-width: 1000px) {\n\t#aboutContainer {\n\t\tleft: 0px;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutContainer\">\n  <!-- Intro Paragraph -->\n  <article class=\"article\">\n    <div class=\"article-column\">\n      <h1 class=\"h1\">\n        Ryan\n        <br />\n        Emberling\n      </h1>\n      <img\n        src=\"../../assets/ryan_emberling_illustrated_portrait.png\"\n        alt=\"Illustrated portrait of Ryan Emberling, bearded, smiling, with wavy brown hair\"\n        class=\"about-img\"\n      />\n    </div>\n    <div id=\"intro-paragraph\" class=\"article-column\">\n      <p>I lead teams, make software, and mentor technical professionals.</p>\n      <app-highlighted-paragraph [text]=\"introText\"></app-highlighted-paragraph>\n    </div>\n  </article>\n\n  <app-about-section\n    title=\"ASSISTments\"\n    description=\"An ed tech nonprofit that empowers math educators with data-driven formative assessment tools. Provides students a level of support tailored to their needs, and teachers with interactive data visualizations for quickly analyzing student performance at the individual and class levels.\"\n    startDate=\"2018\"\n    endDate=\"Present\"\n    myRole=\"Director of Engineering\"\n    imgSrc=\"../../assets/about/ASSISTments Workbench Drag and Drop.png\"\n    imgAlt=\"Image of the ASSISTments Student experience, showing a math problem where students must drag and drop numbers to identify which numbers are even and odd.\"\n    route=\"/portfolio/assistments\"\n    [customStyles]=\"childStyles\"\n  >\n  </app-about-section>\n\n  <app-about-section\n    title=\"cuttle.cards\"\n    description=\"An online platform empowering people to play the oldest known battle card game online. All the thrills of games like Magic, Yugioh, or Hearthstone, played for free, with a standard deck of cards.\"\n    startDate=\"2017\"\n    endDate=\"Present\"\n    myRole=\"Creator & Lead Maintainer\"\n    imgSrc=\"../../assets/about/Opponent May Counter.png\"\n    imgAlt=\"Image of the card game Cuttle played online, showing a stack of cards with the words 'Opponent May Counter'\"\n    route=\"/portfolio/cuttle\"\n    [customStyles]=\"childStyles\"\n  >\n  </app-about-section>\n\n  <!-- Contact -->\n  <section id=\"contact-section\">\n    <div>\n      <h2 id=\"contact-heading\">Contact</h2>\n      <h3>Ryan Emberling</h3>\n      <a href=\"mailto: ryan.emberling@gmail.com\" class=\"link\" id=\"email\">\n        ryan.emberling@gmail.com\n      </a>\n    </div>\n    <div>\n      <a href=\"https://github.com/itsalaidbacklife\" class=\"social-link\" target=\"_blank\">\n        <img src=\"../../assets/about/GitHub.svg\" alt=\"Logo for github with link to Ryan's github profile\" class=\"social-logo\">\n      </a>\n      <a href=\"https://www.linkedin.com/in/ryan-emberling/\" class=\"social-link\" target=\"_blank\">\n        <img src=\"../../assets/about/LinkedIn.svg\" alt=\"Logo for LinkedIn with link to Ryan's LinkedIn profile\" class=\"social-logo\">\n      </a>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.introText = [
            { str: "I'm Currently the Director of Engineering at the" },
            { str: "ASSISTments Foundation,", route: '/portfolio/assistments' },
            { str: " and I'm the creator and lead maintainer of the open source card battler" },
            { str: "cuttle.cards", route: '/portfolio/cuttle' },
        ];
    }
    Object.defineProperty(AboutComponent.prototype, "smallScreen", {
        get: function () {
            return window.innerWidth < 600;
        },
        enumerable: true,
        configurable: true
    });
    AboutComponent.prototype.ngOnInit = function () {
        this.childStyles = { 'margin-top': '128px' };
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/highlighted-paragraph/highlighted-paragraph.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/about/highlighted-paragraph/highlighted-paragraph.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlighted {\n    color: #11C7A9;\n}"

/***/ }),

/***/ "./src/app/about/highlighted-paragraph/highlighted-paragraph.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/about/highlighted-paragraph/highlighted-paragraph.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <ng-container *ngFor=\"let chunk of text\">\n    <a *ngIf=\"chunk.route\" [routerLink]=\"chunk.route\" class=\"highlighted\">\n      {{ chunk.str }}\n    </a>\n    <a *ngIf=\"chunk.url\" [href]=\"chunk.url\" target=\"_blank\" class=\"highlighted\">\n      {{ chunk.str }}\n    </a>\n    <span *ngIf=\"!chunk.route && !chunk.url\">\n      {{ chunk.str }}\n    </span>\n  </ng-container>\n</p>\n"

/***/ }),

/***/ "./src/app/about/highlighted-paragraph/highlighted-paragraph.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/about/highlighted-paragraph/highlighted-paragraph.component.ts ***!
  \********************************************************************************/
/*! exports provided: HighlightedParagraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedParagraphComponent", function() { return HighlightedParagraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightedParagraphComponent = /** @class */ (function () {
    function HighlightedParagraphComponent() {
    }
    HighlightedParagraphComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HighlightedParagraphComponent.prototype, "text", void 0);
    HighlightedParagraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-highlighted-paragraph',
            template: __webpack_require__(/*! ./highlighted-paragraph.component.html */ "./src/app/about/highlighted-paragraph/highlighted-paragraph.component.html"),
            styles: [__webpack_require__(/*! ./highlighted-paragraph.component.css */ "./src/app/about/highlighted-paragraph/highlighted-paragraph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HighlightedParagraphComponent);
    return HighlightedParagraphComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_portfolio_pages_cuttle_overview_cuttle_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component */ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.ts");
/* harmony import */ var _portfolio_portfolio_pages_assistments_assistments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio_pages/assistments/assistments.component */ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], data: { state: 'about' } },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"], data: { state: 'portfolio' }, children: [
            { path: '', redirectTo: 'assistments', pathMatch: 'full' },
            { path: 'assistments', component: _portfolio_portfolio_pages_assistments_assistments_component__WEBPACK_IMPORTED_MODULE_5__["AssistmentsComponent"] },
            { path: 'cuttle', component: _portfolio_portfolio_pages_cuttle_overview_cuttle_overview_component__WEBPACK_IMPORTED_MODULE_4__["CuttleOverviewComponent"] },
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">\n\t<app-navbar></app-navbar>\n\t<div [@routerTransition]=\"getState(o)\" id=\"router-wrapper\">\n\t\t<router-outlet #o=\"outlet\"></router-outlet>\n\t</div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'emberling.io';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]],
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_portfolio_pages_cuttle_overview_cuttle_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component */ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.ts");
/* harmony import */ var _about_highlighted_paragraph_highlighted_paragraph_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/highlighted-paragraph/highlighted-paragraph.component */ "./src/app/about/highlighted-paragraph/highlighted-paragraph.component.ts");
/* harmony import */ var _about_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about-section/about-section.component */ "./src/app/about/about-section/about-section.component.ts");
/* harmony import */ var _portfolio_portfolio_nav_portfolio_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio-nav/portfolio-nav.component */ "./src/app/portfolio/portfolio-nav/portfolio-nav.component.ts");
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./section-header/section-header.component */ "./src/app/section-header/section-header.component.ts");
/* harmony import */ var _portfolio_portfolio_pages_assistments_assistments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio/portfolio_pages/assistments/assistments.component */ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.ts");
/* harmony import */ var _picture_and_explanation_picture_and_explanation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./picture-and-explanation/picture-and-explanation.component */ "./src/app/picture-and-explanation/picture-and-explanation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Components











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _portfolio_portfolio_pages_cuttle_overview_cuttle_overview_component__WEBPACK_IMPORTED_MODULE_9__["CuttleOverviewComponent"],
                _about_highlighted_paragraph_highlighted_paragraph_component__WEBPACK_IMPORTED_MODULE_10__["HighlightedParagraphComponent"],
                _about_about_section_about_section_component__WEBPACK_IMPORTED_MODULE_11__["AboutSectionComponent"],
                _portfolio_portfolio_nav_portfolio_nav_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioNavComponent"],
                _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_13__["SectionHeaderComponent"],
                _portfolio_portfolio_pages_assistments_assistments_component__WEBPACK_IMPORTED_MODULE_14__["AssistmentsComponent"],
                _picture_and_explanation_picture_and_explanation_component__WEBPACK_IMPORTED_MODULE_15__["PictureAndExplanationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#top-nav {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 48px 0px;\n}\n\n#nav-logo {\n\tmargin: 0px;\n}\n\n#nav-links {\n\tmargin-right: 32px;\n}\n\n.nav-link {\n\tposition: relative;\n\tpadding: 5px 10px;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tfont-weight: bold;\n\tmargin-left: 8px;\n\ttransition: color .35s ease-in;\n  }\n\n.nav-link::after {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\tbottom: 0;\n\twidth: 0px;\n\theight: 2px; /* Height of the border */\n\tbackground-color: #11C7A9; /* Color of the border */\n\ttransition: width 0.5s ease; /* Smooth transition of width */\n}\n\n.nav-link.underline-from-left::after {\n\tleft: 0;\n}\n\n.nav-link.underline-from-right::after {\n\tright: 0\n}\n\na:visited, a:link {\n\tcolor: #FFFFFF;\n}\n\na:hover {\n\tcolor: #11C7A9 !important;\n}\n\n.activeLink::after {\n\twidth: 100%;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"top-nav\">\n\t<h3 id=\"nav-logo\" *ngIf=\"screenIsNotSmall\">Ryan Emberling</h3>\n\t<span id=\"nav-links\">\n\t\t<a routerLink=\"/about\" routerLinkActive=\"activeLink\" class=\"nav-link underline-from-right\">About</a>\n\t\t<a routerLink=\"/portfolio\" routerLinkActive=\"activeLink\" class=\"nav-link underline-from-left\">Portfolio</a>\n\t\t<a href=\"/assets/Emberling Resume.pdf\" target=\"_blank\" class=\"nav-link\">Resume</a>\n\t</span>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    Object.defineProperty(NavbarComponent.prototype, "screenWidth", {
        get: function () {
            return window.innerWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "screenIsNotSmall", {
        get: function () {
            return this.screenWidth >= 600;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/picture-and-explanation/picture-and-explanation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/picture-and-explanation/picture-and-explanation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pictureAndExplanation {\n\tdisplay: block;\n\tposition: relative;\n\tmargin-top: 64px;\n}\n\n/*Title*/\n\n.rowWrapper {\n\tdisplay: flex;\n\tposition: relative;\n\twidth: 100%;\n\tflex-direction: row;\n\talign-items: start;\n\tjustify-content: space-between;\n\trow-gap: 64px;\n}\n\n.rowWrapper .title {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\ttext-align: center;\n\t\tmargin-top: 0;\n\t\torder: 1;\n\t}\n\n.rowWrapper span {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: 50%;\n\t\torder: 2;\n\t}\n\n.rowWrapper p {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: 35%;\n\t\torder: 1;\n\t}\n\n/*Middle Row*/\n\n.imgWrapper {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: calc(50% - 64px);\n\t\torder: 1;\n\t}\n\nimg {\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tborder-radius: 8px;\n\t\t}\n\n.imageLink {\n\t\t\tdisplay: inline-block;\n\t\t\tposition: absolute;\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tmargin: 0px;\n\t\t\tleft: 0%;\n\t\t\tbottom: 0%;\n\t\t\tborder-radius: 8px;\n\t\t\tpadding: 0px;\n\t\t\topacity: .85;\n\t\t}\n\n.textWrapper {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: calc(50% - 64px);\n\t\torder: 2;\t\n\t}\n\n.rowWrapper .textWrapper .paragraphText {\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\tfont-size: 1.15em;\n\t\t\twidth: 100%;\n\t\t}\n\n/*Footer*/\n\n.footer {\n\tmargin-bottom: 2%;\n}\n\n.caption {\n\t\ttext-align: center;\n\t}\n\n/*Small screens only*/\n\n@media screen and (max-width: 1000px) {\n\t.rowWrapper {\n\t\tflex-direction: column;\n\t\trow-gap: 16px;\n\t}\n\t.imgWrapper, .textWrapper {\n\t\tdisplay: block !important;\n\t\twidth: 100%;\n\t}\n\t.titleWrapper, .footer {\n\t\t/*width: 100%;*/\n\t\ttext-align: center !important;\n\t}\n\th3 {\n\t\ttext-align: center;\n\t}\n\tspan {\n\t\tdisplay: none !important;\n\t}\n\t.smallScreenFooter {\n\t\ttext-align: left;\n\t\twidth: 60% !important;\n\t\tmargin-left: 20%;\n\t}\n/*\t.smallScreenFooter a {\n\t\tmargin-left: -10px;\n\t}*/\n}"

/***/ }),

/***/ "./src/app/picture-and-explanation/picture-and-explanation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/picture-and-explanation/picture-and-explanation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pictureAndExplanation\">\n\t<div class=\"rowWrapper\">\n\t\t<!-- Optional image on the left -->\n\t\t<div class=\"imgWrapper\" *ngIf=\"img\">\n\t\t\t<h3 *ngIf=\"title && screenIsSmall\" class=\"title\">{{title}}</h3>\n\t\t\t<img src=\"./assets/{{img}}.PNG\">\n\t\t\t<a href=\"{{link}}\" target=\"_blank\" *ngIf=\"link\" class=\"imageLink\"></a>\n\t\t</div>\n\n\t\t<!-- Optional text on the right (up to 2 paragraphs) -->\n\t\t<div class=\"textWrapper\" *ngIf=\"text\">\n\t\t\t<h3 *ngIf=\"title && !screenIsSmall\" class=\"title\">{{title}}</h3>\n\t\t\t<app-highlighted-paragraph class=\"paragraphText\" [text]=\"paragraph1\"></app-highlighted-paragraph>\n\t\t\t<app-highlighted-paragraph *ngIf=\"paragraph2\" class=\"paragraphText\" [text]=\"paragraph2\"></app-highlighted-paragraph>\n\t\t</div>\n\t</div>\n\t<!-- Large screen footer -->\n\t<div *ngIf=\"!screenIsSmall\" class=\"rowWrapper footer\">\n\t\t<p *ngIf=\"caption\" class=\"caption\">{{caption}}</p>\n\t\t<span></span>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/picture-and-explanation/picture-and-explanation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/picture-and-explanation/picture-and-explanation.component.ts ***!
  \******************************************************************************/
/*! exports provided: PictureAndExplanationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureAndExplanationComponent", function() { return PictureAndExplanationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureAndExplanationComponent = /** @class */ (function () {
    function PictureAndExplanationComponent() {
    }
    Object.defineProperty(PictureAndExplanationComponent.prototype, "footerVisibility", {
        get: function () {
            if (window.innerWidth > 1000) {
                return 'visible';
            }
            else {
                return 'hidden';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureAndExplanationComponent.prototype, "screenIsSmall", {
        get: function () {
            if (window.innerWidth < 1000) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureAndExplanationComponent.prototype, "paragraph1", {
        get: function () {
            if (typeof this.text === 'string') {
                return [{ str: this.text }];
            }
            return this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PictureAndExplanationComponent.prototype, "paragraph2", {
        get: function () {
            if (!this.text2) {
                return undefined;
            }
            if (typeof this.text2 === 'string') {
                return [{ str: this.text2 }];
            }
            return this.text2;
        },
        enumerable: true,
        configurable: true
    });
    PictureAndExplanationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureAndExplanationComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureAndExplanationComponent.prototype, "img", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureAndExplanationComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureAndExplanationComponent.prototype, "text2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureAndExplanationComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureAndExplanationComponent.prototype, "caption", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureAndExplanationComponent.prototype, "smallScreenCaption", void 0);
    PictureAndExplanationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picture-and-explanation',
            template: __webpack_require__(/*! ./picture-and-explanation.component.html */ "./src/app/picture-and-explanation/picture-and-explanation.component.html"),
            styles: [__webpack_require__(/*! ./picture-and-explanation.component.css */ "./src/app/picture-and-explanation/picture-and-explanation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PictureAndExplanationComponent);
    return PictureAndExplanationComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio-nav/portfolio-nav.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-nav/portfolio-nav.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portfolio-nav {\n    display: inline-block;\n    position: relative;\n    margin: 24px 0px;\n    padding: 12px;\n    background-color: #27262D;\n    border-radius: 16px;\n}\n\n.portfolio-nav-link {\n    position: relative;\n    color: #FFFFFF;\n    padding: 8px;\n    border-radius: 8px;\n    z-index: 1;\n    transition: color .35s ease-in;\n}\n\n.portfolio-nav-link:not(.portfolio-nav-link.active-link):hover {\n    color: #11C7A9;\n}\n\n.portfolio-nav-link::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border-radius: 8px;\n    background-color: #27262D;\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    z-index: -1;\n    transition: -webkit-transform .5s ease-in-out;\n    transition: transform .5s ease-in-out;\n    transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;\n}\n\n.portfolio-nav-link.last::after {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.portfolio-nav-link.active-link {\n    color: #000000;\n}\n\n.portfolio-nav-link.active-link::after {\n    background-color: #11C7A9;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n}\n\n.portfolio-nav-link.last {\n    margin-left: 8px;\n}"

/***/ }),

/***/ "./src/app/portfolio/portfolio-nav/portfolio-nav.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-nav/portfolio-nav.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"portfolio-nav\">\n  <a *ngFor=\"let link of links; let i = index\" routerLink=\"{{link.route}}\" class=\"portfolio-nav-link text-md\" [ngClass]=\"i ? 'last' : 'first'\" routerLinkActive=\"active-link\">\n    {{ link.displayText }}\n  </a>\n</nav>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio-nav/portfolio-nav.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-nav/portfolio-nav.component.ts ***!
  \********************************************************************/
/*! exports provided: PortfolioNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioNavComponent", function() { return PortfolioNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioNavComponent = /** @class */ (function () {
    function PortfolioNavComponent() {
    }
    PortfolioNavComponent.prototype.ngOnInit = function () {
        this.links = [
            { route: 'assistments', displayText: 'ASSISTments' },
            { route: 'cuttle', displayText: 'cuttle.cards' },
        ];
    };
    PortfolioNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-nav',
            template: __webpack_require__(/*! ./portfolio-nav.component.html */ "./src/app/portfolio/portfolio-nav/portfolio-nav.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-nav.component.css */ "./src/app/portfolio/portfolio-nav/portfolio-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioNavComponent);
    return PortfolioNavComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portfolioContainer {\n\tdisplay: block;\n\tposition: relative;\n}\n.portfolioRow {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 100%;\n}\napp-portfolio-entry {\n\theight: 100%;\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 35%;\n\t/*height: 20%;*/\n\tmargin-left: 10%;\n\t/*border: 3px solid black;*/\n\tpadding: 5px;\n\tvertical-align: top;\n}\n@media screen and (max-width: 600px) {\n\tapp-portfolio-entry {\n\t\tdisplay: block;\n\t\twidth: 80%;\n\t\tleft: 10%;\n\t\tmargin-left: 0%;\n\t}\n}"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolioContainer\">\n\t<app-portfolio-nav></app-portfolio-nav>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/portfolio/portfolio_pages/assistments/assistments.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/portfolio/portfolio_pages/assistments/assistments.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"assistmentsContainer\">\n  <app-section-header\n  title=\"ASSISTments\"\n  startDate=\"2018\"\n  endDate=\"Present\"\n  myRole=\"Director of Engineering\"\n  description=\"The ASSISTments Foundation is an ed tech nonprofit that empowers math educators with data-driven formative assessment tools so they can best help the students who need it most.\"\n  >\n  </app-section-header>\n\n  <app-picture-and-explanation\n  title=\"E-TRIALS\"\n  img=\"portfolio/assistments/E-TRIALS\"\n  [text]=\"[{str: 'E-TRIALS', url: 'https://etrials.assistments.org'}, {str: 'is a revolutionary educational research platform that is democratizing learning science by enabling researchers to conduct large scale randomized controlled trials at no cost and without needing to write code. It is currently powering over 15 studies with more than 500 participants each. It\\'s built using Vue, Vuetify, Java Spring, and Maven.'}]\"\n  text2=\"My Role: architected the api and database schema, designed the frontend's component and data architecture, initialized the server and client codebases, and lead a team of 5 in full stack development of the MVP. Currently leading the ongoing development as new experimental paradigms are added to the system.\"\n  link=\"https://etrials.assistments.org\"\n  >\n  </app-picture-and-explanation>\n\n  <app-picture-and-explanation\n    title=\"Teacher Experience\"\n    img=\"portfolio/assistments/Teacher Experience - Report\"\n    text=\"Our teacher experience makes it easy to find and curate math work to assign, and to quickly evaluate assessment data to drive lesson planning and class time by answering questions like 'which students are struggling most and on what material?'\"\n    text2=\"My Role: Created the Vuex store architecture (flux pattern), built several pages and key features of the MVP (e.g. search, viewing users' curated content, interactive student data report), and lead the team's agile process (task definition, refinement, assignment, oversight, and troubleshooting). Currently managing ongoing feature development as we improve the teacher experience.\"\n    link=\"https://app.assistments.org\"\n  >\n  </app-picture-and-explanation>\n\n  <app-picture-and-explanation\n  title=\"Student Experience\"\n  img=\"portfolio/assistments/Student Workbench - Multi Cloze\"\n  text=\"Our Student Experience provides students the opportunity to practice their skills in a low stakes formative environment, supported by adaptive interventions such as individualized hints, and “redo” problems to retry the problems students have difficulty with.'\"\n  text2=\"My Role: Designed integration and e2e testing frameworks with Cypress running in github actions and AWS CodePipeline, created stateful and responsive navigation, created integration with the experiment system powered by E-TRIALS, and managed the process of defining, refining, and assigning work throughout development of the MPV. Currently managing ongoing feature development as we continue to improve the student experience.\"\n  link=\"https://student.assistments.org/preview/problemSet/PSBE34W\"\n>\n</app-picture-and-explanation>\n</article>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/portfolio/portfolio_pages/assistments/assistments.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssistmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistmentsComponent", function() { return AssistmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssistmentsComponent = /** @class */ (function () {
    function AssistmentsComponent() {
    }
    AssistmentsComponent.prototype.ngOnInit = function () {
    };
    AssistmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assistments',
            template: __webpack_require__(/*! ./assistments.component.html */ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.html"),
            styles: [__webpack_require__(/*! ./assistments.component.css */ "./src/app/portfolio/portfolio_pages/assistments/assistments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssistmentsComponent);
    return AssistmentsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, h3, #summary {\n\ttext-align: center;\n}\n\nh2 {\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n#projectRow {\n\tposition: relative;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\t/*align-items: center;*/\n\tjustify-content: space-evenly;\n}\n\n.projectEntry {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 30%;\n}\n\n#entry0 {\n\torder: 0;\n}\n\n#entry1 {\n\torder: 1;\n}\n\n#entry2 {\n\torder: 2;\n}\n\nimg\t{\n\tdisplay: block;\n\tposition: relative;\n\twidth: 100%;\n\tborder-radius: 3%;\n\tbox-sizing: border-box;\n\tz-index: -10;\n}\n\na {\n\tdisplay: block;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0px;\n\tpadding: 0px;\n\tborder-radius: 3%;\n\ttop: 0;\n\tbox-sizing: border-box;\n\topacity: .8;\n}\n\n.imgWrapper {\n\tdisplay: inline-block;\n\tposition: relative;\n\t/*height: 60%;*/\n}"

/***/ }),

/***/ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"cuttleContainer\">\n\t<app-section-header\n\t\ttitle=\"cuttle.cards\"\n\t\tstartDate=\"2017\"\n\t\tendDate=\"Present\"\n\t\tmyRole=\"Creator and Lead Maintainer\"\n\t\tdescription=\"Cuttle is the oldest battle card game, and it’s played with a regular 52-card deck. I built cuttle.cards to empower people to play my favorite game online, and to create a space for technical professionals to develop their skills by contributing to an open source project that’s actively used by real people.\"\n\t>\n\t</app-section-header>\n\n\t<app-picture-and-explanation\n\t\ttitle=\"Architecture\"\n\t\timg=\"portfolio/cuttle/three-dialog\"\n\t\t[text]=\"[{str: 'cuttle.cards', url: 'https://cuttle.cards'}, {str: 'is an open source, real-time, full stack web app, built with a nodejs backend using the sailsjs framework, a Vue 3 SPA using the Vuetify component library, and a postgresql database. It’s tested end to end with cypress, and unit tested with vitest. You can check out the code'}, {str: 'here. ', url: 'https://github.com/cuttle-cards/cuttle'}, {str: 'It has all the essential bells and whistles of full stack web development at a Goldilocks level of complexity that is ideal for learning how to make robust web apps in an authentic environment with a real user base.'}]\"\n\t\tlink=\"https://cuttle.cards/rules\"\n\t>\n\t</app-picture-and-explanation>\n\n\t<app-picture-and-explanation\n\t\ttitle=\"Learn By Doing\"\n\t\timg=\"portfolio/cuttle/Cuttle with Cypress\"\n\t\t[text]=\"[{str: 'Since its inception, I have used my work on'}, {str: 'cuttle.cards', url: 'https://cuttle.cards'}, {str: 'to drive targeted skill development that aligns with my career goals. As the project matured and my own trajectory brought me to leading teams of software engineers, I’ve made it my mission to use Cuttle as a medium through which to teach technical skills to anyone interested in learning them.'}]\"\n\t\t[text2]=\"[{str: 'Cuttle is simple enough to be accessible at any level of development, and deep enough to enable learners to cultivate programming skills in any layer of the full stack. The'}, {str: 'issue backlog', url: 'https://github.com/cuttle-cards/cuttle/issues'}, {str: 'is labeled and curated with improvements to user and developer experience in different areas spanning various levels of complexity, and the core team works with contributors to help them find and complete progressively more complex and valuable contributions that align their skills and interests with ways to add value to our growing community.'}]\"\n\t\tlink=\"https://cuttle.cards/rules\"\n\t>\n\t</app-picture-and-explanation>\n</article>"

/***/ }),

/***/ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CuttleOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuttleOverviewComponent", function() { return CuttleOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CuttleOverviewComponent = /** @class */ (function () {
    function CuttleOverviewComponent() {
    }
    CuttleOverviewComponent.prototype.ngOnInit = function () {
    };
    CuttleOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cuttle-overview',
            template: __webpack_require__(/*! ./cuttle-overview.component.html */ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.html"),
            styles: [__webpack_require__(/*! ./cuttle-overview.component.css */ "./src/app/portfolio/portfolio_pages/cuttle-overview/cuttle-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CuttleOverviewComponent);
    return CuttleOverviewComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var responsiveRouterTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '100%', position: 'absolute' }), { optional: true }),
        // query('.entryWrapper', style({opacity: 0}), {optional: true}),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter #aboutContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.65s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0px)', position: 'relative' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter #portfolioContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.65s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0px)', position: 'relative' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave #portfolioContainer, :leave #cuttleContainer, :leave #assistmentsContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(175%)', position: 'relative' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave #aboutContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-175%)', position: 'relative' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter #cuttleOverviewContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(110%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.65s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(0px, -22px)', position: 'relative' }))
            ], { optional: true }),
        ]) //End group
    ])
]); // end trigger
var routerTransition = responsiveRouterTransition;


/***/ }),

/***/ "./src/app/section-header/section-header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/section-header/section-header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  row-gap: 64px;\n  flex-wrap: wrap;\n  /* margin-bottom: 64px; */\n}\n\n.text-column {\n  width: calc(50% - 32px);\n  margin: 0;\n  min-width: 340px;\n  flex-grow: 1;\n}\n\n.text-column h2 {\n  margin-top: 0;\n  margin-bottom: 8px;\n}\n\n@media (max-width: 1000px) {\n  .section-header {\n    row-gap: 8px;\n  }\n}"

/***/ }),

/***/ "./src/app/section-header/section-header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/section-header/section-header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n  <div class=\"text-column\">\n    <h2>{{ title }}</h2>\n    <span>\n      {{ startDate }} - {{ endDate }} | {{ myRole }}\n    </span>\n  </div>\n  <p class=\"text-column text-md\">\n    {{ description }}\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/section-header/section-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/section-header/section-header.component.ts ***!
  \************************************************************/
/*! exports provided: SectionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function() { return SectionHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionHeaderComponent = /** @class */ (function () {
    function SectionHeaderComponent() {
    }
    SectionHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SectionHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SectionHeaderComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SectionHeaderComponent.prototype, "startDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SectionHeaderComponent.prototype, "endDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SectionHeaderComponent.prototype, "myRole", void 0);
    SectionHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-header',
            template: __webpack_require__(/*! ./section-header.component.html */ "./src/app/section-header/section-header.component.html"),
            styles: [__webpack_require__(/*! ./section-header.component.css */ "./src/app/section-header/section-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionHeaderComponent);
    return SectionHeaderComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanemberling/Code/personal_website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map