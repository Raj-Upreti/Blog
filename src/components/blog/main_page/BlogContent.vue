<template>
    <div class="container-fluid py-4">
        <div class="row px-5">
            <div class="col-md-4 position-sticky" style="top:6rem;height:0rem;">

                <h6 class="fw-bold">Discover more of what matters to you</h6>

                <div class="py-4 border-bottom ">
                    <!-- Blog Category Menu Component -->
                    <BlogCategoryMenu />
                </div>

                <div class="py-3">
                    <router-link to="help"><button class="btn btn-sm">Help</button></router-link>
                    <button class="btn btn-sm">Status</button>
                    <button class="btn btn-sm">Writing</button>
                    <button class="btn btn-sm">Blog</button>
                    <button class="btn btn-sm">Careers</button>
                    <button class="btn btn-sm">Privacy</button>
                    <button class="btn btn-sm">Terms</button>
                    <button class="btn btn-sm">About</button>
                    <button class="btn btn-sm">Text to speech</button>
                </div>

                <div>
                    <img src="https://graphicdesignjunction.com/wp-content/uploads/2020/12/best-logos-2020-4.jpg" alt=""
                        style="width:100%;">
                </div>
            </div>

            <div class="col-md-8 px-5 py-3">
                <!-- Blog Home List Component -->
                <BlogHomeList />
            </div>
        </div>
    </div>
</template>

<style scoped>
.readtime::before,
.readtime::after {
    content: "\2022";
    padding: 0 0.3rem;
}

.bottom-section p {
    margin-bottom: 0;
}
</style>



<script setup>
// Blog Category Menu Component
import BlogCategoryMenu from './BlogCategoryMenu.vue';
// Blog Home List Component
import BlogHomeList from './BlogHomeList.vue';
</script>

