"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var instance = axios_1.default.create({
    baseURL: ' https://reqres.in/',
});
instance.interceptors.request.use(function (config) {
    var token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = "bearer ".concat(token);
    }
    console.log('Request Interceptor:', config);
    return config;
}, function (error) {
    console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
});
exports.default = instance;
