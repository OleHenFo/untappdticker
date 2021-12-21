import { writable } from 'svelte/store';

export let auth_token = writable(0);
export let code = writable(0);
export let venue = writable(0);
export let checkins = writable([]);
