import {BaseUpgrade, MultiplierUpgrade} from "$lib/data/classes/upgrades_C";
import { writable } from 'svelte/store';

export const upgrades = writable<BaseUpgrade[]>([ 
    new MultiplierUpgrade({
        id: 1,
        name: "Reinforced index finger",
        cost: 100n,
        iconPos: [0, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 2,
        name: "Carpal tunnel prevention cream",
        cost: 500n,
        iconPos: [0, 1],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 3,
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
    new MultiplierUpgrade({
        id: 5,
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
    new MultiplierUpgrade({
        id: 7,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 8,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 9,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 10,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 11,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 12,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
    new MultiplierUpgrade({
        id: 13,
        name: "Forwards from grandma",
        cost: 100n,
        iconPos: [1, 0],
        multiplier: 2 
    }),
]);