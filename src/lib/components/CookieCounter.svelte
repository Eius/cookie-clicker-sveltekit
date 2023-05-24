<script lang="ts">
    import {cookiesCount} from "$lib/data/globalData";
    import {cookiesPerSecond} from "$lib/data/globalData";
</script>

<div class="bg-transparent w-full py-2">
    <p class="text-center text-3xl text-white font-bold -m-1">
        {$cookiesCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} 
        {#if $cookiesCount >= 100000}<br>{/if} 
        {$cookiesCount === 1n ? "cookie" : "cookies"}
    </p>
    <p class="text-center text-white font-bold">
        per second {$cookiesPerSecond}
    </p>
</div>