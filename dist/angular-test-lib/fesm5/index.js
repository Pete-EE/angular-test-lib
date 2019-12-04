import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-test-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularTestLibService = /** @class */ (function () {
    function AngularTestLibService() {
    }
    AngularTestLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularTestLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularTestLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularTestLibService_Factory() { return new AngularTestLibService(); }, token: AngularTestLibService, providedIn: "root" });
    return AngularTestLibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-test-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularTestLibComponent = /** @class */ (function () {
    function AngularTestLibComponent() {
    }
    /**
     * @return {?}
     */
    AngularTestLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AngularTestLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-angular-test-lib',
                    template: "\n    <p>\n      angular-test-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AngularTestLibComponent.ctorParameters = function () { return []; };
    return AngularTestLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-test-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularTestLibModule = /** @class */ (function () {
    function AngularTestLibModule() {
    }
    AngularTestLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AngularTestLibComponent],
                    imports: [],
                    exports: [AngularTestLibComponent]
                },] }
    ];
    return AngularTestLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularTestLibComponent, AngularTestLibModule, AngularTestLibService };
//# sourceMappingURL=index.js.map
