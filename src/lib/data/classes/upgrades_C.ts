import type { BaseUpgradeParams, IncrementalUpgradeParams, MultiplierUpgradeParams } from "$lib/data/interfaces/upgrades_I";

export abstract class BaseUpgrade {
    name: string;
    cost: number;
    iconPos: [number, number];
    
    constructor({name, cost, pos}: BaseUpgradeParams) {
        this.name = name;
        this.cost = cost;
        this.iconPos = [pos[0], pos[1]];
    }

    activate() {
        console.log("Upgrade activated")
    }
    
}

export class IncrementalUpgrade extends BaseUpgrade {
    amount: number;

    constructor({name, cost, pos, amount}: IncrementalUpgradeParams) {
        super({name, cost, pos});
        this.amount = amount;
    }
}

export class MultiplierUpgrade extends BaseUpgrade {
    multiplier: number;

    constructor({name, cost, pos, multiplier}: MultiplierUpgradeParams) {
        super({name, cost, pos});
        this.multiplier = multiplier;
    }
}