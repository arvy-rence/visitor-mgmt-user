import { error } from '@sveltejs/kit';
import {getUserInfo} from "$lib/hooks/user";

// @ts-ignore
export async function load({ params }) {
    const {data} = await getUserInfo(params.email);

    // TODO fix errors in rendering
    if (data.length === 0) {
        throw error(404, 'low');
    }
    return data[0];
}