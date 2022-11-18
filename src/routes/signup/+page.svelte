<script lang="ts">
    import Button from "$lib/components/Button.svelte";
</script>

<div class="flex items-center justify-center h-[60rem]">
    <div class="flex flex-col items-center text-primary justify-evenly w-full max-w-[375px] max-h-[612px] font-base">
        <img src="/images/logo.png" alt=""/>
        <p>ENTER YOUR DETAILS TO CREATE YOUR ACCOUNT</p>
        <div class="w-full px-[2rem]">
            <div class="font-khula pb-2 flex flex-col justify-between">
                <label for="first-name" class="text-xl">First Name</label>
                <input type="text" id="first-name" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="last-name" class="text-xl">Last Name</label>
                <input type="text" id="last-name" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="birthday" class="text-xl">Birthday</label>
                <input type="date" id="birthday" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>
                
                <p class="text-xl">Sex:</p>
                <div class="flex flex-row">
                    <div class="flex flex-row">
                        <input type="radio" id="sex-male" name="sex" class="px-1 border border-gray-300"/>                    
                        <label for="sex-male" class="text-xl">Male</label>
                    </div>
                    <div class="flex flex-row">
                        <input type="radio" id="sex-female" name="sex" class="px-1 border border-gray-300"/>
                        <label for="sex-female" class="text-xl">Female</label>
                    </div>
                </div>
                <label for="barangay" class="text-xl">Barangay</label>
                <select id="barangay" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm">
                    <option value="malinta">Malinta</option>
                    <option value="gent">Gen T. De Leon</option>
                </select>

                <label for="city" class="text-xl">Barangay</label>
                <select id="city" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm">
                    <option value="val">Valenzuela</option>
                    <option value="bulacan">Bulacan</option>
                </select>

                <label for="province" class="text-xl">Barangay</label>
                <select id="province" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm">
                    <option value="?">NCR</option>
                    <option value="??">CAR</option>
                </select>

                <label for="email" class="text-xl">Email</label>
                <input type="email" id="email" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="mobile-number" class="text-xl">Number</label>
                <input type="text" id="mobile-number" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/> 

                <label for="password" class="text-xl">Password</label>
                <input type="password" id="password" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/>

                <label for="confirm-password" class="text-xl">Confirm Password</label>
                <input type="password" id="confirm-password" class="px-1 border border-gray-300 w-full bg-primary bg-opacity-10 rounded-sm"/> 

                <div class="flex flex-row">
                    <input type="checkbox" id="tos" class="px-1 border border-gray-300"/> 
                    <label for="tos" class="text-xl">I agree with the Terms of Use.</label>
                </div>

                <div class="flex flex-row">
                    <input type="checkbox" id="dpp" class="px-1 border border-gray-300"/> 
                    <label for="dpp" class="text-xl">I have read and understand the Data Privacy Policy.</label>
                </div>
            </div>
        </div>
        <div class="">
            <Button title="Submit" onClick={() => {}} isFilled={true}/>
            <span class=""></span>
            <Button title="Cancel" onClick={() => {}}/>
        </div>
    </div>
</div>