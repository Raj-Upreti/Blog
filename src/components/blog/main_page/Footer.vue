<template>
    <div class="container-fluid py-4">
        <div class="row px-5">

            <!-- 
                ================================================
                This is the section of the code in the homepage.
                This section loads the blog home list
                ================================================
             -->
            <div class="col-md-8 px-5 py-3">
                <!-- Blog Home List Component -->
                <BlogHomeList post="home" />
            </div>

            <!-- ======================================================== -->


            <div class="col-md-4 position-sticky" style="top:6rem;height:0rem;">

                <div class="pb-4 pt-2 border-bottom ">
                    <!-- Blog Category Menu Component -->
                    <BlogCategoryMenu />
                </div>

                <div class="py-3">
                    <router-link to="/privacypolicy">
                        <a class="text-muted me-3 mb-2">Privacy Policy</a>
                    </router-link>
                    <router-link to="/contactus">
                        <a class="text-muted me-3 mb-2">Contact</a>
                    </router-link>
                </div>

                <div class="copyRight">
                    <p class="text-muted">Osin Pvt. Ltd. &copy; 2023</p>
                </div>
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

