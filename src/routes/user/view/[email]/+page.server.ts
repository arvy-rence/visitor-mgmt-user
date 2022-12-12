import { error } from '@sveltejs/kit';
import {getUserInfo} from "$lib/hooks/user";

// @ts-ignore
export async function load({ params }) {
    const {data} = await getUserInfo(params.email);

    if (data) {
        return data[0];
    }

    throw error(404, 'Not found');
}