import axios from '$lib/index';

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

