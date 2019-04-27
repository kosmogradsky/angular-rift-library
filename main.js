(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/angular-rift/fesm5/angular-rift.js":
/*!******************************************************************************************!*\
  !*** C:/Users/Евгений/Code/angular-rift-library/dist/angular-rift/fesm5/angular-rift.js ***!
  \******************************************************************************************/
/*! exports provided: defaultOutletName, RiftService, RiftModule, ContentDirective, OutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOutletName", function() { return defaultOutletName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiftService", function() { return RiftService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiftModule", function() { return RiftModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDirective", function() { return ContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletComponent", function() { return OutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultOutletName = 'default';
var RiftService = /** @class */ (function () {
    function RiftService() {
        this.createdRiftsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.createdRifts = this.createdRiftsSubject.asObservable();
    }
    /**
     * @param {?} template
     * @param {?=} outletName
     * @return {?}
     */
    RiftService.prototype.attach = /**
     * @param {?} template
     * @param {?=} outletName
     * @return {?}
     */
    function (template, outletName) {
        if (outletName === void 0) { outletName = defaultOutletName; }
        var _a;
        /** @type {?} */
        var riftsBefore = this.createdRiftsSubject.getValue();
        /** @type {?} */
        var riftsInThatOutlet = riftsBefore[outletName] || [];
        this.createdRiftsSubject.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, riftsBefore, (_a = {}, _a[outletName] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(riftsInThatOutlet, [
            { template: template }
        ]), _a)));
    };
    /**
     * @param {?} templateToDetach
     * @param {?=} outletName
     * @return {?}
     */
    RiftService.prototype.detach = /**
     * @param {?} templateToDetach
     * @param {?=} outletName
     * @return {?}
     */
    function (templateToDetach, outletName) {
        if (outletName === void 0) { outletName = defaultOutletName; }
        var _a;
        /** @type {?} */
        var riftsBefore = this.createdRiftsSubject.getValue();
        /** @type {?} */
        var riftsInThatOutlet = riftsBefore[outletName];
        if (riftsInThatOutlet) {
            this.createdRiftsSubject.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, riftsBefore, (_a = {}, _a[outletName] = riftsInThatOutlet.filter((/**
             * @param {?} rift
             * @return {?}
             */
            function (rift) { return rift.template !== templateToDetach; })), _a)));
        }
    };
    RiftService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
    ];
    /** @nocollapse */
    RiftService.ctorParameters = function () { return []; };
    return RiftService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentDirective = /** @class */ (function () {
    function ContentDirective(riftService, template) {
        this.riftService = riftService;
        this.template = template;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ContentDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var previousValue = changes.riftContent.previousValue;
        /** @type {?} */
        var currentValue = changes.riftContent.currentValue || defaultOutletName;
        if (previousValue !== currentValue) {
            this.riftService.detach(this.template, previousValue);
            if (currentValue) {
                this.riftService.attach(this.template, currentValue);
            }
        }
    };
    /**
     * @return {?}
     */
    ContentDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.riftService.detach(this.template, this.riftContent || defaultOutletName);
    };
    ContentDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[riftContent]'
                },] }
    ];
    /** @nocollapse */
    ContentDirective.ctorParameters = function () { return [
        { type: RiftService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    ContentDirective.propDecorators = {
        riftContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return ContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OutletComponent = /** @class */ (function () {
    function OutletComponent(riftService) {
        this.riftService = riftService;
        this.name = defaultOutletName;
        this.rift$ = this.riftService.createdRifts;
    }
    /**
     * @return {?}
     */
    OutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    OutletComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'rift-outlet',
                    template: "<ng-container *ngIf=\"rift$ | async as rifts\">\n  <ng-container *ngFor=\"let rift of (rifts[name] || [])\">\n    <ng-container *ngTemplateOutlet=\"rift.template\"></ng-container>\n  </ng-container>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OutletComponent.ctorParameters = function () { return [
        { type: RiftService }
    ]; };
    OutletComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return OutletComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RiftModule = /** @class */ (function () {
    function RiftModule() {
    }
    RiftModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        ContentDirective,
                        OutletComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    providers: [
                        RiftService
                    ],
                    exports: [
                        ContentDirective,
                        OutletComponent
                    ]
                },] }
    ];
    return RiftModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-rift.js.map

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rectangle {\r\n  border-radius: 10px;\r\n  padding: 10px 20px;\r\n  max-width: 300px;\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.one {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.two {\r\n  background-color: beige\r\n}\r\n\r\n.three {\r\n  background-color: cornflowerblue;\r\n}\r\n\r\n.four {\r\n  background-color: lightcoral;\r\n}\r\n\r\n.five {\r\n  background-color: powderblue;\r\n}\r\n\r\n.outlet-one {\r\n  background-color: orange;\r\n}\r\n\r\n.outlet-two {\r\n  background-color: violet;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FuZ3VsYXItcmlmdC1leGFtcGxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLXJpZnQtZXhhbXBsZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY3RhbmdsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ub25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG4udHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZVxyXG59XHJcblxyXG4udGhyZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG59XHJcblxyXG4uZm91ciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxufVxyXG5cclxuLmZpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBvd2RlcmJsdWU7XHJcbn1cclxuXHJcbi5vdXRsZXQtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5vdXRsZXQtdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rectangle one\">\r\n  <span>RectangleOne</span>\r\n  <div class=\"rectangle two\">\r\n    <span>RectangeTwo</span>\r\n    <div class=\"rectangle three\" *riftContent>\r\n      <span>RectangeThree</span>\r\n      <div class=\"rectangle four\">\r\n        <span>RectangeFour</span>\r\n        <div class=\"rectangle five\" *riftContent=\"'outletTwo'\">\r\n          RectangleFive\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div>RectangleThree is displayed inside RiftOutletOne even though it is defined as a child of RectangeTwo</div>\r\n\r\n<div class=\"rectangle outlet-one\">\r\n  <span>RiftOutletOne</span>\r\n  <rift-outlet></rift-outlet>\r\n</div>\r\n\r\n<div>RectangleFive is displayed inside RiftOutletTwo even though it is defined as a child of RectangeFour</div>\r\n\r\n<div class=\"rectangle outlet-two\">\r\n  <span>RiftOutletTwo</span>\r\n  <rift-outlet name=\"outletTwo\"></rift-outlet>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_rift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-rift */ "../../dist/angular-rift/fesm5/angular-rift.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_rift__WEBPACK_IMPORTED_MODULE_3__["RiftModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Евгений\Code\angular-rift-library\projects\angular-rift-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map