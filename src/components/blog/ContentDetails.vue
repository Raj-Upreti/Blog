<template>
  <div class="container container-fluid p-4">
    <div class="row">
      <div class="col-md-8 border-end">
        <!-- content  -->
        <div v-for="(data,index) in postList" :key="index">
          <div class="d-flex flex-row">
            <p>{{ data.post_date }}</p> &nbsp; || &nbsp; 
            <p>{{ data.reading_time }}</p>
          </div>
          <h2>
            {{ data.post_title }}
          </h2>
          <div class="img">
            <img :src="data.post_image" style="width:100%">
          </div>
          <div class="content">
            <p>{{ data.post_content }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-4 position-sticky" style="top:6rem; height:0rem;">
        <div class="h5 fw-bold">More from Pasal</div>
        <hr />
        <div class="row pb-3 align-items-center" v-for="(blog, index) in blogs" :key="index">
          <div class="col-md-8">
            <!-- <p class="mb-2">{{ blog.author }}</p> -->
            <h6 class="fw-bold">{{ blog.title }}</h6>
          </div>
          <div class="col-md-4">
            <img :src="blog.image" alt style="width:80%; object-fit:cover; height:5rem;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { usepostStore } from "../../store/postStore";
import { useRouter } from "vue-router";

const route = useRouter();
const postStore = usepostStore();
const content = ref(null);


const postList = computed(() => {
  if (route.currentRoute.value.params.slug) {
    const filteredList = postStore.postList.filter((data) => {
      return data.slug === route.currentRoute.value.params.slug;
    });
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

const blogs = [
  {
    author: "Mark Schaefer",
    title: "I just earned my first revenue from ChatGPT and other observations",
    image: "https://miro.medium.com/focal/112/112/50/50/0*6eHeV5x8tWLdiYpV.png"
  },

  {
    author: "Josep Ferrer",
    title: "5 ChatGPT features to boost your daily work",
    image:
      "https://miro.medium.com/focal/112/112/50/50/1*XiVzB765eBip73jVQiAxkA.png"
  },

  {
    author: "Enda",
    title: "12 AI Websites That Will Blow Your Mind",
    image: "https://miro.medium.com/focal/112/112/50/50/0*Ei3h_oQl4R7yKmTE"
  },

  {
    author: "The PyCoach",
    title: "3 ChatGPT Extensions to Automate Your Life",
    image:
      "https://miro.medium.com/focal/112/112/50/50/1*jBqAOsjmedJVHwGbyP5PTw.jpeg"
  },

  {
    author: "Ryan Holiday",
    title: "If You Only Read A Few Books In 2023, Read These",
    image: "https://miro.medium.com/focal/112/112/50/50/0*6h0h300r6FqggzRq"
  }
];
</script>

<style scoped>
</style>