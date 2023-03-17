<template>
    <div class=" container pt-3 container-fluid border-bottom">
        <div class="row py-5" v-for="(content, index) in post" :key="index">
           
            <div v-if="content.post_image" class="col-md-8" >
                 <router-link :to="{path: '/post/' + content.slug}">
                      <img class="rounded-9 border" :src="content.post_image"  style="width:100%; object-fit:cover; height:27rem;"> 
                </router-link>  
                
            </div>
             
             <div v-if="content.post_image" class="col-md-4"  style="font-size:1rem;">
                <router-link :to="{path: '/post/' + content.slug}" style="text-decoration:none; color:black;">
                   <div class="d-flex pb-2 align-items-center">
                     <p class="">{{ content. reading_time}}</p>
                    <div style="padding: 0 0.5rem;">|</div>
                    <p>{{ content.post_date_gmt }}</p>
                   </div>
                   <p class="h3 fw-bold" style="line-height: 1.5">{{ content.post_title }}</p>
                   <p class="pt-2 text-muted" style="font-size:1.2rem;" v-html="content.post_excerpt"></p> 
                </router-link>
            </div> 

            <div v-if="!content.post_image" class="col-md-12"  style="font-size:1rem;">
                <router-link :to="{path: '/post/' + content.slug}" style="text-decoration:none; color:black;">
                   <div class="d-flex pb-2 align-items-center">
                     <p class="fw-bold">{{ content.reading_time }}</p>
                    <div style="padding: 0 0.5rem;">|</div>
                    <p>{{ content.post_date_gmt }}</p>
                   </div>
                   <p class="h3 fw-bold" style="line-height: 1.5">{{ content.post_title }}</p>
                   <p class="pt-2 text-muted" style="font-size:1.2rem;" v-html="content.post_excerpt"></p> 
                </router-link>
            </div> 

            
        </div>        
    </div>
</template>

<script setup>
//Importing Store
import { computed, onMounted } from 'vue'
import {usepostStore} from '../../../store/postStore';
import { useblogCategory } from '../../../store/blogCategory';

const postStore = usepostStore();
const categoryStore= useblogCategory();

onMounted(async () => {
    postStore.readAllPosts();
    categoryStore.readAllCategory();
})

const post = computed(() => {
  return postStore.postList.filter((value, index) => {
    // Filter out the first element of the array
    return index == 0;
  });
});

 


</script>

