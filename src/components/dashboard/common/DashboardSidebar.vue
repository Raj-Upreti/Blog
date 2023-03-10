<template>
  <div>
    <!-- DashboardSidebar begins -->
    <div class="text-center">
      <img class="pt-3 px-4"
        src="https://static.vecteezy.com/system/resources/previews/001/192/065/original/circle-logo-turbine-png.png"
        style="width: 80%" />
    </div>
    <div class="menu" style="padding-top: 3rem;">
      <hr>
      <div class="fw-bold menu-list">
        <div class="nav-item" :class="{ active: activeNavItem === 'home' }" @click="setactiveNavItem('home')">
          <router-link class="d-flex align-items-center py-3 pe-3" to="/dashboard">
            <i class="fa-solid fa-house text-white me-3"></i>
            <p class="text-white">Home</p>
          </router-link>
        </div>

        <div class=" nav-item" :class="{ active: activeNavItem === 'posts' }" @click="setactiveNavItem('posts')">
          <router-link class="d-flex align-items-center py-3 pe-3" to="/dashboard/postcollection">
            <i class="fa-solid fa-file text-white me-3"></i>
            <p class="text-white">Posts</p>
          </router-link>
        </div>

        <div class=" nav-item" :class="{ active: activeNavItem === 'category' }"
          @click="setactiveNavItem('category')">
          <router-link class="d-flex align-items-center py-3 pe-3" to="/dashboard/categorycollection">
            <i class="fa-solid fa-layer-group text-white me-3"></i>
            <p class="text-white">Category</p>
          </router-link>
        </div>

        <div class=" nav-item">
          <router-link class="d-flex align-items-center py-3 pe-3" to="/">
            <i class="fa-solid fa-eye text-white me-3"></i>
            <p class="text-white">Visit Blog</p>
          </router-link>
        </div>

        <hr>

        <div class=" nav-item" @click="logout">
          <a class="d-flex align-items-center py-3 pe-3 ps-0">
            <i class="fa-solid fa-right-from-bracket me-3 text-light"></i>
            <p class="text-white">Logout</p>
          </a>
        </div>


      </div>
    </div>

    <!-- <DashboardSidebar /> -->
  </div>
</template>
  

  
<script setup>
import { ref } from 'vue';
import AuthService from '../../../service/authServices';

const activeNavItem = ref('');

function setactiveNavItem(navItem) {
  activeNavItem.value = navItem;
}




async function logout() {
  await AuthService.logout();
  console.log("Logged Out")
}

</script>
  


<style>
@import "datatables.net-buttons-dt";
@import "datatables.net-select-dt";
@import 'datatables.net-dt';


p {
  margin-bottom: 0 !important;
}

.active {
  background: var(--mdb-gray-300);
}

.active * {
  color: #0f4c81 !important;
}

.menu .menu-list div {
  padding-left: 2rem !important;
}
</style>