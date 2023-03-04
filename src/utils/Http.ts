import axios, {AxiosError, AxiosInterceptorOptions, AxiosRequestConfig} from "axios";
import {network} from "@/utils/config";

interface ResponseResult<T = any> {
    code: number
    data: T
    success: boolean
    message: string
}

const instance = axios.create({
    baseURL: network.baseUrl + network.urlPrefix,
    timeout: network.timeout
});

instance.interceptors.request.use((config) => {
    return config;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    const code = response.data.code;
    if (code === 200) {
        return response.data
    } else {
        return Promise.reject(response.data)
    }
}, (error: AxiosError) => {
    let message = ''
    const status = error.response?.status
    switch (status) {
        case 401:
            message = 'token 失效，请重新登录'
            break;
        case 403:
            message = '拒绝访问'
            break;
        case 404:
            message = '请求地址错误'
            break;
        case 500:
            message = '服务器故障'
            break;
        default:
            message = '网络连接故障'
    }
    console.log(message);
    return Promise.reject(error)
});

class Http {

    static request(config: AxiosRequestConfig): Promise<ResponseResult> {
        return instance.request(config).then(res => {

            const axiosRes = res as any;

            const code = axiosRes.code;
            const result: ResponseResult = {
                code,
                message: "ok",
                success: true,
                data: null
            };

            if (code === 200) {

                delete axiosRes.code;
                result.data = {};
                Object.keys(axiosRes).forEach(key => result.data[key] = axiosRes[key]);

                return Promise.resolve(result);
            }

            result.success = false;

            return Promise.reject(result);

        });
    }

    static get({ url, query}: { url: string, query: object }) {
        return this.request({
            method: "GET",
            url,
            params: query
        })
    }

    static post() {

    }

}

Http.get({
    url: '/lyric',
    query: { id: 33894312 }
}).then(res => {
    console.log(res);
});

export default Http;
