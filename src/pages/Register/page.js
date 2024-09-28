"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var axios_1 = require("../../utils/axios");
var Register = function () {
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios_1.default.post('/api/register', { email: email, password: password })];
                case 2:
                    _a.sent();
                    react_toastify_1.toast.success('Registration successful!', {
                        position: 'top-right',
                        autoClose: 1000,
                    });
                    navigate("/");
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error("Registration failed", error_1);
                    react_toastify_1.toast.error('Registration failed. Please try again.', {
                        position: 'top-right',
                        autoClose: 1000,
                    });
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)("section", { className: "bg-gray-50 dark:bg-gray-900", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: (0, jsx_runtime_1.jsxs)("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Create your account" }), (0, jsx_runtime_1.jsxs)("form", { className: "space-y-4 md:space-y-6", onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Your email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "name@company.com", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", required: true })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign Up" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm font-light text-gray-500 dark:text-gray-400", children: ["Don\u2019t have an account yet? ", (0, jsx_runtime_1.jsx)("span", { className: "font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer", onClick: function () { return navigate("/"); }, children: "Sign In" })] })] })] }) }) }) }));
};
exports.default = Register;
