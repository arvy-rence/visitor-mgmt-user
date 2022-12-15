<script>
    import {onMount} from "svelte";
    import {goto} from "$app/navigation"
    import {store} from "$lib/hooks/auth"

    onMount(async () => {
        if (store === null)
            await goto("/login");
        else {
            // await goto(`/user/view/${session.user.email}`)
        }
    });
    console.log($store)
</script>
