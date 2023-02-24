<template>
    <div class="container-fluid py-4 px-3 row">

        <div class="col-md-8">
            <div class="card px-3 rounded-3">
                <h4 style="fw-bold">Blog Post</h4>
                <div class="py-3">
                    <label for="title">Title <span class="text-danger">*</span></label> <br>
                    <textarea class="border border-1" name="title" placeholder="Add a title" id="" cols="100" rows="2"
                        v-model="title" required></textarea>
                </div>

                <div class="py-3">
                    <label for="title">Blog Content <span class="text-danger">*</span></label>
                    <QuillEditor ref="content" style="height:33rem;"   />
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card px-2 rounded-3">
                <div class="py-3">
                    <label for="title">Blog Link</label> <br>
                    <textarea type="url" class="border border-1" placeholder=" Link of blog" name="title" id=""
                        cols="45" rows="2" v-model="link"></textarea>
                </div>
                <div class="py-3">
                    <label for="image">Featured Image</label> <br>
                    <input type="file" ref="fileInput" accept="image" @change="updateFile">
                    <img v-if="file" :src="URL.createObjectURL(file)" />
                </div>

                <div class="py-3">
                    <label for="category">Add Category <span class="text-danger">*</span></label> <br>
                    <textarea class="border border-1" name="title" placeholder="Add Category" id="" cols="45" rows="2" v-model="category"
                        required></textarea>
                </div>

                <div class="py-3">
                    <label for="author">Author name <span class="text-danger">*</span></label> <br>
                    <textarea class="border border-1" name="title" placeholder="Add author name" id="" cols="45"
                        rows="2" v-model="author" required></textarea>
                </div>
            </div>

            <div class="my-5 text-center">
               

                <router-link to="/blogstatus">
                    <input type="button" class="btn btn-success rounded-4 mx-3" @click="updateStore"
                        value="Publish Blog">
                    <input type="button" class="btn btn-light btn-success rounded-4 " value="Save as Draft">
                </router-link>
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
import '../../import/stores';

const postStore = postStore();
const categoryStore = useblogCategory();


//Two way Binding using Ref starts
const title = ref('');
const content = ref('');
const link = ref('');
const file = ref(null);
const category = ref('');
const author = ref('');

const updateFile= () => {
    file.value=fileInput.files[0];
} 

function updateStore() {
    let data = {
        title: title.value,
        content: content.value.getHTML(),
        file:updateFile.value,
        link: link.value,
        author: author.value

    }
     let categoryData= {
        category:category.value
     }

    //Two way Binding using Ref ends
    
    
    //Updating store 

    postStore.addBlog(data);
    categoryStore.addCategory(categoryData);

    //saving data in store

    
}

</script>

<style scoped>

</style>