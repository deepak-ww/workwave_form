import axios, { AxiosInstance } from 'axios';

var instance: AxiosInstance;

const getInstance = (): AxiosInstance => {
    if (!instance) {
        instance = axios.create({
            baseURL: 'http://dummy.restapiexample.com/api/v1'

        });
    }
    return instance;
}

const configAuthorization = (auth_token: string) => {
    return getInstance().defaults.headers.common['Authorization'] = auth_token;
}


export { getInstance, configAuthorization };