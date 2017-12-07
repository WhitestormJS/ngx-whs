webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/components/cameras/cubeCamera/cubeCamera.componet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubeCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CubeCameraComponent = (function (_super) {
    __extends(CubeCameraComponent, _super);
    function CubeCameraComponent() {
        return _super.call(this) || this;
    }
    CubeCameraComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["CubeCamera"](this.params);
    };
    return CubeCameraComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["a" /* CameraComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["CubeCameraParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["CubeCameraParams"]) === "function" && _a || Object)
], CubeCameraComponent.prototype, "params", void 0);
CubeCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-cube-camera',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], CubeCameraComponent);

var _a;
//# sourceMappingURL=cubeCamera.componet.js.map

/***/ }),

/***/ "../../../../../src/components/cameras/cubeCamera/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cubeCamera_componet__ = __webpack_require__("../../../../../src/components/cameras/cubeCamera/cubeCamera.componet.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cubeCamera_componet__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/cameras/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cubeCamera__ = __webpack_require__("../../../../../src/components/cameras/cubeCamera/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cubeCamera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orthographicCamera__ = __webpack_require__("../../../../../src/components/cameras/orthographicCamera/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__orthographicCamera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perspectiveCamera__ = __webpack_require__("../../../../../src/components/cameras/perspectiveCamera/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__perspectiveCamera__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/cameras/orthographicCamera/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orthographicCamera_component__ = __webpack_require__("../../../../../src/components/cameras/orthographicCamera/orthographicCamera.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__orthographicCamera_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/cameras/orthographicCamera/orthographicCamera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrthographicCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrthographicCameraComponent = (function (_super) {
    __extends(OrthographicCameraComponent, _super);
    function OrthographicCameraComponent() {
        return _super.call(this) || this;
    }
    OrthographicCameraComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["OrthographicCamera"](this.params);
    };
    return OrthographicCameraComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["a" /* CameraComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["OrthographicCameraParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["OrthographicCameraParams"]) === "function" && _a || Object)
], OrthographicCameraComponent.prototype, "params", void 0);
OrthographicCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-orthographic-camera',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], OrthographicCameraComponent);

var _a;
//# sourceMappingURL=orthographicCamera.component.js.map

/***/ }),

/***/ "../../../../../src/components/cameras/perspectiveCamera/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perspectiveCamera_component__ = __webpack_require__("../../../../../src/components/cameras/perspectiveCamera/perspectiveCamera.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__perspectiveCamera_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/cameras/perspectiveCamera/perspectiveCamera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerspectiveCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerspectiveCameraComponent = (function (_super) {
    __extends(PerspectiveCameraComponent, _super);
    function PerspectiveCameraComponent() {
        return _super.call(this) || this;
    }
    PerspectiveCameraComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["PerspectiveCamera"](this.params);
    };
    return PerspectiveCameraComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["a" /* CameraComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["PerspectiveCameraParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["PerspectiveCameraParams"]) === "function" && _a || Object)
], PerspectiveCameraComponent.prototype, "params", void 0);
PerspectiveCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-perspective-camera',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], PerspectiveCameraComponent);

var _a;
//# sourceMappingURL=perspectiveCamera.component.js.map

/***/ }),

/***/ "../../../../../src/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cameras__ = __webpack_require__("../../../../../src/components/cameras/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__cameras__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__cameras__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__cameras__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lights__ = __webpack_require__("../../../../../src/components/lights/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__lights__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__lights__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__lights__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__lights__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_1__lights__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_1__lights__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meshes__ = __webpack_require__("../../../../../src/components/meshes/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes__["v"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/ambientLight/ambientLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmbientLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("../../../../../src/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AmbientLightComponent = (function (_super) {
    __extends(AmbientLightComponent, _super);
    function AmbientLightComponent(sence) {
        var _this = _super.call(this) || this;
        _this.sence = sence;
        if (!sence) {
            throw new Error('AmbientLightComponent should be hosted by SenceComponent');
        }
        return _this;
    }
    AmbientLightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_2_whs__["AmbientLight"](this.params);
    };
    return AmbientLightComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core__["d" /* LightComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_whs__["AmbientLightParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_whs__["AmbientLightParams"]) === "function" && _a || Object)
], AmbientLightComponent.prototype, "params", void 0);
AmbientLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-ambient-light',
        template: '<ng-content></ng-content>',
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core__["h" /* SenceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["h" /* SenceComponent */]) === "function" && _b || Object])
], AmbientLightComponent);

var _a, _b;
//# sourceMappingURL=ambientLight.component.js.map

/***/ }),

/***/ "../../../../../src/components/lights/ambientLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ambientLight_component__ = __webpack_require__("../../../../../src/components/lights/ambientLight/ambientLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ambientLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/areaLight/areaLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaLightComponent = (function (_super) {
    __extends(AreaLightComponent, _super);
    function AreaLightComponent() {
        return _super.call(this) || this;
    }
    AreaLightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["AreaLight"](this.params);
    };
    return AreaLightComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["d" /* LightComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["AreaLightParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["AreaLightParams"]) === "function" && _a || Object)
], AreaLightComponent.prototype, "params", void 0);
AreaLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-area-light',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], AreaLightComponent);

var _a;
//# sourceMappingURL=areaLight.component.js.map

/***/ }),

/***/ "../../../../../src/components/lights/areaLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__areaLight_component__ = __webpack_require__("../../../../../src/components/lights/areaLight/areaLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__areaLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/directionalLight/directionalLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionalLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DirectionalLightComponent = (function (_super) {
    __extends(DirectionalLightComponent, _super);
    function DirectionalLightComponent() {
        return _super.call(this) || this;
    }
    DirectionalLightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["DirectionalLight"](this.params);
    };
    return DirectionalLightComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["d" /* LightComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["DirectionalLightParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["DirectionalLightParams"]) === "function" && _a || Object)
], DirectionalLightComponent.prototype, "params", void 0);
DirectionalLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-directional-light',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], DirectionalLightComponent);

var _a;
//# sourceMappingURL=directionalLight.component.js.map

/***/ }),

/***/ "../../../../../src/components/lights/directionalLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directionalLight_component__ = __webpack_require__("../../../../../src/components/lights/directionalLight/directionalLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__directionalLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/hemisphereLight/hemisphereLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HemisphereLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HemisphereLightComponent = (function (_super) {
    __extends(HemisphereLightComponent, _super);
    function HemisphereLightComponent() {
        return _super.call(this) || this;
    }
    HemisphereLightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["HemisphereLight"](this.params);
    };
    return HemisphereLightComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["d" /* LightComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["HemisphereLightParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["HemisphereLightParams"]) === "function" && _a || Object)
], HemisphereLightComponent.prototype, "params", void 0);
HemisphereLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-hemisphere-light',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], HemisphereLightComponent);

var _a;
//# sourceMappingURL=hemisphereLight.component.js.map

/***/ }),

/***/ "../../../../../src/components/lights/hemisphereLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hemisphereLight_component__ = __webpack_require__("../../../../../src/components/lights/hemisphereLight/hemisphereLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hemisphereLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ambientLight__ = __webpack_require__("../../../../../src/components/lights/ambientLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ambientLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__areaLight__ = __webpack_require__("../../../../../src/components/lights/areaLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__areaLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directionalLight__ = __webpack_require__("../../../../../src/components/lights/directionalLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__directionalLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hemisphereLight__ = __webpack_require__("../../../../../src/components/lights/hemisphereLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__hemisphereLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointLight__ = __webpack_require__("../../../../../src/components/lights/pointLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__pointLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spotLight__ = __webpack_require__("../../../../../src/components/lights/spotLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__spotLight__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/pointLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointLight_component__ = __webpack_require__("../../../../../src/components/lights/pointLight/pointLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pointLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/pointLight/pointLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PointLightComponent = (function (_super) {
    __extends(PointLightComponent, _super);
    function PointLightComponent(state, sence) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.sence = sence;
        if (!sence) {
            throw new Error('PointLightComponent should be hosted by SenceComponent');
        }
        return _this;
    }
    PointLightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["PointLight"](this.params);
        console.log(this);
    };
    return PointLightComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["d" /* LightComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["PointLightParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["PointLightParams"]) === "function" && _a || Object)
], PointLightComponent.prototype, "params", void 0);
PointLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-point-light',
        template: '<ng-content></ng-content>',
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */]) === "function" && _c || Object])
], PointLightComponent);

var _a, _b, _c;
//# sourceMappingURL=pointLight.component.js.map

/***/ }),

