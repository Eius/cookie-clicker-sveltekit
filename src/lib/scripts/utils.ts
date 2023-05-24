import type { BaseBuilding } from "$lib/data/classes/buildings_C";
import type { BaseUpgrade } from "$lib/data/classes/upgrades_C";
import { cookiesCount } from "$lib/data/globalData";
import { upgrades } from "$lib/data/upgrades";
import { buildings } from "$lib/data/buildings";

export function addCookies(count: bigint) {
    cookiesCount.update(n => n + count)
}

export function activateUpgrade(upgrade: BaseUpgrade) {
    upgrades.update((upgrades) => {
        const u = upgrades.find((_upgrade) => _upgrade.id === upgrade.id)
        if (u) {
            u.activate();
        } else {
            console.log("Upgrade not found");
        }
        return upgrades;
    });
}

export function buyBuilding(building: BaseBuilding) {
    buildings.update((buildings) => {
        const b = buildings.find((_building) => _building.id === building.id);
        if (b) {
            b.buy();
        } else {
            console.log("Building not found");
        }
        return buildings;
    })
}