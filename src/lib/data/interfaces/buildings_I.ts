import type { BaseUpgrade } from "$lib/data/classes/upgrades_C";

export interface BaseBuildingParams {
    id: number;
    name: string;
    cost: bigint;
    iconPos: [number, number];
    upgrades: BaseUpgrade[];
}

export interface PassiveBuildingParams extends BaseBuildingParams {
    baseCookiesPerSecond: number;
}

export interface ClickBuildingParams extends BaseBuildingParams {
    baseClickAmount: number;
}