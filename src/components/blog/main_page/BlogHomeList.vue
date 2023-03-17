<template >
  <div>
    <div class="row mb-5" v-for="(content, index) in postList" :key="index">
      <div class="col-lg-3">
        <router-link class="w-100 h-100" :to="{ path: '/post/' + content.slug }">
          <img class="rounded-6" :src="content.post_image" alt style="width:100%; object-fit:cover; height:9rem;" />
        </router-link>

      </div>

      <div class="col-lg-9">
        <router-link :to="{ path: '/post/' + content.slug }" style="text-decoration:none;">
          <div class="h5 fw-bold mb-0" style="color:black;">{{ content.post_title }}</div>

          <p v-if="showExcerpt" class="mb-1" style="color:rgba(117, 117, 117, 1);" v-html="content.post_excerpt"></p>
        </router-link>

        <div class="d-flex text-muted" style="font-size:0.8rem;">
          <p>{{ content.reading_time }} read </p>
          <p class="date">{{ content.post_date }}</p>
        </div>
      </div>
    </div>

    <div class="fs-4 text-muted" v-if="noPosts">
        " No related articles found
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, defineProps } from "vue";
import { usepostStore } from "../../../store/postStore";
import { useblogCategory } from "../../../store/blogCategory";
import { useRouter } from "vue-router";

const showExcerpt = ref(true);
const postStore = usepostStore();
const categoryStore = useblogCategory();
const route = useRouter();
const noPosts = ref(false);



const props = defineProps({
  post: {
    type: String,
    required: true
  }
});

onMounted(async () => {
  postStore.readAllPosts();
  categoryStore.readAllCategory();

  if (route.currentRoute.value.name == "single-post") {
    showExcerpt.value = false;
  }
});


const postList = computed(() => {
  if (props.post == "home") {
    return postStore.postList.filter((value, index) => {
      // Filter out the first element of the array
      return index > 0;
    });
  } else {
    if (route.currentRoute.value.name == "search") {
      
      var searchResult = postStore.postList.filter(item => {
        return Object.values(item).some(val => {
          const regex = new RegExp("\\b" + route.currentRoute.value.params.slug + "\\b", "i");
          return regex.test(val);
        });
      });

      if (searchResult != undefined){
        if (searchResult == 0 ){
          noPosts.value = true
        }
      }
      return searchResult;
    } else {
      // category filter
      postStore.get_posts();
      const category = categoryStore.categories.find((value, index) => {
        if (value.slug == props.post || value.name == props.post) {
          return value.name;
        }
      });

      if (category != undefined) {
        return postStore.postList.filter((value, index) => {
          return value.category_name == category.name;
        });
      }
    }
  }
});
</script>


<style scoped>
.date::before {
  content: "\2022";
  padding: 0rem 0.5rem;
}
</style>
