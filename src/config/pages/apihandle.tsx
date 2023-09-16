import axios from "axios";

export const apiHandle = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", headers: {
        Authorization: `Bearer`
    }
})

export const Get = (endpoint: string, id?: string | number) => {
    return apiHandle.get(`${endpoint}/${id ? id : ""}`)
}
export const Post = (endpoint: string, model: {}) => {
    return apiHandle.post(endpoint, model)
}

export const Put = (endpoint: string, model: {}) => {
    return apiHandle.put(endpoint, model)
}

export const Del = (endpoint: string) => {
    return apiHandle.delete(endpoint)
}