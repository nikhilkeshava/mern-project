
import axios from './axios'
import local from './localStorage'

class ApiJunction {
    makeRequest(params) {
        let token = params.token || local.getItem('token')
        // axios.interceptors.request.use(setHeaders(token));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.common['Content-Type'] = `application/json`;
        // return axios[params.method](params.url, params.body)
        if (params.method === 'get') {
            return axios.get(params.url, { params: params.params })
        }
        else if (params.method === 'post') {
            return axios.post(params.url, params.body).then(res=>{
                if(res.code===200){
                    return res.data
                }
                return res
            }).then(err=> { return err})
        }
        else if (params.method === 'put') {
            return axios.put(params.url, params.body)
        }
        else if (params.method === 'delete') {
            return axios.delete(params.url, params.body)
        }
        else if (params.method === 'patch') {
            return axios.patch(params.url, params.body)
        }
        else {
            return { success: false, msg: 'No method provided, get, post?' }
        }
    }

    login(params) {
        return axios.post(params.url, params.body)
    }
}

// function setHeaders(token) {
//     return function (config) {

//         let tokenHeader = `Bearer ${token}`
//         config.headers['Authorization'] = tokenHeader;
//         config.headers['Content-Type'] = 'application/json';

//         return config;
//     };
// }

export default new ApiJunction();