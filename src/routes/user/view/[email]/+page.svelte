<script lang="ts">
    import { goto } from "$app/navigation";
    import {logout as signout, store} from "$lib/hooks/auth"
    import Guard from "$lib/components/Guard.svelte";
    import toast, {Toaster} from "svelte-french-toast";
    import {toastOptions} from "$lib/util/options";

    export let data: any;

    console.log(data)
    console.log($store)

    const logout = async () => {
        await toast.promise(
            signout(),
            {
                loading: "Logging out...",
                success: "Logged out",
                error: "Failed to log out",
            },
            {
                ...toastOptions,
                duration: 2000,
            },
        )
        await goto('/login')
    }

    const editProfile = async () => {
        await goto(`/user/edit/${data.email}`)
    }
</script>

<Guard>
    <Toaster/>
    <div class="flex flex-col h-screen justify-center items-center">
        <h1 class="text-primary font-bold uppercase text-xl">
            Welcome {data.full_name}
        </h1>
        <h1 class="text-primary opacity-70 text-md">
            Save your QR code to gain access to ValACE Library's facilities
        </h1>
        <div class="drop-shadow-lg">
            <div class="py-[10%]">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={data.qr_code}&format=jpg"
                     alt="{data.email}"
                     class="px-3 py-3 border border-primary">
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <button class="w-[250px] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white my-2 inline-flex justify-center items-center"
                    on:click={editProfile}>
                <i class="fa-solid fa-pen-to-square pr-3"></i>
                Edit Profile
            </button>
            <button class="w-[250px] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white my-2">
                <a class=""
                   href="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={data.qr_code}&format=jpg"
                   download="qrcode.jpg">
                    <i class="fa-solid fa-circle-down pr-2"></i>
                    DOWNLOAD QR CODE
                </a>
            </button>
            <button class="w-[250px] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white my-2"
                    on:click={logout}>
                <i class="fa-solid fa-right-from-bracket pr-2"></i>
                LOG OUT
            </button>
        </div>
    </div>
</Guard>