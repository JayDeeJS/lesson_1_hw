import { $api } from "./requester"

const ENDPOINTS = {
    USERS: '/users'
}

export const fetchUsers = async () => {
    try {
        const response = await $api.get(ENDPOINTS.USERS)
        return response.data
    } catch (error) {
        console.error(error);
    }
}