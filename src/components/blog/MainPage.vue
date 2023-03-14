
<template>
    <Suspense>
        <template #default>
            <div>
        <!-- // Blog Banner -->
        <BlogBanner />

        <!-- // Blog Trending Section -->
        <!-- <BlogTrending /> -->

        <!-- // Blog Content List Section  -->
        <BlogContent />
    </div>
        </template>

        <template #fallback>
            loading........
        </template>
    
</Suspense>
</template>


<script setup>


// Blog Banner
import BlogBanner from './main_page/BlogBanner.vue';

// Blog Trending Section
// import BlogTrending from './main_page/BlogTrending.vue';

// Blog Content List Section
import BlogContent from './main_page/BlogContent.vue';

</script>