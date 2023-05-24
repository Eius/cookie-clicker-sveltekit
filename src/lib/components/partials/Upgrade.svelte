<script lang="ts">
    export let iconPos: [x: number, y:number];
    const iconWidth: number = 48;
</script>

<button class="flex items-center justify-center w-[60px] h-[60px] hover:-translate-y-[1px] hover:backdrop-brightness-150
        min-w-[60px] aspect-square"
        style="background-image: url('/upgradeFrame.png'); background-position: 0 0;)">
    <div 
    class="inline-block relative w-[{iconWidth}px] h-[{iconWidth}px]" 
    style="background-image: url('/icons.png'); background-position: -{iconWidth*iconPos[0]}px -{iconWidth*iconPos[1]}px;">
    </div>
</button>

<style lang="postcss">
</style>