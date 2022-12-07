import {writable} from "svelte/store";
import {NotificationType} from "$lib/enums/NotificationType";

export let notifs = writable([])