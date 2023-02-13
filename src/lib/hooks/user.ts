import axios from '$lib/index';
import type {IReceivedUser} from "$types/User";

export const signup = async (email: string, password: string) => {
    try {
        const {data} = await axios.post('/user/confirm', {
            email: email,
            password: password
        })
        return data;
    } catch (e) {
        return {
            error: e
        };
    }
}

export const updateUserInfo = async (user: IReceivedUser) => {
    try {
        const {data} = await axios.patch(`/user/${user.email}`, user)
        return data
    } catch (e) {
        return {
            error: e
        }
    }
}

export const upsertUserInfo = async (user: IReceivedUser) => {
    try {
        const {data} = await axios.patch(`/user/upsert/${user.email}`, user)
        return data
    } catch (e) {
        return {
            error: e
        }
    }
}

export const getUserInfo = async (email: string): Promise<IReceivedUser|any> => {
    try {
        const {data} = await axios.get(`/user/${email}`)
        return data
    } catch (e) {
        return {
            error: "not found"
        }
    }
}

