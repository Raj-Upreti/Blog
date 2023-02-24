<template>
    <div>
        <!-- Navbar Starts -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="">
                <a class="navbar-brand fs-1" href="#">Blogs</a>
            </div>
        </nav>
        <!-- Navbar Ends -->


        <div class="p-3">
            <div class="text-end">
                <router-link to="/addblog">
                    <button class="btn btn-primary btn-lg rounded-3">Add Blog</button>
                </router-link>
            </div>
            <h2 class="fw-bold text-center py-3"> Post Table</h2>
            <PostTable />
        </div>
    </div>
    
</template>


<script setup>
import PostTable from './post_collection/PostTable.vue';
</script>

<style>
@import "datatables.net-buttons-dt";
@import "datatables.net-select-dt";
@import 'datatables.net-dt';
</style>