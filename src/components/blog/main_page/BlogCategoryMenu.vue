<template>
    <div>
        <RouterLink v-for="(item, index) in store.categories" :key="index" :to="{path: '/category/' + item['category-slug']}">
            <button class="btn shadow-0 border me-2 mb-2">{{item['category-name']}}</button>
        </RouterLink>
    </div>
</template>

<script setup>
// category store
 import { useblogCategory } from '../../../store/blogCategory.js';
// api call
// or
// store call

const store= useblogCategory();
</script>
