<script lang="ts">
	import BakeryName from "$lib/components/BakeryName.svelte";
	import Cookie from "$lib/components/Cookie.svelte";
	import CookieCounter from "$lib/components/CookieCounter.svelte";
	import Store from "$lib/components/Store.svelte";
	import PanelVertical from "$lib/components/partials/WoodVertical.svelte";


</script>

<div class="h-screen flex overflow-hidden">
    <div class="bg-blue grid grid-rows-3 w-[30%]">
        <div class="row-span-2 flex flex-col justify-center">
            <div class="flex flex-col gap-3">
                <BakeryName />
                <CookieCounter />
            </div>
            <div class="flex justify-center mt-6">
                <Cookie />
            </div>
        </div>
        <div class="row-span-1">

        </div>
    </div>
    <PanelVertical />
    <div class="flex-grow">

    </div>
    <PanelVertical />
    <div class="w-[300px]">
        <Store />
    </div>
</div>