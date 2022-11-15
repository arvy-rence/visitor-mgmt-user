<script lang="ts">
    export let title: string;
    export let onClick;
    export let isFilled: boolean;
</script>

{#if isFilled}
    <button class="uppercase font-bold bg-primary rounded-lg text-white w-[10rem] h-[30px] w-full"
            on:click={onClick}>
        {title}
    </button>
{:else}
    <button class="uppercase font-bold bg-white rounded-lg border border-primary text-primary w-[10rem] h-[30px] w-full"
            on:click={onClick}>
        {title}
    </button>
{/if}