/***/ "../../../../../src/components/lights/spotLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spotLight_component__ = __webpack_require__("../../../../../src/components/lights/spotLight/spotLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spotLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/lights/spotLight/spotLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotLightComponent = (function (_super) {
    __extends(SpotLightComponent, _super);
    function SpotLightComponent() {
        return _super.call(this) || this;
    }
    SpotLightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["SpotLight"](this.params);
    };
    return SpotLightComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["d" /* LightComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["SpotLightParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["SpotLightParams"]) === "function" && _a || Object)
], SpotLightComponent.prototype, "params", void 0);
SpotLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-spot-light',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], SpotLightComponent);

var _a;
//# sourceMappingURL=spotLight.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/box/box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoxComponent = (function (_super) {
    __extends(BoxComponent, _super);
    function BoxComponent() {
        return _super.call(this) || this;
    }
    BoxComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Box"](this.params);
    };
    BoxComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return BoxComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["BoxParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["BoxParams"]) === "function" && _a || Object)
], BoxComponent.prototype, "params", void 0);
BoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-box',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], BoxComponent);

var _a;
//# sourceMappingURL=box.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/box/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_component__ = __webpack_require__("../../../../../src/components/meshes/box/box.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__box_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/cone/cone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConeComponent = (function (_super) {
    __extends(ConeComponent, _super);
    function ConeComponent() {
        return _super.call(this) || this;
    }
    ConeComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Cone"](this.params);
    };
    ConeComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return ConeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["ConeParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["ConeParams"]) === "function" && _a || Object)
], ConeComponent.prototype, "params", void 0);
ConeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-cone',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], ConeComponent);

var _a;
//# sourceMappingURL=cone.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/cone/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cone_component__ = __webpack_require__("../../../../../src/components/meshes/cone/cone.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cone_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/cylinder/cylinder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CylinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CylinderComponent = (function (_super) {
    __extends(CylinderComponent, _super);
    function CylinderComponent() {
        return _super.call(this) || this;
    }
    CylinderComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Cylinder"](this.params);
    };
    CylinderComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return CylinderComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["CylinderParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["CylinderParams"]) === "function" && _a || Object)
], CylinderComponent.prototype, "params", void 0);
CylinderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-cylinder',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], CylinderComponent);

var _a;
//# sourceMappingURL=cylinder.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/cylinder/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cylinder_component__ = __webpack_require__("../../../../../src/components/meshes/cylinder/cylinder.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cylinder_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/dodecahedron/dodecahedron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DodecahedronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DodecahedronComponent = (function (_super) {
    __extends(DodecahedronComponent, _super);
    function DodecahedronComponent() {
        return _super.call(this) || this;
    }
    DodecahedronComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Dodecahedron"](this.params);
    };
    DodecahedronComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return DodecahedronComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DodecahedronComponent.prototype, "params", void 0);
DodecahedronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-dodecahedron',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], DodecahedronComponent);

//# sourceMappingURL=dodecahedron.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/dodecahedron/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dodecahedron_component__ = __webpack_require__("../../../../../src/components/meshes/dodecahedron/dodecahedron.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dodecahedron_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/extrude/extrude.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrudeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtrudeComponent = (function (_super) {
    __extends(ExtrudeComponent, _super);
    function ExtrudeComponent() {
        return _super.call(this) || this;
    }
    ExtrudeComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Extrude"](this.params);
    };
    ExtrudeComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return ExtrudeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["ExtrudeParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["ExtrudeParams"]) === "function" && _a || Object)
], ExtrudeComponent.prototype, "params", void 0);
ExtrudeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-extrude',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], ExtrudeComponent);

var _a;
//# sourceMappingURL=extrude.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/extrude/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extrude_component__ = __webpack_require__("../../../../../src/components/meshes/extrude/extrude.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__extrude_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// confusing
var GroupComponent = (function (_super) {
    __extends(GroupComponent, _super);
    function GroupComponent() {
        return _super.call(this) || this;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Group"]();
    };
    return GroupComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
GroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-group',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], GroupComponent);

//# sourceMappingURL=group.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/group/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_component__ = __webpack_require__("../../../../../src/components/meshes/group/group.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__group_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/icosahedron/icosahedron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IcosahedronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IcosahedronComponent = (function (_super) {
    __extends(IcosahedronComponent, _super);
    function IcosahedronComponent() {
        return _super.call(this) || this;
    }
    IcosahedronComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Icosahedron"](this.params);
    };
    IcosahedronComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return IcosahedronComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], IcosahedronComponent.prototype, "params", void 0);
IcosahedronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-icosahedron',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], IcosahedronComponent);

//# sourceMappingURL=icosahedron.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/icosahedron/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icosahedron_component__ = __webpack_require__("../../../../../src/components/meshes/icosahedron/icosahedron.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__icosahedron_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/importer/importer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImporterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// confusing
var ImporterComponent = (function (_super) {
    __extends(ImporterComponent, _super);
    function ImporterComponent() {
        return _super.call(this) || this;
    }
    ImporterComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Importer"]();
    };
    return ImporterComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
ImporterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-importer',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], ImporterComponent);

//# sourceMappingURL=importer.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/importer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__importer_component__ = __webpack_require__("../../../../../src/components/meshes/importer/importer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__importer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plane__ = __webpack_require__("../../../../../src/components/meshes/plane/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__plane__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sphere__ = __webpack_require__("../../../../../src/components/meshes/sphere/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__sphere__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box__ = __webpack_require__("../../../../../src/components/meshes/box/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cone__ = __webpack_require__("../../../../../src/components/meshes/cone/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__cone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cylinder__ = __webpack_require__("../../../../../src/components/meshes/cylinder/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__cylinder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dodecahedron__ = __webpack_require__("../../../../../src/components/meshes/dodecahedron/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__dodecahedron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extrude__ = __webpack_require__("../../../../../src/components/meshes/extrude/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__extrude__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group__ = __webpack_require__("../../../../../src/components/meshes/group/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icosahedron__ = __webpack_require__("../../../../../src/components/meshes/icosahedron/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__icosahedron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__importer__ = __webpack_require__("../../../../../src/components/meshes/importer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__importer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lathe__ = __webpack_require__("../../../../../src/components/meshes/lathe/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__lathe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__line__ = __webpack_require__("../../../../../src/components/meshes/line/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__octahedron__ = __webpack_require__("../../../../../src/components/meshes/octahedron/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__octahedron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parametric__ = __webpack_require__("../../../../../src/components/meshes/parametric/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__parametric__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__polyhedron__ = __webpack_require__("../../../../../src/components/meshes/polyhedron/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_14__polyhedron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ring__ = __webpack_require__("../../../../../src/components/meshes/ring/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_15__ring__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shape__ = __webpack_require__("../../../../../src/components/meshes/shape/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_16__shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tetrahedron__ = __webpack_require__("../../../../../src/components/meshes/tetrahedron/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__tetrahedron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__text__ = __webpack_require__("../../../../../src/components/meshes/text/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_18__text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__torus__ = __webpack_require__("../../../../../src/components/meshes/torus/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_19__torus__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__torusknot__ = __webpack_require__("../../../../../src/components/meshes/torusknot/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_20__torusknot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tube__ = __webpack_require__("../../../../../src/components/meshes/tube/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_21__tube__["a"]; });






















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/lathe/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lathe_component__ = __webpack_require__("../../../../../src/components/meshes/lathe/lathe.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lathe_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/lathe/lathe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatheComponent = (function (_super) {
    __extends(LatheComponent, _super);
    function LatheComponent() {
        return _super.call(this) || this;
    }
    LatheComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Lathe"](this.params);
    };
    LatheComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return LatheComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["LatheParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["LatheParams"]) === "function" && _a || Object)
], LatheComponent.prototype, "params", void 0);
LatheComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-lathe',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], LatheComponent);

var _a;
//# sourceMappingURL=lathe.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/line/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_component__ = __webpack_require__("../../../../../src/components/meshes/line/line.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__line_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineComponent = (function (_super) {
    __extends(LineComponent, _super);
    function LineComponent() {
        return _super.call(this) || this;
    }
    LineComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Line"](this.params);
    };
    LineComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return LineComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["LineParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["LineParams"]) === "function" && _a || Object)
], LineComponent.prototype, "params", void 0);
LineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-line',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], LineComponent);

var _a;
//# sourceMappingURL=line.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/octahedron/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__octahedron_component__ = __webpack_require__("../../../../../src/components/meshes/octahedron/octahedron.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__octahedron_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/octahedron/octahedron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OctahedronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OctahedronComponent = (function (_super) {
    __extends(OctahedronComponent, _super);
    function OctahedronComponent() {
        return _super.call(this) || this;
    }
    OctahedronComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Octahedron"](this.params);
    };
    OctahedronComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return OctahedronComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["OctahedronParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["OctahedronParams"]) === "function" && _a || Object)
], OctahedronComponent.prototype, "params", void 0);
OctahedronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-octahedron',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], OctahedronComponent);

var _a;
//# sourceMappingURL=octahedron.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/parametric/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parametric_component__ = __webpack_require__("../../../../../src/components/meshes/parametric/parametric.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__parametric_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/parametric/parametric.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametricComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParametricComponent = (function (_super) {
    __extends(ParametricComponent, _super);
    function ParametricComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    ParametricComponent.prototype.ngOnInit = function () {
        // tslint:disable-next-line:no-debugger
        // debugger;
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Parametric"](this.params);
    };
    ParametricComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return ParametricComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["ParametricParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["ParametricParams"]) === "function" && _a || Object)
], ParametricComponent.prototype, "params", void 0);
ParametricComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-parametric',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], ParametricComponent);

var _a;
//# sourceMappingURL=parametric.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/plane/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plane_component__ = __webpack_require__("../../../../../src/components/meshes/plane/plane.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__plane_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/plane/plane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PlaneComponent = (function (_super) {
    __extends(PlaneComponent, _super);
    function PlaneComponent(state, sence) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.sence = sence;
        _this.params = {};
        if (!sence) {
            throw new Error('PlaneComponent should be hosted by SenceComponent');
        }
        return _this;
    }
    PlaneComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Plane"](this.params);
    };
    return PlaneComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["b" /* ComponentComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["PlaneParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["PlaneParams"]) === "function" && _a || Object)
], PlaneComponent.prototype, "params", void 0);
PlaneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-plane',
        template: '<ng-content></ng-content>',
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */]) === "function" && _c || Object])
], PlaneComponent);

