<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let email: String
    let password: String

    function login() {
        console.log(email, password)
    }
</script>
<div class="bg-white flex flex-row items-center pl-[2rem] h-[3rem]">
    <h1 class="text-primary text-xl">
        TERMS & CONDITION
    </h1>
    <h1 class="px-[1rem]">|</h1>
    <h1 class="text-primary text-xl">
        PRIVACY POLICY
    </h1>
</div>
<div class="flex items-center justify-center h-screen bg-[#CDEEFD]">
    <div class="flex flex-col items-center text-primary justify-evenly h-screen w-full max-w-[375px] max-h-[612px]">
        <div class="font-khula">
            <img src="/images/logo.png" alt=""/>
            <h1 class="text-lg text-center">VALENZUELA CITY LIBRARY</h1>
            <h2 class="text-center text-base opacity-50 -mt-[.5rem]">GATE REGISTRATION</h2>
        </div>
        <div class="w-full px-[2rem]">
            <div class="font-khula pb-2 flex flex-col justify-between">
                
                <input type="email"
                       id="email"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-md"
                       bind:value={email}/>
                <input type="password"
                       id="password"
                       class="px-1 border border-gray-300 w-full mt-[.6rem] bg-primary bg-opacity-10 rounded-md"
                       bind:value={password}/>
                       <span class="text-end font-semibold pt-2">Forgot Password</span>
            </div>
        </div>
        <div class="">
            <Button title="Log in" onClick={login} isFilled={true}/>
            <h2 class="text-center">
                No account? 
                <span class="font-bold">
                    <a href="/signup">Register here.</a>
                </span>
            </h2>
        </div>
    </div>
</div>