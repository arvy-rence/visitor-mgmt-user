<script lang="ts">
  import { goto } from "$app/navigation";
  import { getUserDetails } from "$lib/hooks/auth";
  import toast, { Toaster } from "svelte-french-toast";
  import { toastOptions } from "$lib/util/options";

  let email: string;
  let password: string;

  async function login() {
    const user = getUserDetails(email, password);

    await toast.promise(
      user,
      {
        loading: "Logging in",
        success: "Login Successful",
        error: "Failed to login",
      },
      toastOptions
    );

    if (user) {
      toast("Redirecting to dashboard", {
        ...toastOptions,
        icon: "✅",
        duration: 2000,
      });
      setTimeout(async () => {
        await goto(`/user/view/${email}`);
      }, 1000);
    }
  }
</script>

<Toaster />
<div
  class="flex items-center justify-center h-screen bg-[url('/images/login-bg.png')] bg-cover"
>
  <div
    class="flex flex-col items-center text-primary justify-center h-[65%] w-full max-w-[375px] max-h-[612px] bg-white drop-shadow-lg"
  >
    <div class="font-khula pb-6 text-center">
      <div class="flex justify-center">
        <img src="/images/logo.png" class="flex justify-center w-1/2" alt="" />
      </div>
      <h1 class="text-lg text-center font-bold">VALENZUELA CITY LIBRARY</h1>
      <h2 class="text-center text-base opacity-50 -mt-[.5rem]">
        GATE REGISTRATION
      </h2>
    </div>
    <div class="w-full px-[2rem] pb-6">
      <form
        on:keydown={(e) => {
          if (e.key === "Enter") {
            login();
          }
        }}
      >
        <div class="font-khula pb-2 flex flex-col justify-between">
          <input
            type="email"
            id="email"
            class="px-1 border border-gray-300 w-full h-[2rem] pt-1 pl-2 bg-white bg-opacity-100 rounded-md shadow-inner"
            placeholder="Email*"
            bind:value={email}
          />
          <input
            type="password"
            id="password"
            class="px-1 border border-gray-300 w-full h-[2rem] pt-1 pl-2 mt-[.6rem] bg-white bg-opacity-100 rounded-md shadow-inner"
            placeholder="Password*"
            bind:value={password}
          />
          <span class="text-end font-semibold pt-2">
            <a href="/recover-password" class="hover:underline"
              >Forgot Password</a
            >
          </span>
        </div>
      </form>
    </div>
    <div class="flex items-center flex-col">
      <button
        class="w-[10rem] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white"
        on:click={login}
        on:keydown={(event) => {
          if (event.key === "Enter") {
            login();
          }
        }}
      >
        Log in
      </button>
      <h2 class="text-center text-lg text-secondary mt-2">
        No account?
        <span class="font-bold">
          <a href="/signup">Register here.</a>
        </span>
      </h2>
    </div>
  </div>
</div>
