<script lang="ts">
    import {notifs} from "$lib/stores/notifications";
    import {onMount, onDestroy} from "svelte";
    import {NotificationType} from "$lib/enums/NotificationType";

    type Notification = {
        msg: string,
        type: NotificationType,
        id: string
    }

    /**
     * type is one of the following:
     *      - info
     *      - warning
     *      - success
     */
    export let notif: Notification = <Notification>{};

    let timer;
    let timer2;
    let remainingTime = 0;

    const remove = () => {
        $notifs = $notifs.filter(notifa => notifa.id !== notif.id)
    }

    const start = (ms) => {
        remainingTime = ms;
        timer2 = setInterval(() => {
            remainingTime--
        }, 1);
        timer = setTimeout(() => {
            $notifs = $notifs.filter(notifa => notifa.id !== notif.id)
        }, ms)
    }

    const pause = () => {
        clearInterval(timer2)
        clearInterval(timer)
    }

    onMount(() => {
        start(5000)
    })

    onDestroy(() => {
        clearInterval(timer)
    })
</script>

{#if notif.type === NotificationType.SUCCESS}
    <div on:mouseenter={pause}
         on:mouseleave={e => start(remainingTime)}
         class="flex justify-between items-center mb-2">
        <div on:click={remove} class="delete"></div>
        <div class="flex flex-col">
            {notif.msg}
        </div>
    </div>
{:else if notif.type === NotificationType.INFO}
    <div on:mouseenter={pause}
         on:mouseleave={e => start(remainingTime)}
         class="flex justify-between items-center mb-2">
        <div on:click={remove} class="delete"></div>
        <div class="flex flex-col">
            {notif.msg}
        </div>
    </div>
{:else if notif.type === NotificationType.WARNING}
    <div on:mouseenter={pause}
         on:mouseleave={e => start(remainingTime)}
         class="flex justify-between items-center mb-2">
        <div on:click={remove} class="delete"></div>
        <div class="flex flex-col">
            {notif.msg}
        </div>
    </div>
{/if}