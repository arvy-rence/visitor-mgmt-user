<script lang="ts">
    import {barangay, cities, provinces} from "$lib/data/locationData.js";
    import {countryCodes} from "$lib/data/countryCode.js";
    import toast, {Toaster} from "svelte-french-toast";

    let innerWidth = 0;
    let innerHeight = 0;

    // reactive binding for the `user_info.full_name`
    let firstName = "";
    let lastName = "";

    // reactive binding for country code and contact number
    let countryCode = countryCodes[0]
    let contactNumber = ""

    // temporary binding for other variables
    let birthday = null
    let isValenzuelaResident = false
    let city = ""
    let barangaySelection = ""
    let province = ""
    let sex = null

    // variable bindings for the dpp and terms
    let dpp = false;
    let terms = false;

    // contains the info to be sent to the backend
    $: user_info = {
        full_name: `${firstName.trim()} ${lastName.trim()}`,
        contact_number: `${countryCode}${contactNumber}`,
        birthday: birthday,
        is_valenzuela_resident: isValenzuelaResident,
        city: city,
        barangay: barangaySelection,
        province: province,
        sex: sex,
    }

    $: console.log(user_info)

    const checkInfo = () => {
        // check if the user has filled up all the required fields
        return !(user_info.full_name === " "
            || user_info.contact_number === ""
            || user_info.birthday === null
            || user_info.city === ""
            || user_info.province === ""
            || user_info.sex === null);
    }

    const submitInfo = () => {
        // check if the user has filled up all the required fields
        if (!checkInfo()) {
            console.log('incomplete')
            // check if the user has agreed to the terms and conditions
            toast.error('Fields incomplete', {
                style: 'font-khula',
                position: 'top-right'
            })
            return
        }
        if (!terms) {
            // check if the user has agreed to the terms
            toast.error('You need to agree to the terms', {
                style: 'font-khula',
                position: 'top-right'
            })
            return
        }
        if (!dpp) {
            toast.error('You need to agree to the data privacy and policy', {
                style: 'font-khula',
                position: 'top-right'
            })
            return
        }
        // send the data to the backend
        toast.promise(
            fetch('https://dummyjson.com/products/1')
                .then(res => res.json())
                .then(json => console.log(json)),
            {
                error: 'Failed to complete signup',
                success: 'Successfully updated account details',
                loading: 'Creating account'
            },
            {
                position: "top-right"
            }
        )
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<Toaster />
<div class="flex items-center justify-center pt-12">
    <div class="fixed top-12 left-0"><img class="h-screen min-h-[600px]" src="/images/register-banner.png" alt=""/>
    </div>
    <div class="block w-2/5"></div>
    <div class="flex flex-col items-center text-primary justify-evenly w-1/2 font-base">
        <img src="/images/logo.png" alt="" class="w-[10rem] mb-4"/>
        <p class="text-primary text-opacity-70 pb-10 uppercase">
            Enter your details to complete your registration
        </p>
        <div class="w-full px-[2rem]">
            <div class="font-khula pb-2 flex flex-col justify-between">
                <label for="first-name"
                       class="text-xl">
                    First Name<sup class="text-secondary">*</sup>
                </label>
                <input type="text"
                       id="first-name"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={firstName}/>
                <label for="last-name"
                       class="text-xl">
                    Last Name<sup class="text-secondary">*</sup>
                </label>
                <input type="text"
                       id="last-name"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={lastName}/>

                <label for="birthday"
                       class="text-xl">
                    Birthday<sup class="text-secondary">*</sup>
                </label>
                <input type="date"
                       id="birthday"
                       class="px-1 mb-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={birthday}/>
                <p class="text-primary opacity-70 text-sm mb-3">
                    You can only change this once
                </p>

                <div class="flex flex-row mb-2">
                    <p class="text-xl pr-6">
                        Sex:<span class="text-secondary">*</span>
                    </p>
                    <div class="flex flex-row">
                        <input type="radio"
                               id="sex-female"
                               name="sex"
                               class="px-1 -mt-1 mr-2 border border-gray-300"
                               bind:group={sex}
                               value={false}/>
                        <label for="sex-female"
                               class="text-xl pr-10">Female</label>
                    </div>
                    <div class="flex flex-row">
                        <input type="radio"
                               id="sex-male"
                               name="sex"
                               class="px-1 -mt-1 mr-2 border border-gray-300"
                               bind:group={sex}
                               value={true}/>
                        <label for="sex-male"
                               class="text-xl">Male</label>
                    </div>
                </div>

                <label for="province" class="text-xl">
                    Province<span class="text-secondary">*</span>
                </label>
                <select id="province"
                        class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                        bind:value={user_info.province}>
                    {#each provinces as province}
                        <option value={province}>{province}</option>
                    {/each}
                </select>
                <label for="city-val"
                       class="text-xl">
                    City<span class="text-secondary">*</span>
                </label>
                <select id="city-val"
                        class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                        bind:value={city}
                        on:change={() => {
                            // check if city is valenzuela to set `is_valenzuela_resident` to true
                            if (city === 'Valenzuela') {
                                isValenzuelaResident = true
                                barangaySelection = barangay[0]
                                province = "Metro Manila"
                            } else {
                                isValenzuelaResident = false
                                barangaySelection = ""
                            }
                        }}>
                    {#each cities as city}
                        <option value={city}>{city}</option>
                    {/each}
                </select>
                {#if user_info.city === "Valenzuela"}
                    <label for="barangay-val"
                           class="text-xl">
                        Barangay<span class="text-secondary">*</span>
                    </label>
                    <select id="barangay-val"
                            class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                            bind:value={barangaySelection}>
                        {#each barangay as brgy}
                            <option value={brgy}>{brgy}</option>
                        {/each}
                    </select>
                {:else}
                    <label for="barangay" class="text-xl">Barangay</label>
                    <input type="text"
                           id="barangay"
                           class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                           value="" disabled/>
                {/if}

                <label for="mobile-number" class="text-xl">
                    Contact Number<span class="text-secondary">*</span>
                </label>
                <div class="flex flex-row">
                    <div>
                        <select id="countryCode"
                                class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm text-center"
                                bind:value={countryCode}>
                            {#each countryCodes as code}
                                <option value={code}>{code}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="flex-grow">
                        <input type="text"
                               id="mobile-number"
                               class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                               bind:value={contactNumber}/>
                    </div>
                </div>

                <div class="flex flex-row pt-2">
                    <input type="checkbox"
                           id="tos"
                           class="px-1 -mt-1 mr-2 border border-gray-300"
                           bind:checked={terms}/>
                    <label for="tos" class="text-xl">
                        I agree with the <a href="/terms/tos" class="font-bold hover:underline">Terms of Use</a>.
                    </label>
                </div>
                {#if !terms}
                    <p class="text-primary opacity-70 text-sm mb-3">You need to agree with the terms of use</p>
                {/if}

                <div class="flex flex-row">
                    <input type="checkbox"
                           id="dpp"
                           class="px-1 -mt-1 mr-2 border border-gray-300"
                           bind:checked={dpp}/>
                    <label for="dpp"
                           class="text-xl">
                        I have read and understand the <a href="/terms/dpp" class="font-bold hover:underline">Data Privacy
                        Policy</a>.
                    </label>
                </div>
                {#if !dpp}
                    <p class="text-primary opacity-70 text-sm">You need to agree with the data privacy policy</p>
                {/if}
            </div>
        </div>
        <div class="mt-20 pb-16 flex flex-row">
            <button class="w-[12rem] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white"
                    on:click={() => submitInfo()}>
                Complete Signup
            </button>
        </div>
    </div>
</div>