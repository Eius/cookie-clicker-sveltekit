import {writable} from "svelte/store";

export let cookiesCount = writable(BigInt(999n));
export let cookiesPerSecond = writable<number>(0);