import {get, writable} from "svelte/store";
import type { BaseUpgrade } from "$lib/data/classes/upgrades_C";
import type { BaseBuilding } from "$lib/data/classes/buildings_C";
import { buildings } from "$lib/data/buildings";

export function updateBuildings() {
    let _buildings: BaseBuilding[] = [];
    const b = get(buildings);
    for (let i = 0; i < b.length; i++) {
        const building = b[i];
        if(building.owned > 0) {
            _buildings.push(building);
        } else {
            _buildings.push(building);
            break;
        }
    };
    availableBuildings.set(_buildings);
    updateUpgrades();
}

export function updateUpgrades() {
    let _upgrades: BaseUpgrade[] = [];
    const buildings = get(availableBuildings);
    for (let i = 0; i < buildings.length; i++) {
        const upgrades = buildings[i].upgrades;
        for (let i = 0; i < upgrades.length; i++) {
            const upgrade = upgrades[i];
            if(!upgrade.owned) {
                _upgrades.push(upgrade);
                break;
            }
        }
    };
    availableUpgrades.set(_upgrades);
}

export let availableBuildings = writable<BaseBuilding[]>([]);
export let availableUpgrades = writable<BaseUpgrade[]>([]);

updateBuildings();
updateUpgrades()

export let cookiesCount = writable(BigInt(999n));
export let cookiesPerSecond = writable<number>(0);

