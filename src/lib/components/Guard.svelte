<script>
    import {goto} from "$app/navigation"
    import {store} from "$lib/hooks/auth"
    import {onMount} from "svelte";

    let loggedIn = false

    onMount(() => {
        if ($store === null){
            goto("/login")
        }
        else {
            loggedIn = true
        }
    })

    const redirect = async () => {
        await goto("/login")
    }
</script>

{#if loggedIn}
    <slot/>
{/if}

