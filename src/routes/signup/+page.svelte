<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    // data for the barangays
    const barangay = [
        {barangay: "Arkong Bato"},
        {barangay: "Malinta"},
        {barangay: "Gen. T de Leon"},
        {barangay: "Canumay East"},
        {barangay: "Canumay West"},
        {barangay: "Bignay"},
        {barangay: "Parada"},
        {barangay: "Punturin"},
        {barangay: "Dalandanan"},
        {barangay: "Lingunan"},
        {barangay: "Ugong"},
        {barangay: "Bagbaguin"},
        {barangay: "Balangkas"},
        {barangay: "Bisig"},
        {barangay: "Coloong"},
        {barangay: "Isla"},
        {barangay: "Mabolo"},
        {barangay: "Malanday"},
        {barangay: "Mapulang Lupa"},
        {barangay: "Marulas"},
        {barangay: "Maysan"},
        {barangay: "Palasan"},
        {barangay: "Pariancillo Villa"},
        {barangay: "Pasolo"},
        {barangay: "Poblacion"},
        {barangay: "Veinte Reales"},
        {barangay: "Polo"},
        {barangay: "Wawang Pulo"},
    ]

    let firstName = "";
    let lastName = "";
    let fullName = `${firstName} ${lastName}`;

    // variable bindings for the dpp and terms
    let dpp = false;
    let terms = false;

    let user_info = {
        full_name: fullName,
        is_valenzuela_resident: false,
        barangay: "",
        birthday: null,
        sex: null
    }

    $: console.log(user_info)
</script>

<div class="flex items-center justify-center h-[60rem]">
    <div class="flex flex-col items-center text-primary justify-evenly w-full max-w-[375px] max-h-[612px] font-base">
        <img src="/images/logo.png" alt=""/>
        <p>ENTER YOUR DETAILS TO CREATE YOUR ACCOUNT</p>
        <div class="w-full px-[2rem]">
            <div class="font-khula pb-2 flex flex-col justify-between">
                <label for="first-name"
                       class="text-xl">First Name</label>
                <input type="text"
                       id="first-name"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={firstName}/>

                <label for="last-name" class="text-xl">Last Name</label>
                <input type="text"
                       id="last-name"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={lastName}/>

                <label for="birthday" class="text-xl">Birthday</label>
                <input type="date"
                       id="birthday"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm" bind:value={user_info.birthday}/>
                
                <p class="text-xl">Sex:</p>
                <div class="flex flex-row">
                    <div class="flex flex-row">
                        <input type="radio"
                               id="sex-male"
                               name="sex"
                               class="px-1 border border-gray-300"
                               bind:group={user_info.sex}
                               value={true}/>
                        <label for="sex-male"
                               class="text-xl">Male</label>
                    </div>
                    <div class="flex flex-row">
                        <input type="radio"
                               id="sex-female"
                               name="sex"
                               class="px-1 border border-gray-300"
                               bind:group={user_info.sex}
                               value={false}/>
                        <label for="sex-female"
                               class="text-xl">Female</label>
                    </div>
                </div>

                <label for="is-valenzuela-resident" class="text-xl self-start">Are you a Valenzuela Resident?</label>
                <input type="checkbox" id="is-valenzuela-resident" bind:checked={user_info.is_valenzuela_resident}>

                {#if user_info.is_valenzuela_resident}
                    <label for="city-val" class="text-xl">City</label>
                    <select id="city-val"
                            class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                            disabled>
                        <option value="Valenzuela">Valenzuela</option>
                    </select>
                {:else}
                    <label for="city" class="text-xl">City</label>
                    <input type="text"
                           id="city"
                           class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>
                {/if}

                {#if user_info.is_valenzuela_resident}
                    <label for="barangay-val"
                           class="text-xl">Barangay</label>
                    <select id="barangay-val"
                            class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                            bind:value={user_info.barangay}>
                        {#each barangay as brgy}
                            <option value={brgy.barangay}>{brgy.barangay}</option>
                        {/each}
                    </select>
                {:else}
                    <label for="barangay" class="text-xl">Barangay</label>
                    <input type="text"
                           id="barangay"
                           class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                           bind:value={user_info.barangay}/>
                {/if}

                <!--TODO is this really necessary?-->
                <label for="province" class="text-xl">Region</label>
                <select id="province"
                        class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm">
                    <option value="?">NCR</option>
                    <option value="??">CAR</option>
                </select>

                <label for="email" class="text-xl">Email</label>
                <input type="email"
                       id="email"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="mobile-number" class="text-xl">Number</label>
                <input type="text"
                       id="mobile-number"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="password" class="text-xl">Password</label>
                <input type="password"
                       id="password"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="confirm-password" class="text-xl">Confirm Password</label>
                <input type="password"
                       id="confirm-password"
                       class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <div class="flex flex-row">
                    <input type="checkbox"
                           id="tos"
                           class="px-1 border border-gray-300"
                           bind:checked={terms}
                    />
                    <label for="tos" class="text-xl">I agree with the Terms of Use.</label>
                </div>
                {#if !terms}<p class="text-gray-400 text-sm">You need to agree with the terms of use</p>{/if}

                <div class="flex flex-row">
                    <input type="checkbox"
                           id="dpp"
                           class="px-1 border border-gray-300"
                           bind:checked={dpp}
                    />
                    <label for="dpp" class="text-xl">I have read and understand the Data Privacy Policy.</label>
                </div>
                {#if !dpp}<p class="text-gray-400 text-sm">You need to agree with the data privacy policy</p>{/if}
            </div>
        </div>
        <div class="">
            <Button title="Submit" onClick={() => console.log(user_info)} isFilled={true}/>
            <span class=""></span>
            <Button title="Cancel" onClick={() => {}}/>
        </div>
    </div>
</div>