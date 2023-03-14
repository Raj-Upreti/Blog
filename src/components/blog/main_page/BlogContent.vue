<template>
    <div class="container-fluid py-4">
        <div class="row px-5">
            <div class="col-md-4 position-sticky" style="top:6rem;height:0rem;">

                <h6 class="fw-bold">Discover more of what matters to you</h6>

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

                <!-- <div class="py-3">
                    <router-link to="help"><button class="btn btn-sm shadow-0 border me-2 mb-2">Help</button></router-link>
                    
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">Writing</button>
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">Blog</button>
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">Careers</button>
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">Privacy</button>
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">Terms</button>
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">About</button>
                    <button class="btn btn-sm shadow-0 border me-2 mb-2">Text to speech</button>
                </div> -->
<<<<<<< HEAD

=======
>>>>>>> 1c2d68321637f1dfee65fe9dfff05a3f6f9ecf06
                <div class="copyRight">
                    <p class="text-muted">Osin pvt.ltd &copy; 2023</p>
                </div>
            </div>

            <div class="col-md-8 px-5 py-3">
                <!-- Blog Home List Component -->
                <BlogHomeList post="home" />
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