var _a, _b, _c;
//# sourceMappingURL=plane.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/polyhedron/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyhedron_component__ = __webpack_require__("../../../../../src/components/meshes/polyhedron/polyhedron.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__polyhedron_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/polyhedron/polyhedron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolyhedronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PolyhedronComponent = (function (_super) {
    __extends(PolyhedronComponent, _super);
    function PolyhedronComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    PolyhedronComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Polyhedron"](this.params);
    };
    PolyhedronComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return PolyhedronComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["PolyhedronParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["PolyhedronParams"]) === "function" && _a || Object)
], PolyhedronComponent.prototype, "params", void 0);
PolyhedronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-polyhedron',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], PolyhedronComponent);

var _a;
//# sourceMappingURL=polyhedron.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/ring/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ring_component__ = __webpack_require__("../../../../../src/components/meshes/ring/ring.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ring_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/ring/ring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RingComponent = (function (_super) {
    __extends(RingComponent, _super);
    function RingComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    RingComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Ring"](this.params);
    };
    RingComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return RingComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["RingParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["RingParams"]) === "function" && _a || Object)
], RingComponent.prototype, "params", void 0);
RingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-ring',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], RingComponent);

var _a;
//# sourceMappingURL=ring.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/shape/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape_component__ = __webpack_require__("../../../../../src/components/meshes/shape/shape.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shape_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/shape/shape.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShapeComponent = (function (_super) {
    __extends(ShapeComponent, _super);
    function ShapeComponent() {
        return _super.call(this) || this;
    }
    ShapeComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Shape"](this.params);
    };
    ShapeComponent.prototype.buildGeometry = function () {
        return this._instance.buildGeometry();
    };
    return ShapeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["ShapeParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["ShapeParams"]) === "function" && _a || Object)
], ShapeComponent.prototype, "params", void 0);
ShapeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-shape',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], ShapeComponent);

var _a;
//# sourceMappingURL=shape.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/sphere/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sphere_component__ = __webpack_require__("../../../../../src/components/meshes/sphere/sphere.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sphere_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/sphere/sphere.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SphereComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SphereComponent = (function (_super) {
    __extends(SphereComponent, _super);
    function SphereComponent(state, sence) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.sence = sence;
        if (!sence) {
            throw new Error('SphereComponent should be hosted by SenceComponent');
        }
        return _this;
    }
    SphereComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Sphere"](this.params);
        this.sence.add(this._instance);
    };
    return SphereComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["b" /* ComponentComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["SphereParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["SphereParams"]) === "function" && _a || Object)
], SphereComponent.prototype, "params", void 0);
SphereComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-sphere',
        template: '<ng-content></ng-content>',
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */]) === "function" && _c || Object])
], SphereComponent);

var _a, _b, _c;
//# sourceMappingURL=sphere.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/tetrahedron/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetrahedron_component__ = __webpack_require__("../../../../../src/components/meshes/tetrahedron/tetrahedron.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tetrahedron_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/tetrahedron/tetrahedron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetrahedronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TetrahedronComponent = (function (_super) {
    __extends(TetrahedronComponent, _super);
    function TetrahedronComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    TetrahedronComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Tetrahedron"](this.params);
    };
    return TetrahedronComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["TetrahedronParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["TetrahedronParams"]) === "function" && _a || Object)
], TetrahedronComponent.prototype, "params", void 0);
TetrahedronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-tetrahedron',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], TetrahedronComponent);

var _a;
//# sourceMappingURL=tetrahedron.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/text/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_component__ = __webpack_require__("../../../../../src/components/meshes/text/text.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__text_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/text/text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextComponent = (function (_super) {
    __extends(TextComponent, _super);
    function TextComponent() {
        return _super.call(this) || this;
    }
    TextComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Text"](this.params);
    };
    return TextComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["TextParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["TextParams"]) === "function" && _a || Object)
], TextComponent.prototype, "params", void 0);
TextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-text',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], TextComponent);

var _a;
//# sourceMappingURL=text.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/torus/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__torus_component__ = __webpack_require__("../../../../../src/components/meshes/torus/torus.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__torus_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/torus/torus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TorusComponent = (function (_super) {
    __extends(TorusComponent, _super);
    function TorusComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    TorusComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Torus"](this.params);
    };
    return TorusComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["TorusParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["TorusParams"]) === "function" && _a || Object)
], TorusComponent.prototype, "params", void 0);
TorusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-torus',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], TorusComponent);

var _a;
//# sourceMappingURL=torus.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/torusknot/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__torusknot_component__ = __webpack_require__("../../../../../src/components/meshes/torusknot/torusknot.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__torusknot_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/torusknot/torusknot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorusknotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TorusknotComponent = (function (_super) {
    __extends(TorusknotComponent, _super);
    function TorusknotComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    TorusknotComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Torusknot"](this.params);
    };
    return TorusknotComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["TorusknotParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["TorusknotParams"]) === "function" && _a || Object)
], TorusknotComponent.prototype, "params", void 0);
TorusknotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-torusknot',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], TorusknotComponent);

var _a;
//# sourceMappingURL=torusknot.component.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/tube/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tube_component__ = __webpack_require__("../../../../../src/components/meshes/tube/tube.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tube_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/components/meshes/tube/tube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TubeComponent = (function (_super) {
    __extends(TubeComponent, _super);
    function TubeComponent() {
        var _this = _super.call(this) || this;
        _this.params = {};
        return _this;
    }
    TubeComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Tube"](this.params);
    };
    return TubeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_whs__["TubeParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_whs__["TubeParams"]) === "function" && _a || Object)
], TubeComponent.prototype, "params", void 0);
TubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-tube',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], TubeComponent);

var _a;
//# sourceMappingURL=tube.component.js.map

/***/ }),

/***/ "../../../../../src/core/components/camera/camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("../../../../../src/core/components/component/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraComponent = (function (_super) {
    __extends(CameraComponent, _super);
    function CameraComponent() {
        return _super.call(this) || this;
    }
    CameraComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["CameraComponent"](this.params, this.defaults, this.instructions);
    };
    CameraComponent.prototype.build = function () {
        return this._instance.build();
    };
    CameraComponent.prototype.wrap = function () {
        return this._instance.wrap();
    };
    return CameraComponent;
}(__WEBPACK_IMPORTED_MODULE_2__component__["a" /* ComponentComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CameraComponent.prototype, "params", void 0);
CameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-camera',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], CameraComponent);

var _a;
//# sourceMappingURL=camera.component.js.map

/***/ }),

/***/ "../../../../../src/core/components/camera/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_component__ = __webpack_require__("../../../../../src/core/components/camera/camera.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__camera_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/components/component/component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentInterfaceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentInterfaceToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('ComponentInterfaceToken');
var ComponentComponent = ComponentComponent_1 = (function () {
    function ComponentComponent() {
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ComponentComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["Component"](this.params, this.defaults, this.instructions);
    };
    ComponentComponent.prototype.ngAfterContentInit = function () {
        this.attach();
        this.ready.emit(this._instance);
    };
    ComponentComponent.prototype.ngAfterViewInit = function () {
    };
    ComponentComponent.prototype.attach = function () {
        var _this = this;
        this.components.forEach(function (component) {
            if (component instanceof ComponentComponent_1 && (component !== _this)) {
                console.log('attach', component, _this);
                _this.add(component);
            }
        });
    };
    ComponentComponent.prototype.add = function (obj) {
        return this._instance.add(obj._instance);
    };
    ComponentComponent.prototype.addTo = function (parent) {
        return this._instance.addTo(parent._instance);
    };
    ComponentComponent.prototype.remove = function (obj) {
        return this._instance.remove(obj._instance);
    };
    ComponentComponent.prototype.updateParams = function (params) {
        return this._instance.updateParams(params);
    };
    ComponentComponent.prototype.clone = function () {
        return this._instance.clone();
    };
    ComponentComponent.prototype.wait = function () {
    };
    ComponentComponent.prototype.defer = function () {
    };
    ComponentComponent.prototype.copy = function (source, customize) {
        return this._instance.copy(source, customize);
    };
    return ComponentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ComponentComponent.prototype, "params", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ComponentComponent.prototype, "defaults", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ComponentComponent.prototype, "instructions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ComponentComponent.prototype, "ready", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])('component'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _a || Object)
], ComponentComponent.prototype, "components", void 0);
ComponentComponent = ComponentComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-component',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], ComponentComponent);

var ComponentComponent_1, _a;
//# sourceMappingURL=component.component.js.map

/***/ }),

