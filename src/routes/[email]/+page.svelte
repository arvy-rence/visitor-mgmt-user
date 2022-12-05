<script lang="ts">
    export let data: any;

    const downloadQR = async () => {

    }

    const logout = async () => {

    }
</script>

<div class="flex flex-col h-screen justify-center items-center">
    <h1 class="text-primary font-bold uppercase text-xl">
        CONGRATULATIONS {data.email}
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
            <i class="fa-solid fa-circle-down pr-2"></i>
            DOWNLOAD QR CODE
        </button>
        <button class="w-[250px] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white my-2">
            <i class="fa-solid fa-right-from-bracket pr-2"></i>
            LOG OUT
        </button>
    </div>
</div>