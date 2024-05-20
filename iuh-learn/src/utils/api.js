import axios from "axios";
export const baseURL = 'http://localhost:'

export const TypeHTTP = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

export const api = ({ path, body, type, sendToken, port }) => {
    const accessToken = globalThis.localStorage.getItem('accessToken')
    return new Promise((rejects, resolve) => {
        switch (type) {
            case TypeHTTP.GET:
                axios.get(`${baseURL}${port}/api/v1${path}`, { headers: sendToken ? { accessToken } : {} })
                    .then(res => {
                        rejects(res.data)
                    })
                    .catch(res => {
                        resolve({ status: res.response?.status, message: res.response?.data })
                    })
                break
            case TypeHTTP.POST:
                axios.post(`${baseURL}${port}/api/v1${path}`, body, { headers: sendToken ? { accessToken } : {} })
                    .then(res => {
                        rejects(res.data)
                    })
                    .catch(res => {
                        resolve({ status: res.response?.status, message: res.response?.data })
                    })
                break
            case TypeHTTP.PUT:
                axios.put(`${baseURL}${port}/api/v1${path}`, body, { headers: sendToken ? { accessToken } : {} })
                    .then(res => {
                        rejects(res.data)
                    })
                    .catch(res => {
                        resolve({ status: res.response?.status, message: res.response?.data })
                    })
                break
            case TypeHTTP.DELETE:
                axios.delete(`${baseURL}${port}/api/v1${path}`, { headers: sendToken ? { accessToken } : {} })
                    .then(res => {
                        rejects(res.data)
                    })
                    .catch(res => {
                        resolve({ status: res.response?.status, message: res.response?.data })
                    })
                break
        }
    })
}