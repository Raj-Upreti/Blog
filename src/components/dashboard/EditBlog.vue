<template >
    <div class="container" style="overflow:hidden;">
        <div class="row">
            <div class="col-lg-9">
                <div class="px-4 py-5">
                    <h4 class="fw-bold">Edit Post</h4>
                    <!-- form section -->
                    <form>
                        <div class="py-3">
                            <label for="title" class="form-label">
                                Enter Title
                                <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="form-control form-input" name="title" v-model="title" required />
                        </div>

                        <div for="content" class="py-3">
                            <label class="form-label">
                                Blog Content
                                <span class="text-danger">*</span>
                            </label>
                            <QuillEditor ref="myEditorRef" style="height:33rem;" name="content" required />
                        </div>
                    </form>
                </div>
            </div>


            <div class="col-lg-3 py-5 px-4" style="background-color: rgb(241, 243, 244);">
                <form @submit.prevent>
                    <div class="position-relative">
                        <div class="alert alert-success position-absolute w-100" role="alert" v-if="successfullyAdded">
                            Successfully added !!!</div>
                        <div v-if="isBlog" class="d-flex flex-column">
                            <label for="link" class="form-label">
                                Blog Link:
                                <span class="text-danger">*</span>
                            </label>

                            <button class="btn btn-outline-info btn-sm mt-1 px-2 py-1 w-50" @click="clickRoute">View
                                Post</button>
                        </div>
                        <hr />
                        <!-- if category exist -->
                        <div v-if="categoryExists">
                            <label for="category">
                                Add Category
                                <span class="text-danger">*</span>
                            </label>
                            <br />
                            <select id="select" v-model="category"
                                class="border-secondary py-2 rounded-3 w-100 border border-info"
                                style="background:#f1f1f1;outline:none;">
                                <option value selected disabled>Select Category</option>
                                <option v-for="(category, index) in categoryList" :key="index" :value="category.id">{{
                                    category.name }}</option>
                            </select>
                        </div>

                        <div v-if="!categoryExists">
                            <div>
                                <router-link to="/dashboard/categorycollection"
                                    class="text-light btn btn-sm btn-primary py-1 fs-6">Add New Category</router-link>
                            </div>
                        </div>

                        <hr />
                        <div>
                            <div v-if="featured">
                                <div class="card" style="width:10rem; height:10rem;">
                                    <img :src="featured" alt="" style="height:100%; width:100%; object-fit:cover">
                                </div>
                            </div>

                            <div v-else>
                                <label for="image">Featured Image</label>
                                <br />
                                <input type="file" ref="file" @change="onFileChange" />
                            </div>

                        </div>
                    </div>

                    <div class="mt-5">
                        <div class="d-flex w-100 mb-3">
                            <button class="btn btn-primary rounded-3 w-100" @click.prevent="updateBlog"
                                style="font-size:1rem;">Update Blog</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<script setup>
import { ref, computed, onMounted } from "vue";
import { usepostStore } from "../../store/postStore";
import { useblogCategory } from "../../store/blogCategory";

//Vue Quill registration locally
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import { useRoute } from "vue-router";
import axios from "axios";
import router from "../../router";


const route = useRoute();
const categoryStore = useblogCategory();

const myEditorRef = ref(null);
const title = ref('');
// const content = ref('');
const category = ref('');
const file = ref(''); //object
const featured = ref('') //url

// if blog is added
const isBlog = ref(false);
// alert
const successfullyAdded = ref(false);


onMounted(() => {
    categoryStore.readAllCategory();
    const postId = route.params.id;
    axios.get(`/api/post/${postId}`)
        .then(res => {
            var data = res.data;
            title.value = data.post_title;
            // content.value = data.post_content;
            category.value = data.category_name;
            featured.value = data.post_image;
            myEditorRef.value.setHTML(data.post_content)
        })
        .catch(error => {
            console.log(error);
        })
});

function onFileChange(event) {
    // console.log(event);
    file.value = event.target.files[0];
    // console.log(file.value);
}

function updateBlog() {
    const postId = route.params.id;

    const formData = new FormData();
    if (file.value.files == undefined) {
        formData.append('post_image', file.value);
    }
    formData.append('post_title', title.value)
    formData.append('post_content', myEditorRef.value.getHTML())
    formData.append('post_excerpt', myEditorRef.value.getHTML().slice(0, 250))
    formData.append('category_name', category.value)



    axios.put(`/api/post/${postId}/`, formData)
        .then(res => {
            const data = res.data;
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    router.push('/dashboard/postcollection');
}


var categoryExists = computed(() => {
    if (categoryStore.categories.length === 0) {
        return false;
    } else {
        return true;
    }
});


const categoryList = computed(() => {
    return categoryStore.categories;
});
</script>


<style scoped>
.form-input {
    height: 4rem;
    border: 1px solid #ccc !important;
    border-radius: 0.7rem;
    padding: 0.5rem 1rem !important;
    font-size: 1.2rem !important;
}

.form-input-small {
    border: 1px solid #f1f1f1 !important;
    border-radius: 0.7rem;
    padding: 0.5rem 1rem !important;
}

.form-input:focus:hover,
.form-input:focus {
    border: 1px solid #084e88 !important;
}

.form-input:hover {
    border: 1px solid #ccc !important;
    transition: 0.7s;
}
</style>