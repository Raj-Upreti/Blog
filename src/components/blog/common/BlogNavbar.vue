<template>
  <div ref="navbarWrapper" class="text-white" >
    <nav ref="navbar" id="navbar" class="navbar navbar-expand-lg fw-bold bg-white py-2 px-5 border-bottom fixed-top" style="background-color:#A9A9A9">
      <div class="container-fluid">
        <a class="navbar-brand fs-3 fw-bold" href="/">Saauzi</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/update" class="nav-link">Updates</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/write" class="nav-link">Write</router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/login" class="nav-link">LogIn</router-link>
            </li>

            <!-- <li class="nav-item">
              <router-link to="/membership" class="nav-link">membership</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link to="/signin" class="nav-link">Sign In</router-link>
            </li> -->
          </ul>
          <!-- <form class="d-flex px-4 ">
            <button class="btn btn-primary rounded-5" type="submit">Get Started</button>
          </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>


<script setup>

import {ref, onMounted} from 'vue';
const navbar = ref(null);
const navbarWrapper = ref(null);

onMounted(() => {
  let mb = navbar.value.clientHeight;
  navbarWrapper.value.style= `margin-bottom: ${mb}px`;

});

</script>


<style scoped>



</style>