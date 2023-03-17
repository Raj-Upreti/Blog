<template>
  <div>
    <router-view />
  </div>
</template>


<script setup>

import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import './axios';
import { v4 as uuidv4 } from 'uuid';

const route = useRouter();

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  var scrollPosition = window.scrollY;

  var data = {
    url: route.currentRoute.value.fullPath
  }

  if (route.currentRoute.value.name == "single-post") {
    data.post_slug = route.currentRoute.value.params.slug;
    data.post = true;
  } else {
    data.post = false;
  }

  if (scrollPosition > 360) {

    const alreadyViewed = localStorage.getItem(data.url)
    if ( alreadyViewed == false || alreadyViewed == null ) {
      axios.post('api/urlview/', data);
      localStorage.setItem(data.url, uuidv4())
    }
  }
}


</script>


