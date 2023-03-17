
<template>
    <Suspense>
        <template #default>
            <div>
        <!-- // Blog Banner -->
        <BlogBanner />

        <!-- // Blog Trending Section -->
        <!-- <BlogTrending /> -->

        <!-- // Blog Content List Section  -->
        <Footer />
    </div>
        </template>

        <template #fallback>
            Loading........
        </template>
    
</Suspense>
</template>


<script setup>


// Blog Banner
import BlogBanner from './main_page/BlogBanner.vue';

// Blog Trending Section
// import BlogTrending from './main_page/BlogTrending.vue';

// Blog Content List Section
import Footer from './main_page/Footer.vue';

</script>