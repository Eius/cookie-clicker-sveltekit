<script lang="ts">
    /* Components */
	import PanelHorizontal from "./partials/WoodHorizontal.svelte";
	import Upgrade from "./partials/Upgrade.svelte";

    /* Data */
    import { upgrades } from '$lib/data/upgrades';
</script>

<div class="flex flex-col bg-blue">
    <h3 class="text-white text-3xl text-center p-2 font-bold">
        Store
    </h3>
    <PanelHorizontal />
    <div class="relative flex flex-wrap max-h-[70px] hover:max-h-[120px] overflow-y-scroll
                transition-all duration-100 ease-linear ">
        {#each upgrades as upgrade}
            <Upgrade iconPos={upgrade.iconPos}/>
        {/each}
    </div>
    <PanelHorizontal />
    <div class="flex flex-col h-[1000px] overflow-scroll">
        {#each Array(100) as _}
            <p class="text-center py-4">Upgrade will be here</p>
        {/each}
    </div>
</div>

<style lang="postcss">
    
</style>