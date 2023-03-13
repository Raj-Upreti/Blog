<template>
  <div class="container" style="overflow:hidden;">
    <div class="row">
      <div class="col-lg-9">
        <div class="px-4 py-5">
          <h4 class="fw-bold">Blog Post</h4>
          <!-- form section -->
          <form>
            <div class="py-3">
              <label for="title" class="form-label">
                Enter Title
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control form-input"
                name="title"
                v-model="title"
                required
              />
            </div>

            <div for="content" class="py-3">
              <label class="form-label">
                Blog Content
                <span class="text-danger">*</span>
              </label>
              <QuillEditor ref="content" style="height:33rem;" name="content" required />
            </div>
          </form>
        </div>
      </div>

      <div class="col-lg-3 py-5 px-4" style="background-color: rgb(241, 243, 244);">
        <form>
          <div>
            <div>
              <label for="link" class="form-label">
                Blog Link
                <span class="text-danger">*</span>
              </label>

              <div class="d-flex">
                <div
                  class="text-decoration-underline text-primary text-truncate"
                  style="font-size:0.8rem; cursor: pointer;"
                >https://saauzi.com/blog/working-ways-our-company-in-summer-season</div>
              </div>

              <button
                class="btn btn-outline-info btn-sm mt-1 px-2 py-1"
                title="https://saauzi.com/blog/working-ways-our-company-in-summer-season"
                v-title
              >View Post</button>

              <!-- <input type="text" id="" class="form-control" v-model="link" /> -->
            </div>
            <hr />
            <!-- if category exist -->
            <div v-if="categoryExists">
              <label for="category">
                Add Category
                <span class="text-danger">*</span>
              </label>
              <br />
              <select id="select" v-model="category">
                <option value selected disabled>Select Category</option>
                <option
                  v-for="(category,index) in categoryList"
                  :key="index"
                  :value="category.id"
                >{{ category.name }}</option>
              </select>
            </div>

            <div v-if="!categoryExists">
              <div class="btn btn-sm btn-primary">Add New Category</div>
            </div>

            <hr />
            <div>
              <label for="image">Featured Image</label>
              <br />
              <input type="file" ref="fileInput" @change="onFileChange($event)"/>
            </div>
          </div>

          <div class="mt-5">
            <div class="d-flex w-100 mb-3">
              <button
                class="btn btn-primary rounded-3 w-100"
                @click.prevent="updateStore"
                style="font-size:1rem;"
              >Publish Blog</button>
            </div>
            <div>
              <button
                class="btn btn-secondary rounded-3 w-100 border border-info"
                @click.prevent="updateStore"
                style="font-size:1rem;"
              >Save as Draft</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

//Vue Quill registration locally
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

//Importing Stores
import { usepostStore } from "../../store/postStore";
import { useblogCategory } from "../../store/blogCategory";
import router from "../../router";
import { useRoute } from "vue-router";

import cloudinary from 'cloudinary-core';

// Replace 'your-cloud-name' with your actual Cloudinary cloud name.
const cloudName = 'mediaholic-nepal';

// Replace 'your-api-key' and 'your-api-secret' with your actual Cloudinary API Key and Secret.
// const apiKey = '353428766987396';
// const apiSecret = 'SjTPgChloMGOsXbZxEkiTKMSezM';

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: cloudName,
  secure:true
  // api_key: apiKey,
  // api_secret: apiSecret
});

//variables
var title = ref("");
var content = ref("");
const file = ref(null);
const category = ref("");

const postStore = usepostStore();
const categoryStore = useblogCategory();

/*
 *   ==============================================================
 *   This is the code block for the editing the post.
 *   If you come to this page via /dashboard/addblog,
 *   this function will not run
 *   ==============================================================
 *   Start
 */

const route = useRoute();
// Use a computed property to extract the `id` parameter from the current route
const id = computed(() => route.params.id);

if (id.value != "undefined") {
  const posts = postStore.postList;
  console.log(posts);
  const object = posts.find(item => item.id === id.value);
  console.log(object);
  // quill
  // category
}

// END
// ==============================================================
onMounted(async()=>{
    await categoryStore.readAllCategory()
})

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

//For HTML input handling
const updateFile = () => {
  file.value = fileInput.files[0];
};







function onFileChange(event) {
  const file = event.target.files[0];
  uploadFile(file);
}


function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  if (cloudinaryCore.uploader) {
    cloudinaryCore.uploader.upload(formData, (error, result) => {
      if (!error) {
        console.log(result.secure_url);
        // Do something with the result.secure_url, like save it to your database
      } else {
        console.error(error);
      }
    });
  } else {
    console.error('Cloudinary uploader is not properly initialized.');
  }
}



function updateStore() {
  let data = {
    post_title: title.value,
    post_content: content.value.getHTML(),
    post_excerpt: content.value.getHTML().slice(0, 250),
    category_name: category.value
    // file: updateFile.value
  };

  console.log(data);

//   this need to be solved
  if (
    data.post_title == "" ||
    data.post_content == "" ||
    data.category_name == ""
  ) {
    alert("Please enter the fields first.");
    if (!categoryExists) {
      // popup a entry form
    }
    return false;
  }

  //Updating store

  postStore.createPost(data);

  router.push("/dashboard/postcollection");
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