/***/ "../../../../../src/core/components/component/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_component__ = __webpack_require__("../../../../../src/core/components/component/component.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__component_component__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__("../../../../../src/core/components/component/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sence__ = __webpack_require__("../../../../../src/core/components/sence/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__sence__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__light__ = __webpack_require__("../../../../../src/core/components/light/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__light__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__camera__ = __webpack_require__("../../../../../src/core/components/camera/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesh__ = __webpack_require__("../../../../../src/core/components/mesh/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__mesh__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/components/light/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__light_component__ = __webpack_require__("../../../../../src/core/components/light/light.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__light_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/components/light/light.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("../../../../../src/core/components/component/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightComponent = (function (_super) {
    __extends(LightComponent, _super);
    function LightComponent() {
        return _super.call(this) || this;
    }
    LightComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["LightComponent"](this.params, this.defaults, this.instructions);
    };
    LightComponent.prototype.build = function () {
        return this._instance.build();
    };
    LightComponent.prototype.wrap = function () {
        return this._instance.wrap();
    };
    LightComponent.prototype.wrapShadow = function () {
        return this._instance.wrapShadow();
    };
    return LightComponent;
}(__WEBPACK_IMPORTED_MODULE_2__component__["a" /* ComponentComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LightComponent.prototype, "params", void 0);
LightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-light',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], LightComponent);

var _a;
//# sourceMappingURL=light.component.js.map

/***/ }),

/***/ "../../../../../src/core/components/mesh/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh_component__ = __webpack_require__("../../../../../src/core/components/mesh/mesh.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/components/mesh/mesh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("../../../../../src/core/components/component/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeshComponent = (function (_super) {
    __extends(MeshComponent, _super);
    function MeshComponent() {
        return _super.call(this) || this;
    }
    MeshComponent.prototype.ngOnInit = function () {
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["MeshComponent"](this.params, this.defaults, this.instructions);
    };
    MeshComponent.prototype.build = function () {
        return this._instance.build();
    };
    MeshComponent.prototype.wrap = function () {
        return this._instance.wrap();
    };
    return MeshComponent;
}(__WEBPACK_IMPORTED_MODULE_2__component__["a" /* ComponentComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MeshComponent.prototype, "params", void 0);
MeshComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-mesh',
        template: '<ng-content></ng-content>',
    }),
    __metadata("design:paramtypes", [])
], MeshComponent);

var _a;
//# sourceMappingURL=mesh.component.js.map

/***/ }),

/***/ "../../../../../src/core/components/sence/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sence_component__ = __webpack_require__("../../../../../src/core/components/sence/sence.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sence_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/components/sence/sence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/core/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component__ = __webpack_require__("../../../../../src/core/components/component/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SenceComponent = (function () {
    function SenceComponent(element, state, parent) {
        this.element = element;
        this.state = state;
        this.modules = [];
        if (parent) {
            throw new Error('SenceComponent can`t be embedded in SenceComponent');
        }
    }
    SenceComponent.prototype.createContainer = function () {
        console.log(this.modules);
        this._instance = new __WEBPACK_IMPORTED_MODULE_1_whs__["App"]([
            new __WEBPACK_IMPORTED_MODULE_1_whs__["ElementModule"](this.instance.nativeElement)
        ].concat(this.modules));
    };
    SenceComponent.prototype.build = function () {
        this._instance.start();
    };
    SenceComponent.prototype.add = function (component) {
        component.addTo(this._instance);
    };
    SenceComponent.prototype.ngOnInit = function () {
        this.createContainer();
        // this.state.on(TYPE_ADDTO, (component: WhsComponentNative ) => {
        //   component.addTo(this._instance);
        // });
    };
    SenceComponent.prototype.ngAfterContentInit = function () {
        this.attach();
        this.build();
    };
    SenceComponent.prototype.ngAfterViewInit = function () {
    };
    SenceComponent.prototype.ngOnDestroy = function () {
        this.instance.nativeElement.remove();
    };
    SenceComponent.prototype.attach = function () {
        var _this = this;
        this.components.forEach(function (component) {
            if (component instanceof __WEBPACK_IMPORTED_MODULE_3__component__["a" /* ComponentComponent */] && (component !== _this)) {
                console.log('secen attach', component);
                _this.add(component._instance);
            }
        });
    };
    return SenceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('instance'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], SenceComponent.prototype, "instance", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])('component'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _b || Object)
], SenceComponent.prototype, "components", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SenceComponent.prototype, "modules", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SenceComponent.prototype, "id", void 0);
SenceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-sence',
        template: '<div #instance class="whs-fullScreen"><ng-content></ng-content></div>',
        providers: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* StateService */]],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        styles: [
            "\n      :host ::ng-deep .whs-fullScreen {\n        height: 100%;\n        weight: 100%;\n      }\n    "
        ]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* SkipSelf */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* StateService */]) === "function" && _d || Object, SenceComponent])
], SenceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sence.component.js.map

/***/ }),

/***/ "../../../../../src/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/core/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/core/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives__ = __webpack_require__("../../../../../src/core/directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_3__services__["a" /* StateService */],
    {
        provide: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* ComponentInterfaceToken */],
        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_2__components__["b" /* ComponentComponent */]; }),
    }
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__components__["f" /* SenceComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components__["d" /* LightComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components__["b" /* ComponentComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components__["a" /* CameraComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components__["e" /* MeshComponent */],
    __WEBPACK_IMPORTED_MODULE_4__directives__["a" /* LoopDirective */],
];
var DIRECTIVES = [];
var CoreModule = CoreModule_1 = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: PROVIDERS.slice(),
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
        ],
        declarations: COMPONENTS.concat(DIRECTIVES),
        exports: COMPONENTS.concat(DIRECTIVES)
    })
], CoreModule);

var CoreModule_1;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/core/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loop__ = __webpack_require__("../../../../../src/core/directives/loop/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loop__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/directives/loop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loop_directive__ = __webpack_require__("../../../../../src/core/directives/loop/loop.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loop_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/directives/loop/loop.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("../../../../../src/core/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LoopDirective = (function () {
    function LoopDirective(_view, secen) {
        this._view = _view;
        this.secen = secen;
        this.useLock = true;
        this.whsLoop = function (clock) { };
        if (!secen) {
            throw new Error('Can`t fint secen SenceComponent');
        }
    }
    LoopDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log('loop create');
        var hostComponent = this._view._data.componentView.component;
        this._loop = new __WEBPACK_IMPORTED_MODULE_2_whs__["Loop"](function (clock) {
            hostComponent._instance.defer(function () {
                _this.whsLoop(hostComponent, clock, _this.secen);
            });
        }, this.useLock);
    };
    LoopDirective.prototype.ngAfterContentInit = function () {
        this._loop.start(this.secen._instance);
    };
    return LoopDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoopDirective.prototype, "useLock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoopDirective.prototype, "whsLoop", void 0);
LoopDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[whsLoop]'
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__components__["f" /* SenceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components__["f" /* SenceComponent */]) === "function" && _b || Object])
], LoopDirective);

var _a, _b;
//# sourceMappingURL=loop.directive.js.map

/***/ }),

/***/ "../../../../../src/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__("../../../../../src/core/core.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/core/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/core/components/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__("../../../../../src/core/directives/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__directives__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("../../../../../src/core/services/state/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__state__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/services/state/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TYPE_ADDTO */
var TYPE_ADDTO = Symbol('addTo');
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "../../../../../src/core/services/state/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_service__ = __webpack_require__("../../../../../src/core/services/state/state.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__state_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__("../../../../../src/core/services/state/event.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/core/services/state/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateService = (function () {
    function StateService() {
        this.event$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.data = [];
    }
    StateService.prototype.on = function (name, fn) {
        return this.event$
            .filter(function (data) { return data.name === name; })
            .map(function (data) { return data.data; })
            .subscribe(function (data) { return fn(data); });
    };
    StateService.prototype.trigger = function (name, data) {
        this.event$.next({
            name: name,
            data: data
        });
    };
    StateService.prototype.off = function () {
        this.event$.unsubscribe();
    };
    return StateService;
}());
StateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StateService);

