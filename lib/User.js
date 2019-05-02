"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An enum of user providers.
 */
var Provider;
(function (Provider) {
    Provider["GOOGLE"] = "GOOGLE";
})(Provider = exports.Provider || (exports.Provider = {}));
/**
 * An enum of user roles.
 */
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["UNPAIRED_DEVICE"] = "UNPAIRED_DEVICE";
    Role["PAIRED_DEVICE"] = "PAIRED_DEVICE";
})(Role = exports.Role || (exports.Role = {}));
