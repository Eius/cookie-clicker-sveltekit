<script lang="ts">
    /* Components */
	import PanelHorizontal from "./partials/WoodHorizontal.svelte";
	import Upgrade from "./partials/Upgrade.svelte";
    import Building from "./partials/Building.svelte";

    /* Data */ 
    import { availableUpgrades } from '$lib/data/globalData';
	import { availableBuildings } from "$lib/data/globalData";
</script>

<div class="flex flex-col bg-blue">
    <h3 class="text-white text-3xl text-center p-2 font-bold">
        Store
    </h3>
    <PanelHorizontal />
    <div class="relative flex flex-wrap max-h-[70px] hover:max-h-[120px] overflow-y-scroll
                transition-all duration-100 ease-linear ">
        {#each $availableUpgrades as upgrade}
            {#if upgrade.owned === false}
                <Upgrade {upgrade}/>
            {/if}
        {/each}
    </div>
    <PanelHorizontal />
    <div class="flex flex-col h-[1000px] overflow-scroll">
        {#each $availableBuildings as building}
            <Building {building} />
        {/each}
    </div>
</div>

<style lang="postcss">
    
</style>