//# sourceMappingURL=state.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/example/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return children; });
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helloword__ = __webpack_require__("../../../../../src/example/helloword/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mouse__ = __webpack_require__("../../../../../src/example/mouse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text__ = __webpack_require__("../../../../../src/example/text/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terrain__ = __webpack_require__("../../../../../src/example/terrain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saturn__ = __webpack_require__("../../../../../src/example/saturn/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var children = [
    {
        path: 'helloworld',
        component: __WEBPACK_IMPORTED_MODULE_2__helloword__["a" /* HelloWorldComponent */],
        data: {
            content: 'hello world',
            link: 'helloworld',
            icon: 'anticon anticon-dot-chart'
        }
    },
    {
        path: 'mouse',
        component: __WEBPACK_IMPORTED_MODULE_3__mouse__["a" /* MouseComponent */],
        data: {
            content: 'mouse',
            link: 'mouse',
            icon: 'anticon anticon-dot-chart'
        }
    },
    {
        path: 'text',
        component: __WEBPACK_IMPORTED_MODULE_4__text__["a" /* TextComponent */],
        data: {
            content: 'text',
            link: 'text',
            icon: 'anticon anticon-dot-chart'
        }
    },
    {
        path: 'saturn',
        component: __WEBPACK_IMPORTED_MODULE_6__saturn__["a" /* SaturnComponent */],
        data: {
            content: 'saturn',
            link: 'saturn',
            icon: 'anticon anticon-dot-chart'
        }
    },
    {
        path: 'terrain',
        component: __WEBPACK_IMPORTED_MODULE_5__terrain__["a" /* TerrainComponent */],
        data: {
            content: 'terrain',
            link: 'terrain',
            icon: 'anticon anticon-dot-chart'
        }
    }
];
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'helloworld',
    }
].concat(children, [
    {
        path: '**',
        redirectTo: 'helloworld'
    },
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, {
                useHash: true
            })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/example/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"page\">\n\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"null\">\n      <i class=\"anticon trigger\" [class.anticon-menu-fold]=\"!isCollapsed\" [class.anticon-menu-unfold]=\"isCollapsed\" (click)=\"isCollapsed=!isCollapsed\"></i>\n\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"isCollapsed?'vertical':'inline'\">\n        <whs-menu [menus]=\"menus\"></whs-menu>\n    </ul>\n  </nz-sider>\n\n  <nz-layout>\n    <nz-content style=\"margin: 0; height: 100%\">\n      <router-outlet></router-outlet>\n    </nz-content>\n  </nz-layout>\n</nz-layout>\n"

/***/ }),

/***/ "../../../../../src/example/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep .ant-layout-sider-collapsed .school, :host ::ng-deep .ant-layout-sider-collapsed .app-name {\n  display: none; }\n\n:host ::ng-deep .ant-layout-sider-collapsed .nav-text {\n  display: none; }\n\n:host ::ng-deep .ant-layout-sider-collapsed .ant-menu-submenu-title:after {\n  display: none; }\n\n:host ::ng-deep .ant-layout-sider-collapsed .anticon {\n  font-size: 16px;\n  margin-left: 8px; }\n\n:host ::ng-deep .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: color .3s; }\n\n:host ::ng-deep .trigger:hover {\n  color: #108ee9; }\n\n:host .page {\n  height: 100%; }\n\n:host ::ng-deep .ant-menu-submenu-vertical.ant-menu-submenu-open .ng-trigger .nav-text {\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/example/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__("../../../../../src/example/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.isCollapsed = false;
        this.menus = __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["b" /* children */].map(function (item) { return item.data; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-root',
        template: __webpack_require__("../../../../../src/example/app.component.html"),
        styles: [__webpack_require__("../../../../../src/example/app.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/example/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngxWhs_module__ = __webpack_require__("../../../../../src/ngxWhs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/example/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/example/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("../../../../../src/example/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helloword__ = __webpack_require__("../../../../../src/example/helloword/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mouse__ = __webpack_require__("../../../../../src/example/mouse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text__ = __webpack_require__("../../../../../src/example/text/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__terrain__ = __webpack_require__("../../../../../src/example/terrain/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__saturn__ = __webpack_require__("../../../../../src/example/saturn/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_8__components__["b" /* MenuComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["a" /* CustomPointLightComponent */],
    __WEBPACK_IMPORTED_MODULE_9__helloword__["a" /* HelloWorldComponent */],
    __WEBPACK_IMPORTED_MODULE_10__mouse__["a" /* MouseComponent */],
    __WEBPACK_IMPORTED_MODULE_11__text__["a" /* TextComponent */],
    __WEBPACK_IMPORTED_MODULE_12__terrain__["a" /* TerrainComponent */],
    __WEBPACK_IMPORTED_MODULE_13__saturn__["a" /* SaturnComponent */],
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngxWhs_module__["a" /* NgxWhsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ].concat(COMPONENTS),
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/example/components/customPointLight/CustomPointLight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPointLightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("../../../../../src/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomPointLightComponent = (function (_super) {
    __extends(CustomPointLightComponent, _super);
    function CustomPointLightComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {
            light: {
                intensity: 0.5,
                distance: 100
            },
            camera: {
                fov: 90
            },
            position: new __WEBPACK_IMPORTED_MODULE_2_three__["l" /* Vector3 */](0, 25, 30)
        };
        return _this;
    }
    return CustomPointLightComponent;
}(__WEBPACK_IMPORTED_MODULE_1__components__["u" /* PointLightComponent */]));
CustomPointLightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-point-light',
        template: __webpack_require__("../../../../../src/example/components/customPointLight/customPointLight.html"),
    })
], CustomPointLightComponent);

//# sourceMappingURL=CustomPointLight.component.js.map

/***/ }),

/***/ "../../../../../src/example/components/customPointLight/customPointLight.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/example/components/customPointLight/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CustomPointLight_component__ = __webpack_require__("../../../../../src/example/components/customPointLight/CustomPointLight.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CustomPointLight_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customPointLight__ = __webpack_require__("../../../../../src/example/components/customPointLight/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customPointLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__("../../../../../src/example/components/menu/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__menu__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/components/menu/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_component__ = __webpack_require__("../../../../../src/example/components/menu/menu.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let menu of menus\">\n\n  <ng-template *ngIf=\"menu.hasSub\">\n    adasdasdasd\n  </ng-template>\n\n  <ng-template *ngIf=\"menu.children;then content else another\"></ng-template>\n\n  <ng-template #content>\n    <li nz-submenu>\n        <span title>\n          <i [class]=\"menu.icon\"></i>\n          <span class=\"nav-text\">{{ menu.content }}</span>\n        </span>\n        <ul>\n          <whs-menu [menus]=\"menu.children\"></whs-menu>\n        </ul>\n      </li>\n  </ng-template>\n\n  <ng-template #another>\n    <li nz-menu-item [routerLink]=\"menu.link\" [routerLinkActive]=\"'ant-menu-item-selected'\">\n      <span title >\n        <i [class]=\"menu.icon\"></i>\n        <span class=\"nav-text\">{{ menu.content }}</span>\n      </span>\n    </li>\n  </ng-template>\n\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/example/components/menu/menu.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep .ant-menu-item {\n  outline: none;\n}\n:host ::ng-deep .ant-menu-item:focus {\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/example/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        console.log(this.menus);
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "menus", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'whs-menu',
        template: __webpack_require__("../../../../../src/example/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/example/components/menu/menu.component.less")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/example/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export $world */
/* unused harmony export appDefaults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $colors; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getBasicLights;
/* unused harmony export getPlane */
/* harmony export (immutable) */ __webpack_exports__["d"] = getBoxPlane;
/* unused harmony export Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__ = __webpack_require__("../../../../whs/build/whs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whs_build_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__ = __webpack_require__("../../../../physics-module-ammonext/build/physics-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var isMobile = (function () {
    var check = false;
    // tslint:disable-next-line:curly
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:curly
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
})();
var $world = {
    stats: 'fps',
    autoresize: 'window',
    gravity: [0, -100, 0],
    camera: {
        position: [0, 10, 50]
    },
    rendering: {
        background: {
            color: 0x162129
        },
        pixelRatio: isMobile ? false : window.devicePixelRatio,
        renderer: {
            antialias: !isMobile
        }
    },
    shadowmap: {
        type: isMobile ? __WEBPACK_IMPORTED_MODULE_0_three__["a" /* BasicShadowMap */] : __WEBPACK_IMPORTED_MODULE_0_three__["g" /* PCFSoftShadowMap */]
    }
};
var appDefaults = {
    camera: {
        position: new __WEBPACK_IMPORTED_MODULE_0_three__["l" /* Vector3 */](0, 10, 50),
        far: isMobile ? 200 : 1000
    },
    rendering: {
        bgColor: 0x162129,
        pixelRatio: isMobile ? false : window.devicePixelRatio,
        renderer: {
            antialias: !isMobile,
            shadowMap: {
                type: isMobile ? __WEBPACK_IMPORTED_MODULE_0_three__["a" /* BasicShadowMap */] : __WEBPACK_IMPORTED_MODULE_0_three__["g" /* PCFSoftShadowMap */]
            }
        }
    },
    physics: {
        ammo: 'https://whs-dev.surge.sh/examples/assets/ammo.js'
    }
};
var appModules = function (// appModules(camera, rendering);
    camera, rendering, physics, useControls) {
    if (camera === void 0) { camera = appDefaults.camera; }
    if (rendering === void 0) { rendering = appDefaults.rendering; }
    if (physics === void 0) { physics = appDefaults.physics; }
    if (useControls === void 0) { useControls = true; }
    return ([
        new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["SceneModule"](),
        new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["DefineModule"]('camera', new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["PerspectiveCamera"](Object.assign(camera, { fov: 75 }))),
        new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["RenderingModule"](rendering, { shadow: true }),
        new __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__["WorldModule"](physics),
        useControls ? new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["OrbitControlsModule"]() : null,
        new __WEBPACK_IMPORTED_MODULE_1_whs__["StateModule"](),
        new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["ResizeModule"]()
    ]);
};
var $colors = {
    bg: 0x162129,
    plane: 0x447F8B,
    mesh: 0xF2F2F2,
    softbody: 0x434B7F
};
function getBasicLights(intensity, position, distance, shadowmap) {
    if (intensity === void 0) { intensity = 0.5; }
    if (position === void 0) { position = [0, 10, 10]; }
    if (distance === void 0) { distance = 100; }
    if (shadowmap === void 0) { shadowmap = {}; }
    return {
        pointLight: {
            intensity: intensity,
            distance: distance,
            shadow: Object.assign({
                fov: 90
            }, shadowmap),
            position: position
        },
        ambientLight: {
            intensity: 1 - intensity
        }
    };
}
function getPlane(size) {
    if (size === void 0) { size = 100; }
    return {
        geometry: {
            width: size,
            height: size
        },
        modules: [
            new __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__["PlaneModule"]({
                mass: 0
            })
        ],
        material: new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* MeshPhongMaterial */]({ color: 0x447F8B }),
        rotation: {
            x: -Math.PI / 2
        }
    };
}
function getBoxPlane(size, color) {
    if (size === void 0) { size = 100; }
    if (color === void 0) { color = 0x447F8B; }
    return {
        geometry: {
            width: size,
            height: 1,
            depth: size
        },
        modules: [
            new __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__["BoxModule"]({
                mass: 0
            })
        ],
        material: new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* MeshPhongMaterial */]({ color: color })
    };
}
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    // tslint:disable-next-line:no-bitwise
    var r = (bigint >> 16) & 255;
    // tslint:disable-next-line:no-bitwise
    var g = (bigint >> 8) & 255;
    // tslint:disable-next-line:no-bitwise
    var b = bigint & 255;
    return "rgba(" + r + ", " + g + ", " + b + ", 1.0)";
}
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(params) {
        if (params === void 0) { params = {}; }
        return _super.call(this, params, Object.assign(__WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["MeshComponent"].defaults, {
            text: 'Hello world!',
            color: '#ffffff',
            size: 40
        })) || this;
    }
    Label.prototype.build = function () {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        var _a = this, canvas = _a.canvas, ctx = _a.ctx;
        var _b = this.params, text = _b.text, bgColor = _b.bgColor, color = _b.color, size = _b.size;
        ctx.font = "Bold " + size + "px Arial";
        ctx.fillStyle = color;
        ctx.lineWidth = 4;
        ctx.textAlign = 'center';
        // const size = ctx.measureText(text);
        ctx.fillText(text, 150, 75);
        // ctx.fillStyle = 'green';
        // ctx.fillRect(10, 10, 100, 100);
        var texture = new __WEBPACK_IMPORTED_MODULE_0_three__["j" /* Texture */](this.canvas);
        texture.needsUpdate = true;
        var sprite = new __WEBPACK_IMPORTED_MODULE_0_three__["h" /* Sprite */](new __WEBPACK_IMPORTED_MODULE_0_three__["i" /* SpriteMaterial */]({ map: texture }));
        return sprite;
    };
    return Label;
}(__WEBPACK_IMPORTED_MODULE_1_whs__["MeshComponent"]));

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "../../../../../src/example/helloword/helloworld.component.html":
/***/ (function(module, exports) {

module.exports = "<whs-sence [modules]=\"containerModules\">\n  <whs-sphere #component [params]=\"sphereParams\"></whs-sphere>\n\n  <whs-box #component [params]=\"planeParams\"></whs-box>\n\n  <whs-ambient-light #component [params]=\"ambientLightParams\"></whs-ambient-light>\n\n  <whs-point-light #component [params]=\"pointLightParams\"></whs-point-light>\n</whs-sence>\n"

/***/ }),

