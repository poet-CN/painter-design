/*tslint:disable*/
/*
 * date: 2018/10/24
 * usage: 全局请求函数。用法：在services文件夹调用$post或者$get。
 */

import axios from 'axios';
import { buildQueryUrl } from './utils';

let cancel: any;
const CancelToken = axios.CancelToken;

interface Options {
    params?: any;
    data?: any;
}

// 响应拦截器即异常处理
axios.interceptors.response.use(
    response => response,
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求。';
                    break;
                case 401:
                    err.message = '未授权。';
                    break;
                case 403:
                    err.message = '拒绝访问。';
                    break;
                case 404:
                    err.message = '未找到该资源。';
                    break;
                case 405:
                    err.message = '请求方法未允许。';
                    break;
                case 408:
                    err.message = '请求超时。';
                    break;
                case 500:
                    err.message = '服务器端出错。';
                    break;
                case 501:
                    err.message = '网络未实现。';
                    break;
                case 502:
                    err.message = '网络错误。';
                    break;
                case 503:
                    err.message = '服务不可用。';
                    break;
                case 504:
                    err.message = '网络超时。';
                    break;
                case 505:
                    err.message = 'http版本不支持该请求。';
                    break;
                default:
                    err.message = `连接错误。`;
            }
            console.error(`错误${err.response.status}: ${err.message}`);
        }
        return Promise.resolve(err.response);
    },
);

axios.defaults.baseURL = '/';

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
};
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// get请求
export const $get = (url: string, options?: Options) =>
    new Promise((resolve, reject) => {
        let params = undefined;
        if (typeof options == 'object') {
            params = options.params;
        }
        axios({
            method: 'get',
            url,
            params,
            cancelToken: new CancelToken(c => {
                cancel = c;
            }),
        })
            .then(({ data }) => {
                resolve(data);
            })
            .catch(res => {
                reject(res);
            });
    });
// post请求
export const $post = (url: string, options?: Options) =>
    new Promise((resolve, reject) => {
        let params = undefined;
        let data = undefined;
        if (typeof options == 'object') {
            params = options.params;
            data = options.data;
        }
        axios({
            method: 'post',
            url: buildQueryUrl(url, params),
            data,
            cancelToken: new CancelToken(c => {
                cancel = c;
            }),
        })
            .then(res => {
                if (!res) {
                    return;
                }
                const { data, status } = res;
                if (status !== 200) {
                    return;
                }
                resolve(data);
            })
            .catch(res => {
                reject(res);
            });
    });
