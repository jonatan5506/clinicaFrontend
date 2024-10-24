import axios from "axios"
import { parseCookies } from "nookies";

export const ApiConfig = (ctx = undefined) => {
    const cookies = parseCookies(ctx)
    const api = axios.create({
        baseURL: 'http://localhost:3333/api',
        headers: {
            Authorization: 'Bearer '+cookies['@clinica.token']
        }
    });

    api.interceptors.request.use(function (config){
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    return api;
}