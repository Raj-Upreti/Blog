<template >
    <div class="container py-2">
        <div class="row">
            <div class="col-md-7 border-end">
                <div class="py-5">
                    <form class="px-3" @submit.prevent="handleSubmit">
                        <div class="row">
                            <div class="pt-2 col-lg-6">
                                <label for="firstname" class="form-label">
                                    First Name
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" placeholder="e.g. John" class="form-control form-control-lg form-input" name="firstname" required>
                            </div>

                            <div class="pt-2 col-lg-6">
                                <label for="lastname" class="form-label">
                                    Last Name
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" placeholder="e.g. Doe" class="form-control form-control-lg form-input" name="lastname" required>
                            </div>
                        </div>

                        <div class="pt-4">
                            <label for="email" class="form-label">
                                Email
                                <span class="text-danger">*</span>
                            </label>
                            <input type="email" placeholder="e.g. someone@example.com" class="form-control form-control-lg form-input" name="email" required>
                        </div>

                        <div class="row pt-4">
                            <div class="col-lg-6">
                                <label for="firstname" class="form-label">
                                    Phone (Optional)
                                </label>
                                <input type="text" placeholder="e.g. +977-9876543210" class="form-control form-control-lg form-input" name="firstname">
                            </div>

                            <div class="col-lg-6">
                                <label for="lastname" class="form-label">
                                    Company Name (Optional)
                                </label>
                                <input type="text" placeholder="e.g. Osin Tech Pvt. Ltd." class="form-control form-control-lg form-input" name="lastname">
                            </div>
                        </div>

                        <div class="pt-4">
                            <label for="number" class="form-label">
                                Message
                                <span class="text-danger">*</span>
                            </label>
                            <textarea placeholder="Start Typing" class="form-control form-control-lg form-input" rows="5" name="message" required> </textarea>
                        </div>

                        <div>
                            <button class="btn btn-primary btn-lg w-100 mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-5 py-3">
                <div class="card shadow-0 py-2 ps-3" style="width:100%;">
                    <p class="h3 mb-3 pt-3">Contact Information</p>
                    <p class="py-3 h6">Fill up the form and our team will get back to you.</p>

                    <div class="d-flex align-items-center pb-3 h6">
                        <i class="fa-solid fa-phone"></i>
                        <p class="px-4">+977-9860778899</p>
                    </div>

                    <div class="d-flex align-items-center pb-3 h6">
                        <i class="fa-solid fa-envelope"></i>
                        <p class="px-4">contact@saauzi.com</p>
                    </div>

                    <div class="d-flex align-items-center pb-3 h6">
                        <i class="fa-solid fa-location-dot"></i>
                        <p class="px-4 ">Kandev, kupondole-Lalitpur</p>
                    </div>
                    <p></p>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
function handleSubmit() {
    console.log('form submitted');
}


</script>


<style scoped>
label{
    font-weight:  bold;
}
</style>