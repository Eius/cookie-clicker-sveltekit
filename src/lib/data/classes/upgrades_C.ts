import type { BaseUpgradeParams, IncrementalUpgradeParams, MultiplierUpgradeParams } from "$lib/data/interfaces/upgrades_I";
import { buildings } from "$lib/data/buildings";
import { cookiesCount } from "$lib/data/globalData";
import {get} from "svelte/store";
import type { BaseBuilding } from "$lib/data/classes/buildings_C";

export abstract class BaseUpgrade {
    id: number;
    name: string;
    cost: bigint;
    iconPos: [number, number];
    owned: boolean;
      
    constructor({id, name, cost, iconPos}: BaseUpgradeParams) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.iconPos = [iconPos[0], iconPos[1]];
        this.owned = false;
    }

    activate() {
        if(get(cookiesCount) >= this.cost) {
            cookiesCount.update((value) => value - this.cost);
            this.owned = true;
            console.log("Upgrade activated");
            this.removeItself();
        } else {
            console.log("Not enough cookies");
        }
    }

    protected removeItself() {
        const owningBuilding = get(buildings).find((building) => building.id === this.id);
        console.log(owningBuilding?.upgrades.indexOf(this));
    }
    
}

export class PercentUpgrade extends BaseUpgrade {
    amount: number;

    constructor({id, name, cost, iconPos, amount}: IncrementalUpgradeParams) {
        super({id, name, cost, iconPos});
        this.amount = amount;
    }
}

export class MultiplierUpgrade extends BaseUpgrade {
    multiplier: number;

    constructor({id, name, cost, iconPos, multiplier}: MultiplierUpgradeParams) {
        super({id, name, cost, iconPos});
        this.multiplier = multiplier;
    }
}