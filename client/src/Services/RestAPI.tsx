import axios from "axios";

/**
 * List all workers from DB
 * @type GET
 * @returns Axios Response
 */
export const getAllWorkers = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URI}worker`).then(res => res.data)
}

export const userLogin = (name: string, password: string) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URI}login`, {
        name: name,
        password: password
    }).then(res => res.data)
}