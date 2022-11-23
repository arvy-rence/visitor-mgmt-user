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
        sex: null,
        city: ""
    }

    let cities = [
        "Alaminos",
        "Angeles City",
        "Antipolo",
        "Bacolod",
        "Bacoor",
        "Bago",
        "Baguio",
        "Bais",
        "Balanga",
        "Batac",
        "Batangas City",
        "Bayawan",
        "Baybay",
        "Bayugan",
        "Biñan",
        "Bislig",
        "Bogo",
        "Borongan",
        "Butuan",
        "Cabadbaran",
        "Cabanatuan",
        "Cabuyao",
        "Cadiz",
        "Cagayan de Oro",
        "Calaca",
        "Calamba",
        "Calapan",
        "Calbayog",
        "Caloocan",
        "Candon",
        "Canlaon",
        "Carcar",
        "Catbalogan",
        "Cauayan",
        "Cavite City",
        "Cebu City",
        "Cotabato City",
        "Dagupan",
        "Danao",
        "Dapitan",
        "Dasmariñas",
        "Davao City",
        "Digos",
        "Dipolog",
        "Dumaguete",
        "El Salvador",
        "Escalante",
        "Gapan",
        "General Santos",
        "General Trias",
        "Gingoog",
        "Guihulngan",
        "Himamaylan",
        "Ilagan",
        "Iligan",
        "Iloilo City",
        "Imus",
        "Iriga",
        "Isabela",
        "Kabankalan",
        "Kidapawan",
        "Koronadal",
        "La Carlota",
        "Lamitan",
        "Laoag",
        "Lapu-Lapu City",
        "Las Piñas",
        "Legazpi",
        "Ligao",
        "Lipa",
        "Lucena",
        "Maasin",
        "Mabalacat",
        "Makati",
        "Malabon",
        "Malaybalay",
        "Malolos",
        "Mandaluyong",
        "Mandaue",
        "Manila",
        "Marawi",
        "Marikina",
        "Masbate City",
        "Mati",
        "Meycauayan",
        "Muñoz",
        "Muntinlupa",
        "Naga",
        "Naga",
        "Navotas",
        "Olongapo",
        "Ormoc",
        "Oroquieta",
        "Ozamiz",
        "Pagadian",
        "Palayan",
        "Panabo",
        "Parañaque",
        "Pasay",
        "Pasig",
        "Passi",
        "Puerto Princesa",
        "Quezon City",
        "Roxas",
        "Sagay",
        "Samal",
        "San Carlos",
        "San Carlos",
        "San Fernando",
        "San Fernando",
        "San Jose",
        "San Jose del Monte",
        "San Juan",
        "San Pablo",
        "San Pedro",
        "Santa Rosa",
        "Santo Tomas",
        "Santiago",
        "Silay",
        "Sipalay",
        "Sorsogon City",
        "Surigao City",
        "Tabaco",
        "Tabuk",
        "Tacloban",
        "Tacurong",
        "Tagaytay",
        "Tagbilaran",
        "Taguig",
        "Tagum",
        "Talisay",
        "Talisay",
        "Tanauan",
        "Tandag",
        "Tangub",
        "Tanjay",
        "Tarlac City",
        "Tayabas",
        "Toledo",
        "Trece Martires",
        "Tuguegarao",
        "Urdaneta",
        "Valencia",
        "Valenzuela",
        "Victorias",
        "Vigan",
        "Zamboanga City"]



    $: console.log(user_info)
    let provinces = [
    "Abra",
    "Agusan del Norte",
    "Agusan del Sur",
    "Aklan",
    "Albay",
    "Antique",
    "Apayao",
    "Aurora",
    "Basilan",
    "Bataan",
    "Batanes",
    "Batangas",
    "Benguet",
    "Biliran",
    "Bohol",
    "Bukidnon",
    "Bulacan",
    "Cagayan",
    "Camarines Norte",
    "Camarines Sur",
    "Camiguin",
    "Capiz",
    "Catanduanes",
    "Cavite",
    "Cebu",
    "Cotabato",
    "Davao de Oro",
    "Davao del Norte",
    "Davao del Sur",
    "Davao Occidental",
    "Davao Oriental",
    "Dinagat Islands",
    "Eastern Samar",
    "Guimaras",
    "Ifugao",
    "Ilocos Norte",
    "Ilocos Sur",
    "Iloilo",
    "Isabela",
    "Kalinga",
    "La Union",
    "Laguna",
    "Lanao del Norte",
    "Lanao del Sur",
    "Leyte",
    "Maguindanao del Norte",
    "Maguindanao del Sur",
    "Marinduque",
    "Masbate",
    "Metro Manila",
    "Misamis Occidental",
    "Misamis Oriental",
    "Mountain Province",
    "Negros Occidental",
    "Negros Oriental",
    "Northern Samar",
    "Nueva Ecija",
    "Nueva Vizcaya",
    "Occidental Mindoro",
    "Oriental Mindoro",
    "Palawan",
    "Pampanga",
    "Pangasinan",
    "Quezon",
    "Quirino",
    "Rizal",
    "Romblon",
    "Samar",
    "Sarangani",
    "Siquijor",
    "Sorsogon",
    "South Cotabato",
    "Southern Leyte",
    "Sultan Kudarat",
    "Sulu",
    "Surigao del Norte",
    "Surigao del Sur",
    "Tarlac",
    "Tawi-Tawi",
    "Zambales",
    "Zamboanga del Norte",
    "Zamboanga del Sur",
    "Zamboanga Sibugay",]
