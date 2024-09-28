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
var axios_1 = require("../../utils/axios");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var Dashboard = function () {
    var _a = (0, react_1.useState)([]), isUser = _a[0], setIsUser = _a[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get('/api/users?page=2')];
                case 1:
                    res = _a.sent();
                    setIsUser(res.data.data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1, "cred missing");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        handleUser();
    }, []);
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.delete("/api/users/".concat(id))];
                case 1:
                    res = _a.sent();
                    console.log(res, "delete Successfull");
                    react_toastify_1.toast.success('Deleted successful!', {
                        position: 'top-right',
                        autoClose: 1000,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2, "cred missing");
                    react_toastify_1.toast.error('Delete failed. Please try again.', {
                        position: 'top-right',
                        autoClose: 1000,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleView = function (id) {
        navigate("/details/".concat(id));
    };
    var handleLogout = function () {
        localStorage.removeItem('token');
        react_toastify_1.toast.success('Logout successful!', {
            position: 'top-right',
            autoClose: 1000,
        });
        navigate('/');
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "relative overflow-x-auto shadow-md", children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-between p-2 bg-blue-500 mb-2', children: [(0, jsx_runtime_1.jsx)("h2", { className: 'text-2xl p-2  text-slate-300', children: "UserDetails" }), (0, jsx_runtime_1.jsx)("button", { className: 'bg-red-800 py-2 px-3 ml-[-10px] rounded-lg text-slate-300 text-xl ', onClick: handleLogout, children: "Logout" })] }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [(0, jsx_runtime_1.jsx)("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { scope: "col", className: "px-6 py-3", children: "Email" }), (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "px-6 py-3", children: "First Name" }), (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "px-6 py-3", children: "Last Name" }), (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "px-6 py-3", children: "Action" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: isUser.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("tr", { className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700", children: [(0, jsx_runtime_1.jsx)("th", { scope: "row", className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: item === null || item === void 0 ? void 0 : item.email }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4", children: item === null || item === void 0 ? void 0 : item.first_name }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4", children: item === null || item === void 0 ? void 0 : item.last_name }), (0, jsx_runtime_1.jsxs)("td", { className: "px-6 py-4", children: [(0, jsx_runtime_1.jsx)("a", { className: "font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4 cursor-pointer", onClick: function () { return handleView(item.id); }, children: "View" }), (0, jsx_runtime_1.jsx)("a", { className: "font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer", onClick: function () { return handleDelete(item.id); }, children: "Delete" })] })] })); }) })] })] }) }));
};
exports.default = Dashboard;
