<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { store } from "$lib/hooks/auth";

  onMount(async () => {
    if ($store === null) await goto("/signup");
    else {
      // await goto(`/user/view/${session.user.email}`)
    }
  });
</script>
