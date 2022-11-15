<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let email: String
    let password: String

    function login() {
        console.log(email, password)
    }
</script>

<div class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center text-primary justify-evenly h-screen w-full max-w-[375px] max-h-[612px]">
        <img src="/images/logo.png" alt=""/>
        <div class="w-full px-[2rem]">
            <div class="font-khula pb-2 flex justify-between">
                <label for="email" class="">
                    Email:
                </label>
                <input type="email"
                       id="email"
                       class="px-1 border border-gray-300 self-end w-[14rem]"
                       bind:value={email}/>
            </div>
            <div class="font-khula pb-2 flex justify-between">
                <label for="password">
                    Password:
                </label>
                <input type="password"
                       id="password"
                       class="px-1 border border-gray-300 justify-self-end w-[14rem]"
                       bind:value={password}/>
            </div>
        </div>
        <div class="">
            <Button title="Log in" onClick={login} isFilled={true}/>
            <h2 class="text-center">
                Need an account? 
                <span class="font-bold">
                    <a href="/signup">Sign Up.</a>
                </span>
            </h2>
        </div>
    </div>
</div>