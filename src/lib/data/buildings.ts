import { BaseBuilding, PassiveBuilding, ClickBuilding } from '$lib/data/classes/buildings_C';
import { MultiplierUpgrade } from "$lib/data/classes/upgrades_C";
import { writable } from 'svelte/store';

export const buildings = writable<BaseBuilding[]>([
	new ClickBuilding({
        id: 0,
		name: 'Cursor',
		cost: 15n,
		iconPos: [0, 0],
		baseClickAmount: 1,
		upgrades: [
			new MultiplierUpgrade({
				id: 0,
				name: "Reinforced index finger",
				cost: 100n,
				iconPos: [0, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 0,
				name: "Carpal tunnel prevention cream",
				cost: 500n,
				iconPos: [0, 1],
				multiplier: 2 
			}),
		]
	}),
	new PassiveBuilding({
        id: 1,
		name: 'Grandma',
		cost: 100n,
		iconPos: [0, 1],
		baseCookiesPerSecond: 2,
		upgrades: [
			new MultiplierUpgrade({
				id: 1,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 1,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
		]
	}),
	new PassiveBuilding({
        id: 2,
		name: 'Farm',
		cost: 500n,
		iconPos: [0, 3],
		baseCookiesPerSecond: 2,
		upgrades: [
			new MultiplierUpgrade({
				id: 2,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 2,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
		]
	}),
	new PassiveBuilding({
        id: 3,
		name: 'Mine',
		cost: 2000n,
		iconPos: [0, 4],
		baseCookiesPerSecond: 2,
		upgrades: [
			new MultiplierUpgrade({
				id: 3,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 3,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
		]
	}),
	new PassiveBuilding({
        id: 4,
		name: 'Factory',
		cost: 7500n,
		iconPos: [0, 5],
		baseCookiesPerSecond: 2,
		upgrades: [
			new MultiplierUpgrade({
				id: 4,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 4,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
		]
	}),
    new PassiveBuilding({
        id: 5,
		name: 'Bank',
		cost: 50000n,
		iconPos: [0, 6],
		baseCookiesPerSecond: 2,
		upgrades: [
			new MultiplierUpgrade({
				id: 5,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 5,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
		]
	}),
    new PassiveBuilding({
        id: 6,
		name: 'Temple',
		cost: 1000000n,
		iconPos: [0, 7],
		baseCookiesPerSecond: 2,
		upgrades: [
			new MultiplierUpgrade({
				id: 6,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
			new MultiplierUpgrade({
				id: 6,
				name: "Forwards from grandma",
				cost: 100n,
				iconPos: [1, 0],
				multiplier: 2 
			}),
		]
	})
]);