/***/ "../../../../../src/example/helloword/helloworld.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloWorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/example/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_whs_build_whs__ = __webpack_require__("../../../../whs/build/whs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_whs_build_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_whs_build_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_physics_module_ammonext__ = __webpack_require__("../../../../physics-module-ammonext/build/physics-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_physics_module_ammonext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_physics_module_ammonext__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// function resolveFront(path): Promise<Font> {
//   return new Promise(resolve => {
//     (new THREE.FontLoader()).load(path, resolve);
//   });
// }
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.containerModules = [
            new __WEBPACK_IMPORTED_MODULE_2_whs__["SceneModule"](),
            new __WEBPACK_IMPORTED_MODULE_3_whs_build_whs__["DefineModule"]('camera', new __WEBPACK_IMPORTED_MODULE_2_whs__["PerspectiveCamera"]({
                position: new __WEBPACK_IMPORTED_MODULE_4_three__["l" /* Vector3 */](0, 10, 50),
                far: 1000,
            })),
            new __WEBPACK_IMPORTED_MODULE_2_whs__["RenderingModule"]({
                bgColor: 0x162129,
                renderer: {
                    antialias: true,
                    shadowmap: {
                        type: __WEBPACK_IMPORTED_MODULE_4_three__["g" /* PCFSoftShadowMap */],
                    },
                }
            }, { shadow: true }),
            new __WEBPACK_IMPORTED_MODULE_5_physics_module_ammonext__["WorldModule"]({
                ammo: 'https://whs-dev.surge.sh/examples/assets/ammo.js',
            }),
            new __WEBPACK_IMPORTED_MODULE_2_whs__["OrbitControlsModule"](),
            new __WEBPACK_IMPORTED_MODULE_2_whs__["ResizeModule"](),
        ];
        this.sphereParams = {
            geometry: {
                radius: 3,
                widthSegments: 32,
                heightSegments: 32
            },
            modules: [
                new __WEBPACK_IMPORTED_MODULE_5_physics_module_ammonext__["SphereModule"]({
                    mass: 10
                })
            ],
            material: new __WEBPACK_IMPORTED_MODULE_4_three__["e" /* MeshPhongMaterial */]({
                color: __WEBPACK_IMPORTED_MODULE_1__global__["a" /* $colors */].mesh
            }),
            position: [0, 100, 0]
        };
        this.planeParams = Object(__WEBPACK_IMPORTED_MODULE_1__global__["d" /* getBoxPlane */])();
        this.pointLightParams = Object(__WEBPACK_IMPORTED_MODULE_1__global__["c" /* getBasicLights */])().pointLight;
        this.ambientLightParams = Object(__WEBPACK_IMPORTED_MODULE_1__global__["c" /* getBasicLights */])().ambientLight;
    }
    return HelloWorldComponent;
}());
HelloWorldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-helloworld',
        template: __webpack_require__("../../../../../src/example/helloword/helloworld.component.html"),
    }),
    __metadata("design:paramtypes", [])
], HelloWorldComponent);

//# sourceMappingURL=helloworld.component.js.map

/***/ }),

/***/ "../../../../../src/example/helloword/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helloworld_component__ = __webpack_require__("../../../../../src/example/helloword/helloworld.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__helloworld_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/mouse/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mouse_component__ = __webpack_require__("../../../../../src/example/mouse/mouse.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mouse_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/mouse/mouse.component.html":
/***/ (function(module, exports) {

module.exports = "<whs-sence [id]=\"'c1'\" [modules]=\"containerModules\">\n  <whs-sphere #component [params]=\"sphereParams\" (ready)=\"sphereReady($event)\"></whs-sphere>\n\n  <whs-box #component [params]=\"planeParams\"></whs-box>\n\n  <whs-ambient-light #component [params]=\"ambientLightParams\"></whs-ambient-light>\n\n  <whs-point-light #component [params]=\"pointLightParams\"></whs-point-light>\n</whs-sence>\n"

/***/ }),

/***/ "../../../../../src/example/mouse/mouse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs__ = __webpack_require__("../../../../whs/build/whs.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__ = __webpack_require__("../../../../whs/build/whs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whs_build_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_physics_module_ammonext__ = __webpack_require__("../../../../physics-module-ammonext/build/physics-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_physics_module_ammonext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_physics_module_ammonext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global__ = __webpack_require__("../../../../../src/example/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MouseComponent = (function () {
    function MouseComponent() {
        this.containerModules = [
            new __WEBPACK_IMPORTED_MODULE_1_whs__["SceneModule"](),
            new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["DefineModule"]('camera', new __WEBPACK_IMPORTED_MODULE_1_whs__["PerspectiveCamera"]({
                position: new __WEBPACK_IMPORTED_MODULE_3_three__["l" /* Vector3 */](0, 10, 50),
                far: 1000,
            })),
            new __WEBPACK_IMPORTED_MODULE_1_whs__["RenderingModule"]({
                bgColor: 0x162129,
                renderer: {
                    antialias: true,
                    shadowmap: {
                        type: __WEBPACK_IMPORTED_MODULE_3_three__["g" /* PCFSoftShadowMap */],
                    },
                }
            }, { shadow: true }),
            new __WEBPACK_IMPORTED_MODULE_4_physics_module_ammonext__["WorldModule"]({
                ammo: 'https://whs-dev.surge.sh/examples/assets/ammo.js',
            }),
            new __WEBPACK_IMPORTED_MODULE_1_whs__["OrbitControlsModule"](),
            new __WEBPACK_IMPORTED_MODULE_1_whs__["ResizeModule"](),
        ];
        this.sphereParams = {
            geometry: {
                radius: 3,
                widthSegments: 32,
                heightSegments: 32
            },
            modules: [
                new __WEBPACK_IMPORTED_MODULE_4_physics_module_ammonext__["SphereModule"]({
                    mass: 10
                })
            ],
            material: new __WEBPACK_IMPORTED_MODULE_3_three__["e" /* MeshPhongMaterial */]({
                color: __WEBPACK_IMPORTED_MODULE_5__global__["a" /* $colors */].mesh
            }),
            position: [0, 100, 0]
        };
        this.planeParams = Object(__WEBPACK_IMPORTED_MODULE_5__global__["d" /* getBoxPlane */])();
        this.pointLightParams = Object(__WEBPACK_IMPORTED_MODULE_5__global__["c" /* getBasicLights */])().pointLight;
        this.ambientLightParams = Object(__WEBPACK_IMPORTED_MODULE_5__global__["c" /* getBasicLights */])().ambientLight;
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_whs__["VirtualMouseModule"]();
        this.containerModules.push(this.mouse);
    }
    MouseComponent.prototype.sphereReady = function (sphere) {
        this.mouse.track(sphere);
        sphere.on('mouseover', function () {
            sphere.material.color.set(0xffff00);
            console.log('mouseover');
        });
        sphere.on('mousemove', function () {
            console.log('mousemove');
        });
        sphere.on('mouseout', function () {
            sphere.material.color.set(__WEBPACK_IMPORTED_MODULE_5__global__["a" /* $colors */].mesh);
            console.log('mouseout');
        });
        sphere.on('click', function () {
            alert('click!');
        });
    };
    return MouseComponent;
}());
MouseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mouse',
        template: __webpack_require__("../../../../../src/example/mouse/mouse.component.html")
    }),
    __metadata("design:paramtypes", [])
], MouseComponent);

