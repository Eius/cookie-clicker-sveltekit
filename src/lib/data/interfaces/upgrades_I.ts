import type { BaseUpgrade } from "$lib/data/classes/upgrades_C";

export interface BaseUpgradeParams {
    id: number;
    name: string;
    cost: bigint;
    iconPos: [number, number];
}

export interface IncrementalUpgradeParams extends BaseUpgradeParams {
    amount: number;
}

export interface MultiplierUpgradeParams extends BaseUpgradeParams {
    multiplier: number;
}