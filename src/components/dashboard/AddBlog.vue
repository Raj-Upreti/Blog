<template>
    <div class="container" style="overflow:hidden;">
        <div class="row">
            <div class="col-lg-9">
                <div class="px-4 py-5">
                    <h4 class="fw-bold">Blog Post</h4>

                    <form action="" class="">

                        <div class="py-3">
                            <label for="title" class="form-label">Enter Title <span class="text-danger">*</span></label>
                            <input type="text" class="form-control form-input" name="title" v-model="title" required>
                        </div>


                        <div for="content" class="py-3">
                            <label class="form-label">Blog Content <span class="text-danger">*</span></label>
                            <QuillEditor ref="content" style="height:33rem;" name="content" required />
                        </div>

                    </form>
                </div>
            </div>


            <div class="col-lg-3 py-5 px-4" style="background-color: rgb(241, 243, 244);">
                <form class="">
                    <div>
                        <div>
                            <label for="link" class="form-label">Blog Link <span class="text-danger">*</span></label>

                            <div class="d-flex">
                                <div class="text-decoration-underline text-primary text-truncate"
                                    style="font-size:0.8rem; cursor: pointer;">
                                    https://saauzi.com/blog/working-ways-our-company-in-summer-season </div>
                            </div>

                            <button class="btn btn-outline-info btn-sm mt-1 px-2 py-1"
                                title="https://saauzi.com/blog/working-ways-our-company-in-summer-season" v-title>
                                View Post
                            </button>

                            <!-- <input type="text" id="" class="form-control" v-model="link" /> -->
                        </div>
                        <hr>

                        <div>
                            <label for="category">Add Category <span class="text-danger">*</span></label> <br>
                            <input type="text" name="category" class="form-control form-input-small" v-model="category"
                                required>
                        </div>

                        <hr>
                        <div>
                            <label for="image">Featured Image</label> <br>
                            <input type="file" ref="fileInput" accept="image" required>
                        </div>

                    </div>


                    <div class="mt-5">
                        <div class="d-flex w-100 mb-3">
                            <button class="btn btn-primary rounded-3 w-100" @click.prevent="updateStore"
                                style="font-size:1rem;">
                                Publish Blog
                            </button>
                        </div>
                        <div>
                            <button class="btn btn-secondary rounded-3 w-100 border border-info"
                                @click.prevent="updateStore" style="font-size:1rem;">
                                Save as Draft
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

//Vue Quill registration locally
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

//Importing Stores
import { usepostStore } from '../../store/postStore';
import { useblogCategory } from '../../store/blogCategory';
import router from '../../router';


// const router= router();
const postStore = usepostStore();
const categoryStore = useblogCategory();


//Two way Binding using Ref starts
const title = ref('');
const content = ref('');
const file = ref(null);
const category = ref('');


//For HTML input handling
const updateFile = () => {
    file.value = fileInput.files[0];
}

function updateStore() {

    let data = {
        title: title.value,
        content: content.value.getHTML(),
        file: updateFile.value
    }
    let categoryData = {
        category: category.value
    }

    if (data.title == "" || data.content == "" || data.file == "" || categoryData.category == "") {
        alert('Please enter the fields first.');
        return false;
    }

    //Two way Binding using Ref ends


    //Updating store 

    postStore.addBlog(data);
    categoryStore.addCategory(categoryData);

    //saving data in store   

    router.push('/dashboard/postcollection');
}


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
