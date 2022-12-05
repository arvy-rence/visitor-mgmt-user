<script lang="ts">
    import {barangay, cities, provinces} from "$lib/data/locationData.js";

    let innerWidth = 0;
    let innerHeight = 0;

    // reactive binding for the `user_info.full_name`
    let firstName = "";
    let lastName = "";

    // variable bindings for the dpp and terms
    let dpp = false;
    let terms = false;

    // variable bindings for confirmation/validation
    let confirmPassword = "";

    // contains the info to be sent to the backend
    $: user_info = {
        full_name: `${firstName} ${lastName}`,
        email: "",
        password: "",
        contact_number: "",
        birthday: null,
        is_valenzuela_resident: false,
        city: "",
        barangay: "",
        province: "",
        sex: null,
    }

    $: console.log(user_info)

    const checkInfo = () => {
        // check if the user has filled up all the required fields
        return !(user_info.full_name === " "
            || user_info.email === ""
            || user_info.password === ""
            || user_info.contact_number === ""
            || user_info.birthday === null
            || user_info.city === ""
            || user_info.province === ""
            || user_info.sex === null);
    }

    const submitInfo = () => {
        // check if the user has filled up all the required fields
        if (checkInfo()) {
            // check if the user has agreed to the terms and conditions
            if (terms) {
                // check if the user has agreed to the dpp
                if (dpp) {
                    // check if the password and confirm password are the same
                    if (user_info.password === confirmPassword) {
                        // send the data to the backend
                        console.log("sending data to the backend");
                    } else {
                        alert("Passwords do not match.")
                    }
                } else {
                    alert("Please agree to the Data Privacy Policy.")
                }
            } else {
                alert("Please agree to the Terms and Conditions.")
            }
        } else {
            console.log("not all fields are filled up");
        }
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<div class="bg-white fixed flex flex-row items-center pl-[2rem] h-[3rem]">
    <h1 class="text-primary text-xl">
        TERMS & CONDITION
    </h1>
    <h1 class="px-[1rem]">|</h1>
    <h1 class="text-primary text-xl">
        PRIVACY POLICY
    </h1>
</div>
<div class="flex items-center justify-center pt-12">
    <div class="fixed top-12 left-0"><img class="h-screen min-h-[600px]" src="/images/register-banner.png" alt=""/>
    </div>
    <div class="block w-2/5"></div>
    <div class="flex flex-col items-center text-primary justify-evenly w-1/2 font-base">
        <img src="/images/logo.png" alt="" class="w-[10rem] mb-4"/>
        <p class="text-primary text-opacity-50 pb-10">ENTER YOUR DETAILS TO CREATE YOUR ACCOUNT</p>
        <div class="w-full px-[2rem]">
            <div class="font-khula pb-2 flex flex-col justify-between">
                <label for="first-name"
                       class="text-xl">First Name</label>
                <input type="text"
                       id="first-name"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={firstName}/>
                <label for="last-name"
                       class="text-xl">Last Name</label>
                <input type="text"
                       id="last-name"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={lastName}/>

                <label for="birthday"
                       class="text-xl">Birthday</label>
                <input type="date"
                       id="birthday"
                       class="px-1 mb-5 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={user_info.birthday}/>

                <div class="flex flex-row mb-2">
                    <p class="text-xl pr-6">Sex:</p>
                    <div class="flex flex-row">
                        <input type="radio"
                               id="sex-female"
                               name="sex"
                               class="px-1 -mt-1 mr-2 border border-gray-300"
                               bind:group={user_info.sex}
                               value={false}/>
                        <label for="sex-female"
                               class="text-xl pr-10">Female</label>
                    </div>
                    <div class="flex flex-row">
                        <input type="radio"
                               id="sex-male"
                               name="sex"
                               class="px-1 -mt-1 mr-2 border border-gray-300"
                               bind:group={user_info.sex}
                               value={true}/>
                        <label for="sex-male"
                               class="text-xl">Male</label>
                    </div>
                </div>

                <label for="city-val"
                       class="text-xl">City</label>
                <select id="city-val"
                        class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                        bind:value={user_info.city}
                        on:change={() => {
                            // check if city is valenzuela to set `is_valenzuela_resident` to true
                            user_info.city === 'Valenzuela' ? user_info.is_valenzuela_resident = true : user_info.is_valenzuela_resident = false
                            user_info.barangay = ""
                        }}>
                    {#each cities as city}
                        <option value={city}>{city}</option>
                    {/each}
                </select>
                {#if user_info.city === "Valenzuela"}
                    <label for="barangay-val"
                           class="text-xl">Barangay</label>
                    <select id="barangay-val"
                            class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                            bind:value={user_info.barangay}>
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
                <label for="province" class="text-xl">Province</label>
                <select id="province"
                        class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                        bind:value={user_info.province}>
                    {#each provinces as province}
                        <option value={province}>{province}</option>
                    {/each}
                </select>

                <label for="email" class="text-xl">Email</label>
                <input type="email"
                       id="email"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={user_info.email}/>
                <label for="mobile-number" class="text-xl">Contact Number</label>
                <input type="text"
                       id="mobile-number"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={user_info.contact_number}/>

                <label for="password" class="text-xl">Password</label>
                <input type="password"
                       id="password"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={user_info.password}/>
                <label for="confirm-password" class="text-xl">Confirm Password</label>
                <input type="password"
                       id="confirm-password"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={confirmPassword}/>

                <div class="flex flex-row">
                    <input type="checkbox"
                           id="tos"
                           class="px-1 -mt-1 mr-2 border border-gray-300"
                           bind:checked={terms}/>
                    <label for="tos" class="text-xl">I agree with the Terms of Use.</label>
                </div>
                {#if !terms}
                    <p class="text-gray-400 text-sm mb-3">You need to agree with the terms of use</p>
                {/if}
                <div class="flex flex-row">
                    <input type="checkbox"
                           id="dpp"
                           class="px-1 -mt-1 mr-2 border border-gray-300"
                           bind:checked={dpp}/>
                    <label for="dpp"
                           class="text-xl">I have read and understand the <a href="/">Data Privacy Policy</a>.</label>
                </div>
                {#if !dpp}
                    <p class="text-gray-400 text-sm">You need to agree with the data privacy policy</p>
                {/if}
            </div>
        </div>
        <div class="mt-20 pb-16 flex flex-row">
            <button class="w-[10rem] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white"
                    on:click={() => submitInfo()}>
                Submit
            </button>
            <div class="block w-[3rem]"></div>
            <button class="w-[10rem] h-[2.2rem] uppercase font-bold bg-white rounded-lg border border-primary text-primary"
                    onClick={() => {}}>
                Cancel
            </button>
        </div>
    </div>
</div>