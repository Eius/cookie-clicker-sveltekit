import type { BaseBuildingParams, ClickBuildingParams, PassiveBuildingParams } from "$lib/data/interfaces/buildings_I";
import { cookiesCount } from "../globalData";
import {get} from "svelte/store";
import type { BaseUpgrade } from "./upgrades_C";
import { updateBuildings } from '$lib/data/globalData';

export abstract class BaseBuilding {
    id: number;
    name: string;
    cost: bigint;
    iconPos: [number, number];
    owned: number;
    upgrades: BaseUpgrade[];

    constructor({id, name, cost, iconPos, upgrades}: BaseBuildingParams) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.iconPos = [iconPos[0], iconPos[1]];
        this.owned = 0;
        this.upgrades = upgrades;
    }

    buy() {
        if(get(cookiesCount) >= this.cost) {
            cookiesCount.update((value) => value - this.cost);
            this.owned++;
            updateBuildings();
            console.log("Building bought");
        } else {
            console.log(`Not enough cookies for ${this.name}`);
        }
    }
}

export class ClickBuilding extends BaseBuilding {
    baseClickAmount: number;

    constructor({id, name, cost, iconPos, upgrades, baseClickAmount}: ClickBuildingParams) {
        super({id, name, cost, iconPos, upgrades});
        this.baseClickAmount = baseClickAmount;
    }
}

export class PassiveBuilding extends BaseBuilding {
    baseCookiesPerSecond: number;

    constructor({id, name, cost, iconPos, upgrades, baseCookiesPerSecond}: PassiveBuildingParams) {
        super({id, name, cost, iconPos, upgrades});
        this.baseCookiesPerSecond = baseCookiesPerSecond;
    }
}