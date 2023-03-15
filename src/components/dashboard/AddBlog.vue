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
        <form @submit.prevent>
          <div class="position-relative">
            <div
              class="alert alert-success position-absolute w-100"
              role="alert"
              v-if="successfullyAdded"
            >Successfully added !!!</div>
            <div v-if="isBlog" class="d-flex flex-column">
              <label for="link" class="form-label">
                Blog Link:
                <span class="text-danger">*</span>
              </label>

              <button
                class="btn btn-outline-info btn-sm mt-1 px-2 py-1 w-50"
                @click="clickRoute"
              >View Post</button>
            </div>
            <hr />
            <!-- if category exist -->
            <div v-if="categoryExists">
              <label for="category">
                Add Category
                <span class="text-danger">*</span>
              </label>
              <br />
              <select
                id="select"
                v-model="category"
                class="border-secondary py-2 rounded-3 w-100 border border-info"
                style="background:#f1f1f1;outline:none;"
              >
                <option value selected disabled>Select Category</option>
                <option
                  v-for="(category,index) in categoryList"
                  :key="index"
                  :value="category.id"
                >{{ category.name }}</option>
              </select>
            </div>

            <div v-if="!categoryExists">
              <div>
                <router-link
                  to="/dashboard/categorycollection"
                  class="text-light btn btn-sm btn-primary py-1 fs-6"
                >Add New Category</router-link>
              </div>
            </div>

            <hr />
            <div>
              <label for="image">Featured Image</label>
              <br />
              <input type="file" ref="file" @change="onFileChange"/>
              <!-- <input type="file" ref="fileInput" @change="onFileChange()" /> -->
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
import router from "../../router";
//Vue Quill registration locally
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
//Importing Stores
import { usepostStore } from "../../store/postStore";
import { useblogCategory } from "../../store/blogCategory";
import { useRoute } from "vue-router";
// import cloudinary from "cloudinary-core";

// Replace 'your-cloud-name' with your actual Cloudinary cloud name.
// const cloudName = "mediaholic-nepal";

// alert
const successfullyAdded = ref(false);

// if blog is added
const isBlog = ref(false);

// Replace 'your-api-key' and 'your-api-secret' with your actual Cloudinary API Key and Secret.
// const apiKey = '353428766987396';
// const apiSecret = 'SjTPgChloMGOsXbZxEkiTKMSezM';

// const cloudinaryCore = new cloudinary.Cloudinary({
//   cloud_name: cloudName,
//   api_key: apiKey,
//   api_secret: apiSecret,
//   secure:true
// });

//variables
var title = ref("");
var content = ref("");
const file = ref(null);
const category = ref("");
const fileInput= ref(null);

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
  // console.log(posts);
  const object = posts.find(item => item.id === id.value);
  // console.log(object);
  // quill
  // category
}

// END
// ==============================================================
onMounted(async () => {
  await categoryStore.readAllCategory();
});

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

function onFileChange(event) {
  // console.log(event);
  file.value = event.target.files[0];
  // console.log(file.value);
}

function updateStore() {
  let data = {
    post_title: title.value,
    post_content: content.value.getHTML(),
    post_excerpt: content.value.getHTML().slice(0, 250),
    category_name: category.value,
    post_image: file.value.name
  };
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
  if (
    data.post_title != "" ||
    data.post_content != "" ||
    data.category_name != ""
  ) {
    successfullyAdded.value = true;
    isBlog.value = true;
    setTimeout(() => {
      successfullyAdded.value = false;
    }, 1000);
  }

  //Updating store
  postStore.createPost(data);
  // Clear input fields
  title.value = "";
  content.value = "";
  category.value = "";
}

// when route is clicked
// when route is clicked
function clickRoute() {
  const data = {
    post_title: title.value,
    post_content: content.value.getHTML(),
    post_excerpt: content.value.getHTML().slice(0, 250),
    category_name: category.value
  };

  // format post title for URL and remove trailing spaces
  const formattedPostTitle = encodeURIComponent(
    data.post_title.trim().replace(/\s+/g, "-")
  );

  // navigate to corresponding post page
  router.push(`/post/${formattedPostTitle}`);
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


<!-- 
<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="postTitle">Post Title:</label>
        <input type="text" id="postTitle" v-model="postTitle" required>
      </div>
      <div>
        <label for="postDescription">Post Description:</label>
        <textarea id="postDescription" v-model="postDescription" required></textarea>
      </div>
      <div>
        <label for="postImage">Post Image:</label>
        <input type="file" id="postImage" @change="uploadImage">
      </div>
      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';

const postTitle = ref('');
const postDescription = ref('');
const postImage = ref(null);

const submitPost = async () => {
  const formData = new FormData();
  formData.append('postTitle', postTitle.value);
  formData.append('postDescription', postDescription.value);
  formData.append('postImage', postImage.value);
  try {
    const response = await axios.post('/api/post', formData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const uploadImage = (event) => {
  const file = event.target.files[0];
  postImage.value = file;
};
</script> -->

