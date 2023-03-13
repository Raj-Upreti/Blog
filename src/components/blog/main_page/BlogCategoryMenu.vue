<template>
    <div>
        <div class="related-topics">
        <RouterLink v-for="(item, index) in categoryStore.categories" :key="index" :to="{path: '/category/' + item.slug}">
            <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">{{item['name']}}</button>
        </RouterLink>
    </div>
    </div>
</template>

<script setup>
// category store
import { useblogCategory } from '../../../store/blogCategory.js';

 const categoryStore= useblogCategory();
 
</script>

<style scoped>
.related-topics button {
    background-color: rgba(242, 242, 242, 1);
    font-size: 14px;
    font-weight: 400;
}

.tag-icon {
    padding: 1rem;
    background-color: rgb(237, 237, 237);
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.readtime::before,
.readtime::after {
    content: "\2022";
    padding: 0 0.4rem;
}

.button-section p {
    margin-bottom: 0;
}</style>
