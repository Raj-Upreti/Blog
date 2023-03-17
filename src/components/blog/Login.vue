
<template>
    <section>
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6 border-end">
                    <img src="https://img.freepik.com/free-vector/accountants-work-with-financial-transactions-software-tablet-enterprise-accounting-it-accounting-system-smart-enterprise-tools-concept-illustration_335657-2101.jpg?w=2000"
                        class="img-fluid h-100" alt="Phone image" />
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 p-3">
                    <div class="position-relative">
                        <!-- <img src="../assets/logo.webp" alt="logo of a company" style="width:10%" class="my-3" /> -->
                        <div class="h3 mb-5 fw-bold">LOGIN</div>
                    </div>
                    <p v-if="incorrectUser" class="bg-danger text-light py-3 text-center rounded-2">invalid Username and
                        password</p>
                    <form @submit.prevent>
                        <!-- Email input -->
                        <!-- Email input -->
                        <label class="form-label label" for="form2Example1">Email address</label>
                        <div class="mb-4 form-outline position-relative">
                            <input type="text" id="form2Example1" class="form-control border border-1" v-model="username"
                                @focus="isInvalid.username = false" :class="{ 'invalid': isInvalid.username }" />
                            <i class="fas fa-user me-3 position-absolute end-0" style="top:21px"></i>
                            <span v-if="isInvalid.username" class="error-message">Username field cannot be left blank</span>
                        </div>

                        <!-- Password input -->
                        <div class="mb-4 form-outline">
                            <label class="form-label" for="form2Example2">Password</label>
                            <div class="position-relative">
                                <input v-if="showPassword" type="password" :class="{ 'invalid': isInvalid.password }"
                                    @focus="isInvalid.password = false" id="form2Example2"
                                    class="form-control border border-1" v-model="password" />
                                <input v-if="!showPassword" type="text" :class="{ 'invalid': isInvalid.password }"
                                    id="form2Example2" @focus="isInvalid.password = false"
                                    class="form-control border border-1" v-model="password" />
                               

                                <i class="fas position-absolute end-0 me-3" style="top:21px"
                                    :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                                    @click="showHide"></i>
                                <span v-if="isInvalid.password" class="error-message">Password field cannot be left
                                    blank</span>
                            </div>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-lg btn-block" @click="userLogin">Sign in</button>
                        <!-- <div class="py-2 d-flex justify-content-center">
                            <button class="text-muted btn w-100 mt-4 bg-light">
                                <img src="../assets/google.webp" style="width:5%;" alt="google logo" class="me-1" /> 
                                Sign in with Google
                            </button>
                        </div> -->
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
// imports
import { ref } from "vue";
import { useAuthStore } from "../../store/authLogin";
import router from "../../router";

// variables
const username = ref("");
const password = ref("");
const userStore = useAuthStore();
const showPassword = ref(true);
const incorrectUser = ref(false);
// methods for email field
const isInvalid = ref({ username: false, password: false });
// function to show password


const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
if (accessToken) {
    router.push('/dashboard')
}
function showHide() {
    showPassword.value = !showPassword.value;
}

async function userLogin(event) {
    await userStore.login(username.value, password.value);
    if (username.value === '') {
        isInvalid.value.username = true;
    } else {
        isInvalid.value.username = false;
    }

    if (password.value === '') {
        isInvalid.value.password = true;
    } else {
        isInvalid.value.password = false;
    }
    password.value = event.target.value;
}



</script>
  
  
<style scoped>
.form-control {
    border-radius: .7rem;
    padding: .8rem;
    font-size: 1.3rem !important;
    border: 1px solid #ccc !important;
    color: #000;
}

.form-control:focus:hover,
.form-control:focus {
    border: 1px solid #0e5ed6 !important;
}

.form-label {
    top: 11px !important;
    color: #000 !important;
}

.invalid {
    border: 1px solid red !important;
}

.error-message {
    color: red;
    font-size: 0.8em;
    margin-left: 5px;
}
</style>

