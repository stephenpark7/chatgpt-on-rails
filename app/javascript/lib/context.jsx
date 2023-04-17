"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = exports.defaultUserData = void 0;
const react_1 = require("react");
exports.defaultUserData = {
    id: '',
    name: '',
    email: '',
    access_token: '',
};
exports.AppContext = (0, react_1.createContext)({
    user: exports.defaultUserData,
});
