import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-test-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTestLibService {
    constructor() { }
}
AngularTestLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularTestLibService.ctorParameters = () => [];
/** @nocollapse */ AngularTestLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularTestLibService_Factory() { return new AngularTestLibService(); }, token: AngularTestLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-test-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTestLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularTestLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-test-lib',
                template: `
    <p>
      angular-test-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
AngularTestLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-test-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTestLibModule {
}
AngularTestLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularTestLibComponent],
                imports: [],
                exports: [AngularTestLibComponent]
            },] }
];

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
