import axios from "axios";


const instance = axios.create({
    baseURL: ' https://reqres.in/',
});

instance.interceptors.request.use(

    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `bearer ${token}`
        }
        console.log('Request Interceptor:', config);
        return config;
    },
    (error) => {
        console.error('Request Error Interceptor:', error);
        return Promise.reject(error);
    }
);

export default instance;











