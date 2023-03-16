<template >
    <div class="container py-2">
        <p class="h4 py-3 fw-bold">Contact Us</p>
        <div class="row">
            <div class="col-md-7">
                <div class="card py-2">
                    <form class=" px-3" @submit.prevent="handleSubmit">
                        <p class="text-center h5 fw-bold">Feel free to reach us!!</p>

                        <div class="row">
                            <div class="pt-2 col-lg-6">
                                <label for="firstname" class="form-label">
                                    First Name
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="form-control form-input" name="firstname">
                            </div>

                            <div class="pt-2 col-lg-6">
                                <label for="lastname" class="form-label">
                                    Last Name
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="form-control form-input" name="lastname">
                            </div>
                        </div>

                        <div class="pt-4">
                            <label for="email" class="form-label">
                                Email
                                <span class="text-danger">*</span>
                            </label>
                            <input type="email" class="form-control form-input" name="email">
                        </div>

                        <div class="pt-4">
                            <label for="number" class="form-label">
                                Phone
                                <span class="text-danger">*</span>
                            </label>
                            <input type="phone" class="form-control form-input" name="phone">
                        </div>

                        <div class="pt-4">
                            <label for="number" class="form-label">
                                Message
                                <span class="text-danger">*</span>
                            </label>
                            <textarea class="form-control form-input" rows="5" name="message"> </textarea>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-primary btn-lg mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card bg-dark text-white py-2" style="width:100%;">
                    <p class="text-center h5 pt-3">Contact Information</p>
                    <p class="ps-3 py-3 h6">Fill up the form and our team will get back to you.</p>

                    <div class="d-flex align-items-center pb-3 h6">
                        <i class="fa-solid fa-phone ps-5"></i>
                        <p class="px-4">9860778899</p>
                    </div>

                    <div class="d-flex align-items-center pb-3 h6">
                        <i class="fa-solid fa-envelope ps-5"></i>
                        <p class="px-4">Osin@gmail.com</p>
                    </div>

                    <div class="d-flex align-items-center pb-3 h6">
                        <i class="fa-solid fa-location-dot ps-5"></i>
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


<style scoped></style>