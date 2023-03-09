<template>
    <div>
        <RouterLink v-for="(item, index) in categoryStore.categories" :key="index" :to="{path: '/category/' + item['category-slug']}">
            <button class="btn shadow-0 border me-2 mb-2">{{item['name']}}</button>
        </RouterLink>
    </div>
</template>

<script setup>
// category store
import { useblogCategory } from '../../../store/blogCategory.js';

 const categoryStore= useblogCategory();
 
</script>
