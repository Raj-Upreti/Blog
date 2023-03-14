<template>
    <!-- Blog Archive Page Main Component -->
    <div class="container container-fluid p-5">

        <!-- Column Section Start -->
        <div class="row py-3">

            <!-- Cloumn Left Start -->
            <div class="col-md-7 border-end px-4">

                <!-- Primary Heading : Category Name -->
                <div class="d-flex align-items-center mb-5">
                    <div class="tag-icon me-2">
                        <i class="fa-solid fa-tag fs-5"></i>
                    </div>
                    <h2 class="fw-bold h1">{{ archiveName }}</h2>
                </div>

                <BlogHomeList :post='routeData' />
            </div>
            <!-- Cloumn Left End -->

            <!-- Cloumn Right Start -->
            <div class="col-md-5 px-4 position-sticky" style="top:6rem; height:0rem;">
                <div class="text fw-semibold mb-3">
                    Explore Categories
                </div>
               <BlogCategoryMenu />
                
            </div>
            <!-- Cloumn Right End -->
        </div>
        <!-- Column Section End -->
    </div>
</template>


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
}
</style>

<script setup>
import { ref, onMounted, computed } from 'vue';
import BlogHomeList from './main_page/BlogHomeList.vue';
import { usepostStore } from '../../store/postStore'
import { useblogCategory } from '../../store/blogCategory';
import { useRouter } from 'vue-router';

import BlogCategoryMenu from './main_page/BlogCategoryMenu.vue';

const route = useRouter();
const postStore = usepostStore();
const categoryStore = useblogCategory();

const routeData = ref(route.currentRoute.value.params.slug);

onMounted(() => {
    categoryStore.readAllCategory();
    postStore.readAllPosts();
})


const archiveName = computed(() => {
    const data = categoryStore.categories.find((value, index) => {
        if (value.slug == route.currentRoute.value.params.slug) {
            return value.name
        }
    });

    if (data != undefined) {
        return data.name
    }
});

// const categoryId = computed(() => route.params.id);

// const categorySlug = computed(() => {
//     postStore.get_posts();
//   const category = categoryStore.categories.find(cat => cat.id === categoryId.value);
//   return category ? category.slug : '';
// });

// const filteredPosts = computed(() => {
//   return postStore.postList.filter(post => post.category_name === categorySlug.value);
// });

</script>

