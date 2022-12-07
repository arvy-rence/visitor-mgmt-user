<script>
    import {notifs} from "$lib/stores/notifications";
    import Notification from "./Notification.svelte";
</script>

{#key $notifs}
    <div style="position: fixed; top: 8%; right: 2%; z-index: 50; max-width: 25vw; min-width: 25vw">
        {#each $notifs as notif}
            <Notification notif={notif}/>
        {/each}
    </div>
{/key}