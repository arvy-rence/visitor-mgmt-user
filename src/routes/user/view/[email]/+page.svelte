<script lang="ts">
    import { goto } from "$app/navigation";

    export let data: any;

    const logout = async () => {
        await goto('/login')
    }
</script>

<div class="flex flex-col h-screen justify-center items-center">
    <h1 class="text-primary font-bold uppercase text-xl">
        Welcome {data.email}
    </h1>
    <h1 class="text-primary opacity-70 text-md">
        Save your QR code to gain access to ValACE Library's facilities
    </h1>
    <div class="drop-shadow-lg">
        <div class="py-[10%]">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={data.email}&format=jpg"
                 alt="{data.email}"
                 class="px-3 py-3 border border-primary">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center">
        <button class="w-[250px] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white my-2">
            <a class=""
               href="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={data.email}&format=jpg" download="qrcode.jpg">
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