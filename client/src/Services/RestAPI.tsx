import axios from "axios";

/**
 * List all workers from DB
 * @type GET
 * @returns response
 */
export const getAllWorkers = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URI}worker`).then(res => res.data)
}

/**
 * Login
 * @type POST
 * @returns response
 */
export const userLogin = (name: string, password: string) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URI}login`, {
        name: name,
        password: password
    }).then(res => res.data)
}

/**
 * Add worker
 * @type POST
 * @returns response
 */
export const addWorker = (name: string, password: string) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URI}worker`, {
        name: name,
        password: password
    }).then(res => res.data)
}

/**
 * Get worker shift
 * @type GET
 * @returns response
 */
export const getWorkerIdShift = (user_id: number, token: string) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URI}worker/${user_id}/shift`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data)
}

/**
 * Add worker shift
 * @type POST
 * @returns response
 */
export const addWorkerShift = (id: number, day: string, time_slot: string, token: string) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URI}worker/${id}/shift`, {
        day: day,
        time_slot: time_slot
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data)
}

/**
 * Remove shift
 * @type DELETE
 * @returns response
 */
export const removeShift = (id: number, shiftID: number, token: string) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_URI}worker/${id}/shift/${shiftID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data)
}

/**
 * Edit shift
 * @type PUT
 * @returns response
 */
export const editShift = (id: number, day: string, time_slot: string, shiftID: number, token: string) => {
    return axios.put(`${process.env.REACT_APP_BACKEND_URI}worker/${id}/shift/${shiftID}`, {
        day: day,
        time_slot: time_slot
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data)
}