<script lang="ts">
	import { cookiesCount } from '$lib/data/globalData';
	import type { BaseBuilding } from '$lib/data/classes/buildings_C';
	import { buyBuilding } from '$lib/scripts/utils';

	export let building: BaseBuilding;
    let canBuy = false;

    $: {
        canBuy = $cookiesCount >= building.cost
    }
</script>

<button
	class="flex h-[64px] w-full" class:opacity-60={!canBuy}
	style="background-image: url('/storeTile.jpg');"
    on:click={() => buyBuilding(building)}
>
	<div
		class="h-[64px] aspect-square"
		style="background-image: url('/buildings.png'); 
        background-position: -{64 * building.iconPos[0]}px -{64 * building.iconPos[1]}px;"
	/>
	<div class="flex flex-col p-1">
		<p class="text-white text-2xl font-bold">{building.name}</p>
        <div class="flex items-center gap-1 {canBuy ? "text-green" : "text-red"}">
            <div>
                <img src="/money.png" alt="Money Icon" class="aspect-square" draggable="false">
            </div>
            <p class="text-sm">
                {building.cost}
            </p>
        </div>
	</div>
</button>

<style lang="postcss">
    button {
        background-position: 0px 0px;
    }

    button:nth-child(4n-2) {
        background-position: 0px 128px;
    }

    button:nth-child(4n-1) {
        background-position: 0px 192px;
    }

    button:nth-child(4n-3) {
        background-position: 0px 64px;
    }
</style>