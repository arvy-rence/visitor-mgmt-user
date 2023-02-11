<script lang="ts">
  import { goto } from "$app/navigation";
  import { signup } from "$lib/hooks/user";
  import toast, { Toaster } from "svelte-french-toast";
  import { toastOptions } from "$lib/util/options";

  let email: string = "";
  let password: string = "";
  let confirmPassword: string = "";

  async function sendVerificationEmail(): Promise<void> {
    if (checkFields()) return;
    await toast.promise(
      signup(email, password),
      {
        loading: "Sending verification email...",
        success: "Verification email sent!",
        error: "Error sending verification email",
      },
      toastOptions
    );
  }

  function checkFields() {
    if (email === "") {
      toast.error("Please enter an email address", toastOptions);
      return true;
    }
    if (password === "") {
      toast.error("Please enter a password", toastOptions);
      return true;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", toastOptions);
      return true;
    }
    return false;
  }
</script>

<Toaster />
<div
  class="flex items-center justify-center h-screen bg-[url('/images/login-bg.png')] bg-cover"
>
  <div
    class="flex flex-col items-center text-primary justify-center h-[72%] w-full max-w-[375px] max-h-[612px] bg-white drop-shadow-lg"
  >
    <div class="font-khula pb-6 text-center">
      <div class="flex justify-center">
        <img src="/images/logo.png" class="flex justify-center w-1/2" alt="" />
      </div>
      <h1 class="text-lg text-center font-bold">VALENZUELA CITY LIBRARY</h1>
      <h2 class="text-center text-base opacity-50 -mt-[.5rem]">
        START SIGNUP PROCESS
      </h2>
    </div>
    <form on:submit|preventDefault={sendVerificationEmail}>
      <div class="w-full pb-3">
        <div class="font-khula pb-3 flex flex-col justify-between">
          <label for="email" class="text-md pl-2"> Email </label>
          <input
            type="email"
            id="email"
            class="px-1 border border-gray-300 w-full h-[2rem] pt-1 pl-2 bg-white bg-opacity-100 rounded-md shadow-inner"
            placeholder="user@gmail.com"
            bind:value={email}
          />
        </div>
        <div class="font-khula pb-2 flex flex-col justify-between">
          <label for="email" class="text-md pl-2"> Password </label>
          <input
            type="password"
            id="password"
            class="px-1 border border-gray-300 w-full h-[2rem] pt-1 pl-2 bg-white bg-opacity-100 rounded-md shadow-inner"
            placeholder="********"
            bind:value={password}
          />
        </div>
        <div class="font-khula pb-2 flex flex-col justify-between">
          <label for="confirmPassword" class="text-md pl-2">
            Confirm Your Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            class="px-1 border border-gray-300 w-full h-[2rem] pt-1 pl-2 bg-white bg-opacity-100 rounded-md shadow-inner"
            placeholder="********"
            bind:value={confirmPassword}
          />
          {#if password !== confirmPassword}
            <p class="text-primary opacity-70 text-sm">
              Password does not match
            </p>
          {:else}{/if}
        </div>
      </div>
      <div class="flex items-center flex-col">
        <button
          class="w-[10rem] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white mb-5"
          type="submit"
        >
          SIGN UP
        </button>
        <h2 class="text-center">
          Already have an account?
          <span class="font-bold">
            <a href="/login">Login here.</a>
          </span>
        </h2>
      </div>
    </form>
  </div>
</div>
