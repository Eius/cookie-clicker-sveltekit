<script lang="ts">
    import { cookiesCount } from '$lib/data/globalData';
	import type { BaseUpgrade } from "$lib/data/classes/upgrades_C";
	import { activateUpgrade } from "$lib/scripts/utils";

    export let upgrade: BaseUpgrade;
    let canBuy = false;

    $: {
        canBuy = $cookiesCount >= upgrade.cost
    }
</script>

<button class="flex items-center justify-center w-[60px] h-[60px] aspect-square 
        hover:-translate-y-[1px] { canBuy ? 'hover:backdrop-brightness-200' : 'opacity-60'}"
        style="background-image: url('/upgradeFrame.png'); background-position: 0px 0px;"
        on:click={() => activateUpgrade(upgrade)}>
    <div 
    class="inline-block relative w-[48px] h-[48px]" 
    style="background-image: url('/icons.png'); background-position: -{48*upgrade.iconPos[0]}px -{48*upgrade.iconPos[1]}px;">
    </div>
</button>

<style lang="postcss">
</style>