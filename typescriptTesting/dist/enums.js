"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERLEVEL = exports.PERMISSIONS = void 0;
var PERMISSIONS;
(function (PERMISSIONS) {
    PERMISSIONS[PERMISSIONS["ADMIN"] = 0] = "ADMIN";
    PERMISSIONS[PERMISSIONS["READ_ONLY"] = 1] = "READ_ONLY";
})(PERMISSIONS || (exports.PERMISSIONS = PERMISSIONS = {}));
const GOLD_USER = "gold_user";
const SILVER_USER = "silver_user";
const BRONZE_USER = "bronze_user";
var USERLEVEL;
(function (USERLEVEL) {
    USERLEVEL[USERLEVEL["GOLD_USER"] = 0] = "GOLD_USER";
    USERLEVEL[USERLEVEL["SILVER_USER"] = 1] = "SILVER_USER";
    USERLEVEL[USERLEVEL["BRONZE_USER"] = 2] = "BRONZE_USER";
})(USERLEVEL || (exports.USERLEVEL = USERLEVEL = {}));
//# sourceMappingURL=enums.js.map