//# sourceMappingURL=mouse.component.js.map

/***/ }),

/***/ "../../../../../src/example/saturn/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saturn_component__ = __webpack_require__("../../../../../src/example/saturn/saturn.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__saturn_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/saturn/saturn.component.html":
/***/ (function(module, exports) {

module.exports = "<whs-sence [modules]=\"containerModules\">\n  <whs-ambient-light #component [params]=\"ambientLightParams\"></whs-ambient-light>\n  <whs-directional-light #component [params]=\"directionalLightParams\"></whs-directional-light>\n  <whs-group\n    #component\n    [params]=\"spaceParams\">\n\n    <whs-tetrahedron\n      #component\n      [whsLoop]=\"service.planetLoop()\"\n      [params]=\"planetParams\"></whs-tetrahedron>\n\n    <whs-group #component>\n      <ng-container *ngFor=\"let particle of particles\">\n        <whs-box #component *ngIf=\"particle.type === 'Box'\" [params]=\"particle.params\" [whsLoop]=\"service.particleLoop()\" (ready)=\"service.particleReady($event)\"></whs-box>\n        <whs-cylinder #component *ngIf=\"particle.type === 'Cylinder'\" [params]=\"particle.params\" [whsLoop]=\"service.particleLoop()\" (ready)=\"service.particleReady($event)\"></whs-cylinder>\n        <whs-dodecahedron #component *ngIf=\"particle.type === 'Dodecahedron'\" [params]=\"particle.params\" [whsLoop]=\"service.particleLoop()\" (ready)=\"service.particleReady($event)\"></whs-dodecahedron>\n        <whs-sphere #component *ngIf=\"particle.type === 'Sphere'\" [params]=\"particle.params\" [whsLoop]=\"service.particleLoop()\" (ready)=\"service.particleReady($event)\"></whs-sphere>\n      </ng-container>\n    </whs-group>\n\n  </whs-group>\n\n</whs-sence>\n"

/***/ }),

/***/ "../../../../../src/example/saturn/saturn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaturnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saturn_service__ = __webpack_require__("../../../../../src/example/saturn/saturn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaturnComponent = (function () {
    function SaturnComponent(service) {
        this.service = service;
        this.spaceParams = {
            rotation: {
                z: Math.PI / 12,
            },
        };
        this.ambientLightParams = {
            color: 0x663344,
            intensity: 2
        };
        this.containerModules = this.service.containerModules;
        this.planetParams = this.service.planetParams;
        this.directionalLightParams = this.service.directionalLight;
        this.particles = this.service.getParticle();
    }
    SaturnComponent.prototype.ready = function (instance) {
        instance.defer(function () {
            instance.applyModule();
        });
    };
    return SaturnComponent;
}());
SaturnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-saturn',
        template: __webpack_require__("../../../../../src/example/saturn/saturn.component.html"),
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__saturn_service__["a" /* SaturnService */],
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__saturn_service__["a" /* SaturnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__saturn_service__["a" /* SaturnService */]) === "function" && _a || Object])
], SaturnComponent);

var _a;
//# sourceMappingURL=saturn.component.js.map

/***/ }),