</script>
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
    <div class="fixed top-12 left-0"><img class="h-screen min-h-[600px]" src="/images/register-banner.png" alt=""/></div>
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

                <label for="last-name" class="text-xl">Last Name</label>
                <input type="text"
                       id="last-name"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                       bind:value={lastName}/>

                <label for="birthday" class="text-xl">Birthday</label>
                <input type="date"
                       id="birthday"
                       class="px-1 mb-5 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm" bind:value={user_info.birthday}/>
                
                
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

                    <label for="city-val" class="text-xl">City</label>
                    <select id="city-val"
                            class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm" 
                            bind:value={user_info.city} on:change={() => {
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
                           class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"
                           value="" disabled/>
                {/if}

                <!--TODO is this really necessary?-->
                <label for="province" class="text-xl">Province</label>
                <select id="province"
                        class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm">
                    {#each provinces as province}
                        <option value={province}>{province}</option>
                    {/each}
                </select>

                <label for="email" class="text-xl">Email</label>
                <input type="email"
                       id="email"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="mobile-number" class="text-xl">Number</label>
                <input type="text"
                       id="mobile-number"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="password" class="text-xl">Password</label>
                <input type="password"
                       id="password"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="confirm-password" class="text-xl">Confirm Password</label>
                <input type="password"
                       id="confirm-password"
                       class="px-1 mb-3 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <div class="flex flex-row">
                    <input type="checkbox"
                           id="tos"
                           class="px-1 -mt-1 mr-2 border border-gray-300"
                           bind:checked={terms}/>
                    <label for="tos" class="text-xl">I agree with the Terms of Use.</label>
                </div>
                {#if !terms}<p class="text-gray-400 text-sm mb-3">You need to agree with the terms of use</p>{/if}

                <div class="flex flex-row">
                    <input type="checkbox"
                           id="dpp"
                           class="px-1 -mt-1 mr-2 border border-gray-300"
                           bind:checked={dpp}/>
                    <label for="dpp" class="text-xl">I have read and understand the Data Privacy Policy.</label>
                </div>
                {#if !dpp}<p class="text-gray-400 text-sm">You need to agree with the data privacy policy</p>{/if}
            </div>
        </div>
        <div class="mt-20 pb-16 flex flex-row">
            <Button class="w-[10rem] h-[2.2rem] uppercase font-bold bg-primary rounded-lg text-white" title="Submit" onClick={() => console.log(user_info)} isFilled={true}/>
            <div class="block w-[3rem]"></div>
            <Button class="w-[10rem] h-[2.2rem] uppercase font-bold bg-white rounded-lg border border-primary text-primary " title="Cancel" onClick={() => {}} isFilled={true}/>
        </div>
    </div>
</div>