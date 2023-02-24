
<template>
    <div>
        <!-- Blog Navbar -->
        <BlogNavbar />

        <div>
            <router-view/>
        </div>

    </div>
</template>


<script setup>
// Blog Navbar
import BlogNavbar from '../components/blog/common/BlogNavbar.vue';

</script>