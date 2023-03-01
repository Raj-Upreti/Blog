<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 px-0 text-white position-sticky" style="top:0rem; min-height: 100vh; background-color: #0f4c81;">
        <DashboardSidebar />
      </div>

      <div class="col-md-10 px-0">
          <router-view />
      </div>

    </div>
  </div>
</template>
  
<script setup>
import DashboardSidebar from '../components/dashboard/common/DashboardSidebar.vue';
</script>