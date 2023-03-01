<template>
    <div class="py-5">
        <div class="p-3">
            <div class="mb-5 pb-5">
                <router-link to="/dashboard/addblog">
                    <button class="btn btn-primary fw-bold btn-lg rounded-4">Add Blog</button>
                </router-link>
            </div>
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