"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var PrivateRoute = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isAuthenticated = _b[0], setIsAuthenticated = _b[1];
    (0, react_1.useEffect)(function () {
        var token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }, []);
    return isAuthenticated ? children : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/" });
};
exports.default = PrivateRoute;
