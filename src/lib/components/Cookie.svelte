<script lang="ts">
    import {addCookies} from "$lib/scripts/utils";
</script>

<button class="active:scale-[.98] hover:scale-105 transition-all duration-[30ms] max-w-[256px] aspect-square" 
    on:click={() => addCookies(5n)}>
    <img src="/cookie.webp" alt="Cookie" draggable="false">
</button>