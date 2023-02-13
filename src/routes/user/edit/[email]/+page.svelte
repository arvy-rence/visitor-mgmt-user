<script lang="ts">
  import { barangay, cities, provinces } from "$lib/data/locationData.js";
  import { countryCodes } from "$lib/data/countryCode.js";
  import toast, { Toaster } from "svelte-french-toast";
  import { toastOptions } from "$lib/util/options";
  import { upsertUserInfo } from "$lib/hooks/user";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Guard from "$lib/components/Guard.svelte";
  import { schoolCodes } from "$lib/data/schools.js";

  // binding for data from +page.server.ts
  export let data;

  let innerWidth = 0;
  let innerHeight = 0;

  // reactive binding for the `user_info.full_name`
  let fullName = "";
  // let lastName = "";

  // reactive binding for country code and contact number
  let countryCode = countryCodes[0];
  let contactNumber = "";

  // temporary binding for other variables
  let birthday = null;
  let isValenzuelaResident = false;
  let city = "";
  let barangaySelection = "";
  let province = "";
  let sex;
  let isStudent = false;
  let schoolCode = "";

  // contains the info to be sent to the backend
  $: user_info = {
    full_name: `${fullName.trim()}`,
    contact_number: `${countryCode}${contactNumber.trim()}`,
    birthday: birthday,
    is_valenzuela_resident: isValenzuelaResident,
    city: city,
    barangay: barangaySelection,
    province: province,
    sex_int: sex,
    email: data?.email,
    is_student: isStudent,
    school_code: schoolCode,
  };

  $: console.log(user_info);

  const checkInfo = () => {
    // check if the user has filled up all the required fields
    return !(
      user_info.full_name === "" ||
      user_info.contact_number === "+63" ||
      user_info.birthday === null ||
      user_info.city === "" ||
      user_info.province === "" ||
      user_info.sex === null
    );
  };

  const submitInfo = async () => {
    // check if the user has filled up all the required fields
    if (!checkInfo()) {
      // check if the user has agreed to the terms and conditions
      toast.error("Fields incomplete", toastOptions);
      return;
    }
    // send the data to the backend
    await toast.promise(
      upsertUserInfo(user_info),
      {
        error: "Failed to update user information",
        success: "Successfully updated account details",
        loading: "Submitting Account Details",
      },
      toastOptions
    );

    toast("Redirecting to profile page", {
      ...toastOptions,
      icon: "✅",
      duration: 2000,
    });

    // redirect to login page
    setTimeout(async () => {
      await goto(`/user/view/${data?.email}`);
    }, 2000);
  };

  const cancelUpdate = async () => {
    await goto(`/user/view/${data?.email}`);
    return;
  };

  onMount(async () => {
    fullName = data?.full_name;
    contactNumber = data?.contact_number.replace("+63", "");
    birthday = data?.birthday;
    isValenzuelaResident = data?.is_valenzuela_resident;
    city = data?.city;
    barangaySelection = data?.barangay;
    province = data?.province;
    sex = data?.sex_int;
    isStudent = data?.is_student;
    schoolCode = data?.school_code;
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Guard>
  <Toaster />
  <div class="flex items-center justify-center pt-12">
    {#if innerWidth > 1200}
      <div class="fixed top-12 left-0">
        <img
          class="h-screen min-h-[600px]"
          src="/images/register-banner.png"
          alt=""
        />
      </div>

      <div class="block w-2/5 " />
    {/if}
    <div
      class="flex flex-col items-center text-primary sm:justify-center md:justify-evenly font-base {innerWidth >
      1200
        ? 'w-1/2'
        : 'w-full'}"
    >
      <img src="/images/logo.png" alt="" class="w-[10rem] mb-4" />
      <p class="text-primary text-opacity-70 pb-2 uppercase">
        Keep your information up to date here
      </p>
      <form on:submit|preventDefault={submitInfo} class="w-[90%]">
        <div class="w-full">
          <label for="email" class="text-xl">
            Email<sup class="text-secondary">*</sup>
          </label>
          <input
            type="text"
            id="email"
            class="p-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-20 rounded-sm"
            bind:value={data.email}
            disabled
          />
          <div class="font-khula pb-2 flex flex-col justify-between">
            <label for="first-name" class="text-xl">
              Full Name<sup class="text-secondary">*</sup>
            </label>
            <input
              type="text"
              id="first-name"
              class="p-1 mb-1 border border-gray-300 w-full bg-primary bg-opacity-20 rounded-sm"
              bind:value={fullName}
              disabled
            />
            <p class="text-primary opacity-70 text-sm mb-3">
              You can't update this information
            </p>

            <label for="birthday" class="text-xl">
              Birthday<sup class="text-secondary">*</sup>
            </label>
            <input
              type="date"
              id="birthday"
              class="p-1 mb-1 border border-gray-300 w-full bg-primary bg-opacity-20 rounded-sm"
              bind:value={birthday}
              disabled
            />
            <p class="text-primary opacity-70 text-sm mb-3">
              You can't update this information
            </p>

            <div class="flex flex-row mb-2">
              <p class="text-xl pr-6">
                Sex:<span class="text-secondary">*</span>
              </p>
              <div class="flex flex-row">
                <input
                  type="radio"
                  id="sex-female"
                  name="sex"
                  class="p-1 -mt-1 mr-2 border border-gray-300"
                  bind:group={sex}
                  value={2}
                />
                <label for="sex-female" class="text-xl pr-10">Female</label>
              </div>
              <div class="flex flex-row">
                <input
                  type="radio"
                  id="sex-male"
                  name="sex"
                  class="p-1 -mt-1 mr-2 border border-gray-300"
                  bind:group={sex}
                  value={1}
                />
                <label for="sex-male" class="text-xl">Male</label>
              </div>
              <div class="flex flex-row px-6">
                <input
                  type="radio"
                  id="sex-lgbt"
                  name="sex"
                  class="p-1 -mt-1 mr-2 border border-gray-300"
                  bind:group={sex}
                  value={3}
                />
                <label for="sex-male" class="text-xl">LGBTQIA+</label>
              </div>
            </div>

            <div class="flex flex-row mb-2 flex-wrap">
              <p class="text-xl pr-6">
                Are you a student in Valenzuela?:<span class="text-secondary"
                  >*</span
                >
              </p>
              <div class="flex flex-row">
                <input
                  type="radio"
                  id="is-student"
                  name="student"
                  class="p-1 -mt-1 mr-2 border border-gray-300"
                  bind:group={isStudent}
                  value={false}
                  on:change={() => {
                    schoolCode = "None";
                  }}
                />
                <label for="is-student" class="text-xl pr-10">No</label>
              </div>
              <div class="flex flex-row">
                <input
                  type="radio"
                  id="is-not-student"
                  name="student"
                  class="p-1 -mt-1 mr-2 border border-gray-300"
                  bind:group={isStudent}
                  value={true}
                  on:change={() => {
                    schoolCode = schoolCodes[0].code;
                  }}
                />
                <label for="is-not-student" class="text-xl">Yes</label>
              </div>
            </div>

            {#if isStudent}
              <label for="school-code" class="text-xl"> School </label>
              <select
                id="school-code"
                class="p-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                bind:value={schoolCode}
              >
                {#each schoolCodes as school}
                  <option value={school.code}>{school.name}</option>
                {/each}
              </select>
            {/if}

            <label for="province" class="text-xl">
              Province<span class="text-secondary">*</span>
            </label>
            <select
              id="province"
              class="p-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
              bind:value={user_info.province}
            >
              {#each provinces as province}
                <option value={province}>{province}</option>
              {/each}
            </select>
            <label for="city-val" class="text-xl">
              City<span class="text-secondary">*</span>
            </label>
            <select
              id="city-val"
              class="p-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
              bind:value={city}
              on:change={() => {
                // check if city is valenzuela to set `is_valenzuela_resident` to true
                if (city === "Valenzuela") {
                  isValenzuelaResident = true;
                  barangaySelection = barangay[0];
                  province = "Metro Manila";
                } else {
                  isValenzuelaResident = false;
                  barangaySelection = "";
                  province = "";
                }
              }}
            >
              {#each cities as city}
                <option value={city}>{city}</option>
              {/each}
            </select>
            {#if user_info.city === "Valenzuela"}
              <label for="barangay-val" class="text-xl">
                Barangay<span class="text-secondary">*</span>
              </label>
              <select
                id="barangay-val"
                class="p-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                bind:value={barangaySelection}
              >
                {#each barangay as brgy}
                  <option value={brgy}>{brgy}</option>
                {/each}
              </select>
            {:else}
              <label for="barangay" class="text-xl">Barangay</label>
              <input
                type="text"
                id="barangay"
                class="p-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-20 rounded-sm"
                value=""
                disabled
              />
            {/if}

            <label for="mobile-number" class="text-xl">
              Contact Number<span class="text-secondary">*</span>
            </label>
            <div class="flex flex-row">
              <div>
                <select
                  id="countryCode"
                  class="p-1 h-[30px] mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm text-center"
                  bind:value={countryCode}
                >
                  {#each countryCodes as code}
                    <option value={code}>{code}</option>
                  {/each}
                </select>
              </div>
              <div class="flex-grow">
                <input
                  type="text"
                  id="mobile-number"
                  class="p-1 h-[30px] mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                  bind:value={contactNumber}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 pb-16 flex flex-row justify-center">
          <button
            class="w-[12rem] h-[2.5rem] uppercase font-bold bg-primary rounded-lg text-white mr-6"
            type="submit"
          >
            Update Information
          </button>
          <button
            class="w-[12rem] h-[2.5rem] uppercase font-bold bg-white border border-primary rounded-lg text-primary"
            on:click={cancelUpdate}
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  </div>
</Guard>
