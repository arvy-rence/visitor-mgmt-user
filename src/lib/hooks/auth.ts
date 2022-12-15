import axios from '$lib/index';
import {writable} from 'svelte/store';

export const store = writable(null);

let sessions = [];

export const getUserDetails = async (email: string, password: string): Promise<any> => {
    const {data} = await axios.post('/user/', {
        email,
        password
    })

    const user = data.data

    if ("session" in user) {
        sessions.push(user.session)
        store.set(user)
        return user
    }

    throw new Error(user.error);
}

export const logout = async () => {
    store.set(null)
}