/***/ "../../../../../src/example/saturn/saturn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaturnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__ = __webpack_require__("../../../../whs/build/whs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whs_build_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_whs_build_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var radiusMax = 220; // Max radius of the asteroid belt.
var particleCount = 400; // Ammount of asteroids.
var particleMinRadius = 0.1; // Min of asteroid radius.
var particleMaxRadius = 4; // Max of asteroid radius.
var planetSize = 50; // Radius of planet.
var radiusMin = 110; // Min radius of the asteroid belt.
var colors = {
    green: 0x8fc999,
    blue: 0x5fc4d0,
    orange: 0xee5624,
    yellow: 0xfaff70
};
var mat = [
    new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshPhongMaterial */]({ color: colors.green, shading: __WEBPACK_IMPORTED_MODULE_2_three__["c" /* FlatShading */] }),
    new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshPhongMaterial */]({ color: colors.blue, shading: __WEBPACK_IMPORTED_MODULE_2_three__["c" /* FlatShading */] }),
    new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshPhongMaterial */]({ color: colors.orange, shading: __WEBPACK_IMPORTED_MODULE_2_three__["c" /* FlatShading */] }),
    new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshPhongMaterial */]({ color: colors.yellow, shading: __WEBPACK_IMPORTED_MODULE_2_three__["c" /* FlatShading */] })
];
var dynamicGeometry = new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["DynamicGeometryModule"]();
var material = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* MeshStandardMaterial */]({
    shading: __WEBPACK_IMPORTED_MODULE_2_three__["c" /* FlatShading */],
    emissive: 0x270000,
    roughness: 0.9,
});
var particleType = [
    {
        type: 'Dodecahedron',
        params: {
            geometry: {
                buffer: true,
                radius: 10
            },
            modules: [
                dynamicGeometry
            ],
            material: material
        }
    },
    {
        type: 'Box',
        params: {
            geometry: {
                buffer: true,
                width: 10,
                height: 10,
                depth: 10
            },
            modules: [
                dynamicGeometry
            ],
            material: material
        }
    },
    {
        type: 'Cylinder',
        params: {
            geometry: {
                buffer: true,
                radiusTop: 0,
                radiusBottom: 10,
                height: 10
            },
            modules: [
                dynamicGeometry
            ],
            material: material
        }
    },
    {
        type: 'Sphere',
        params: {
            geometry: {
                buffer: true,
                radius: 10
            },
            modules: [
                dynamicGeometry
            ],
            material: material
        }
    }
];
var SaturnService = (function () {
    function SaturnService() {
    }
    Object.defineProperty(SaturnService.prototype, "containerModules", {
        get: function () {
            return [
                new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["SceneModule"](),
                new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["DefineModule"]('camera', new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["PerspectiveCamera"]({
                    position: new __WEBPACK_IMPORTED_MODULE_2_three__["l" /* Vector3 */](0, 100, 400),
                    far: 2000,
                    fov: 75,
                    near: 1
                })),
                new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["RenderingModule"]({
                    bgColor: 0x2a3340,
                    renderer: {
                        antialias: true,
                        shadowmap: {
                            type: __WEBPACK_IMPORTED_MODULE_2_three__["g" /* PCFSoftShadowMap */]
                        }
                    }
                }, { shadow: true }),
                new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["OrbitControlsModule"](),
                new __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["ResizeModule"]()
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaturnService.prototype, "planetParams", {
        get: function () {
            return {
                geometry: {
                    radius: planetSize,
                    detail: 2
                },
                material: new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* MeshStandardMaterial */]({
                    color: 0xee5624,
                    shading: __WEBPACK_IMPORTED_MODULE_2_three__["c" /* FlatShading */],
                    roughness: 0.9,
                    emissive: 0x270000
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaturnService.prototype, "directionalLight", {
        get: function () {
            return {
                color: 0xffffff,
                intensity: 1.5,
                distance: 800,
                shadow: {
                    mapSize: {
                        width: 2048,
                        height: 2048
                    },
                    camera: {
                        left: -800,
                        right: 800,
                        top: 800,
                        bottom: -800,
                        far: 800
                    }
                },
                position: {
                    x: 300,
                    z: 300,
                    y: 100
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    SaturnService.prototype.getParticle = function () {
        var particles = [];
        for (var i = 0; i < particleCount; i++) {
            particles.push(particleType[Math.ceil(Math.random() * 3)]);
        }
        return particles;
    };
    SaturnService.prototype.particleReady = function (particle) {
        console.log('12312-1312', particle);
        var radius = particleMinRadius + Math.random() * (particleMaxRadius - particleMinRadius);
        particle.g_({
            radiusBottom: radius,
            radiusTop: 0,
            height: particle instanceof __WEBPACK_IMPORTED_MODULE_1_whs_build_whs__["Cylinder"] ? radius * 2 : radius,
            width: radius,
            depth: radius,
            radius: radius
        });
        particle.material = mat[Math.floor(4 * Math.random())]; // Set custom THREE.Material to mesh.
        // Particle data.
        particle.data = {
            distance: radiusMin + Math.random() * (radiusMax - radiusMin),
            angle: Math.random() * Math.PI * 2
        };
        // Set position & rotation.
        particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
        particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
        particle.position.y = -10 * Math.random() + 4;
        particle.rotation.set(Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());
    };
    SaturnService.prototype.particleLoop = function () {
        return function (host) {
            var particle = host._instance;
            particle.data.angle += 0.02 * particle.data.distance / radiusMax;
            particle.position.x = Math.cos(particle.data.angle) * particle.data.distance;
            particle.position.z = Math.sin(particle.data.angle) * particle.data.distance;
            particle.rotation.x += Math.PI / 60;
            particle.rotation.y += Math.PI / 60;
        };
    };
    SaturnService.prototype.planetLoop = function () {
        return function (host) {
            var planet = host._instance;
            planet.rotation.y += 0.005;
        };
    };
    return SaturnService;
}());
SaturnService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SaturnService);

//# sourceMappingURL=saturn.service.js.map

/***/ }),

/***/ "../../../../../src/example/terrain/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__terrain_component__ = __webpack_require__("../../../../../src/example/terrain/terrain.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__terrain_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/terrain/terrain.component.html":
/***/ (function(module, exports) {

module.exports = "<whs-sence [modules]=\"containerModules\">\n  <whs-ambient-light #component [params]=\"ambientLightParams\"></whs-ambient-light>\n  <whs-point-light #component [params]=\"pointLightParams\"></whs-point-light>\n  <whs-parametric #component [params]=\"terrainParams\" (ready)=\"ready($event)\"></whs-parametric>\n  <whs-sphere #component [params]=\"sphereParams\"></whs-sphere>\n</whs-sence>\n"

/***/ }),

/***/ "../../../../../src/example/terrain/terrain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerrainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/example/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__ = __webpack_require__("../../../../physics-module-ammonext/build/physics-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var func = function (u, v) {
    return new __WEBPACK_IMPORTED_MODULE_2_three__["l" /* Vector3 */](u * 100, Math.sin(u * 10) * 4, v * 100);
};
var TerrainComponent = (function () {
    function TerrainComponent() {
        this.containerModules = Object(__WEBPACK_IMPORTED_MODULE_1__global__["b" /* appModules */])({
            position: new __WEBPACK_IMPORTED_MODULE_2_three__["l" /* Vector3 */](0, 10, 100),
            far: 200,
        }).slice();
        this.terrainParams = {
            geometry: {
                func: func,
                slices: 40,
                stacks: 40
            },
            shadow: {
                cast: false
            },
            material: new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshPhongMaterial */]({
                color: __WEBPACK_IMPORTED_MODULE_1__global__["a" /* $colors */].mesh,
                side: __WEBPACK_IMPORTED_MODULE_2_three__["b" /* DoubleSide */]
            }),
            modules: [
                new __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__["HeightfieldModule"]({
                    mass: 0,
                    size: new __WEBPACK_IMPORTED_MODULE_2_three__["k" /* Vector2 */](40, 40),
                    autoAlign: true
                })
            ]
        };
        this.sphereParams = {
            geometry: {
                radius: 1,
                widthSegments: 32,
                heightSegments: 32
            },
            modules: [
                new __WEBPACK_IMPORTED_MODULE_3_physics_module_ammonext__["SphereModule"]({
                    mass: 2,
                    restitution: 1
                })
            ],
            material: new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* MeshPhongMaterial */]({
                color: __WEBPACK_IMPORTED_MODULE_1__global__["a" /* $colors */].mesh
            }),
            position: new __WEBPACK_IMPORTED_MODULE_2_three__["l" /* Vector3 */](-31, 20, 0) // -30, 120, -40
        };
        this.pointLightParams = Object(__WEBPACK_IMPORTED_MODULE_1__global__["c" /* getBasicLights */])(0.5, [0, 10, 10], 100, {
            bias: 0.0001,
            radius: 2,
            camera: {
                fov: 90
            }
        }).pointLight;
        this.ambientLightParams = Object(__WEBPACK_IMPORTED_MODULE_1__global__["c" /* getBasicLights */])(0.5, [0, 10, 10], 100, {
            bias: 0.0001,
            radius: 2,
            camera: {
                fov: 90
            }
        }).ambientLight;
    }
    TerrainComponent.prototype.ready = function (instance) {
        instance.defer(function () {
            instance.applyModule();
            console.log(instance);
        });
    };
    return TerrainComponent;
}());
TerrainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-terrain',
        template: __webpack_require__("../../../../../src/example/terrain/terrain.component.html"),
    }),
    __metadata("design:paramtypes", [])
], TerrainComponent);

//# sourceMappingURL=terrain.component.js.map

/***/ }),

/***/ "../../../../../src/example/text/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_component__ = __webpack_require__("../../../../../src/example/text/text.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__text_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/example/text/text.component.html":
/***/ (function(module, exports) {

module.exports = "<whs-sence [modules]=\"containerModules\">\n  <whs-text\n    #component\n    [params]=\"textParams\"></whs-text>\n</whs-sence>\n"

/***/ }),

/***/ "../../../../../src/example/text/text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/example/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__ = __webpack_require__("../../../../whs/build/whs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whs_build_whs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whs_build_whs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// function resolveFront(path): Promise<Font> {
//   return new Promise(resolve => {
//     (new THREE.FontLoader()).load(path, resolve);
//   });
// }
var TextComponent = (function () {
    function TextComponent() {
        this.containerModules = Object(__WEBPACK_IMPORTED_MODULE_1__global__["b" /* appModules */])({
            position: new __WEBPACK_IMPORTED_MODULE_3_three__["l" /* Vector3 */](0, 10, 200),
            far: 1000,
        }).slice();
        this.textParams = {
            text: 'hello ngx-whs',
            font: __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["Text"].load('./assets/gentilis_bold.typeface.json'),
            geometry: {
                size: 20,
                height: 5,
                curveSegments: 6
            },
            material: new __WEBPACK_IMPORTED_MODULE_3_three__["d" /* MeshBasicMaterial */]({
                color: 0xffffff
            }),
            position: [-100, 0, 0]
        };
        this.controlsModule = new __WEBPACK_IMPORTED_MODULE_2_whs_build_whs__["OrbitControlsModule"]();
        this.containerModules.push(this.controlsModule);
    }
    return TextComponent;
}());
TextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-text',
        template: __webpack_require__("../../../../../src/example/text/text.component.html"),
    }),
    __metadata("design:paramtypes", [])
], TextComponent);

//# sourceMappingURL=text.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example_app_module__ = __webpack_require__("../../../../../src/example/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__example_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/ngxWhs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxWhsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/components/index.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CORE_COMPONENT = [
    __WEBPACK_IMPORTED_MODULE_2__core__["h" /* SenceComponent */],
    __WEBPACK_IMPORTED_MODULE_2__core__["a" /* CameraComponent */],
    __WEBPACK_IMPORTED_MODULE_2__core__["d" /* LightComponent */],
    __WEBPACK_IMPORTED_MODULE_2__core__["f" /* MeshComponent */],
    __WEBPACK_IMPORTED_MODULE_2__core__["b" /* ComponentComponent */],
    __WEBPACK_IMPORTED_MODULE_2__core__["e" /* LoopDirective */],
];
var COMPONETS = [
    // camera
    __WEBPACK_IMPORTED_MODULE_3__components__["e" /* CubeCameraComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["q" /* OrthographicCameraComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["s" /* PerspectiveCameraComponent */],
    // light
    __WEBPACK_IMPORTED_MODULE_3__components__["a" /* AmbientLightComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["b" /* AreaLightComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["g" /* DirectionalLightComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["k" /* HemisphereLightComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["u" /* PointLightComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["z" /* SpotLightComponent */],
    // mesh
    __WEBPACK_IMPORTED_MODULE_3__components__["y" /* SphereComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["t" /* PlaneComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["c" /* BoxComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["d" /* ConeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["f" /* CylinderComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["h" /* DodecahedronComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["i" /* ExtrudeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["j" /* GroupComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["l" /* IcosahedronComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["m" /* ImporterComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["n" /* LatheComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["o" /* LineComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["p" /* OctahedronComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["r" /* ParametricComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["v" /* PolyhedronComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["w" /* RingComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["x" /* ShapeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["A" /* TetrahedronComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["B" /* TextComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["C" /* TorusComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["D" /* TorusknotComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["E" /* TubeComponent */],
];
var NgxWhsModule = NgxWhsModule_1 = (function () {
    function NgxWhsModule() {
    }
    NgxWhsModule.forRoot = function () {
        return {
            ngModule: NgxWhsModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_2__core__["g" /* PROVIDERS */].slice(),
        };
    };
    return NgxWhsModule;
}());
NgxWhsModule = NgxWhsModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__core__["c" /* CoreModule */],
        ],
        declarations: COMPONETS.slice(),
        exports: COMPONETS.concat(CORE_COMPONENT),
    })
], NgxWhsModule);



var NgxWhsModule_1;
//# sourceMappingURL=ngxWhs.module.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map