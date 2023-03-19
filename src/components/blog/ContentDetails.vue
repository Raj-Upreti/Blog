<template>
  <div class="container container-fluid p-4">
    <div class="row">
      <div class="col-md-8 border-end">
        <!-- content  -->
        <div v-for="(data,index) in postList" :key="index">
          <div class="d-flex flex-row">
            <p>{{ data.post_date }}</p> &nbsp; | &nbsp; 
            <p>{{ data.reading_time }}</p>
          </div>
          <h2 class="py-3">
            {{ data.post_title }}
          </h2>
          <div class="img">
            <img :src="data.post_image" style="width:100%;">
          </div>
          <div class="content py-5">
            <p v-html="data.post_content"></p>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-4 " style="top:6rem; height:0rem;">
        <div class="h5 fw-bold">Related Articles</div>
        <hr />
        <BlogHomeList :post="routeData"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { usepostStore } from "../../store/postStore";
import { useRouter } from "vue-router";
import BlogHomeList from "./main_page/BlogHomeList.vue";

const route = useRouter();
const postStore = usepostStore();
const routeData = ref('');


const postList = computed(() => {
  if (route.currentRoute.value.params.slug) {
    const filteredList = postStore.postList.filter((data) => {
      return data.slug === route.currentRoute.value.params.slug;
    });
    
    if (filteredList[0] != undefined){
      routeData.value = filteredList[0]['category_name']
    }
  
    return filteredList;
  } else {
    return postStore.postList;
  }
});


// console.log(data)

onMounted(() => {
  postStore.readAllPosts();
});

console.log(postStore.readAllPosts());

// const blogs = [
//   {
//     author: "Mark Schaefer",
//     title: "I just earned my first revenue from ChatGPT and other observations",
//     image: "https://miro.medium.com/focal/112/112/50/50/0*6eHeV5x8tWLdiYpV.png"
//   },

//   {
//     author: "Josep Ferrer",
//     title: "5 ChatGPT features to boost your daily work",
//     image:
//       "https://miro.medium.com/focal/112/112/50/50/1*XiVzB765eBip73jVQiAxkA.png"
//   },

//   {
//     author: "Enda",
//     title: "12 AI Websites That Will Blow Your Mind",
//     image: "https://miro.medium.com/focal/112/112/50/50/0*Ei3h_oQl4R7yKmTE"
//   },

//   {
//     author: "The PyCoach",
//     title: "3 ChatGPT Extensions to Automate Your Life",
//     image:
//       "https://miro.medium.com/focal/112/112/50/50/1*jBqAOsjmedJVHwGbyP5PTw.jpeg"
//   },

//   {
//     author: "Ryan Holiday",
//     title: "If You Only Read A Few Books In 2023, Read These",
//     image: "https://miro.medium.com/focal/112/112/50/50/0*6h0h300r6FqggzRq"
//   }
// ];
</script>

<style scoped>
</style>