import { cookiesCount } from "$lib/data/globalData";

export function addCookies(count: bigint) {
    cookiesCount.update(n => n + count)
}