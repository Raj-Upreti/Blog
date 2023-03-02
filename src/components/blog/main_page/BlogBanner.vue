<template>
    <div class=" container pt-3 container-fluid border-bottom">
        <div class="row py-5">
            <div class="col-md-8" >
                <router-link :to="{path: '/post'}">
                    <img class="rounded-9" :src="post.image" style="width:100%; object-fit:cover; height:27rem;">
                </router-link>
                
            </div>
            <div class="col-md-4" style="font-size:1rem;">
                <router-link :to="{path: '/post'}" style="text-decoration:none; color:black;">
                   <!-- {{ post. }} -->
                   <div class="d-flex pb-2 align-items-center">
                    <p class="fw-bold">{{ post.author }}</p>
                    <div style="padding: 0 0.5rem;">|</div>
                    <p>{{ post.date }}</p>
                   </div>
                   <p class="h3 fw-bold" style="line-height: 1.5">{{ post.title }}</p>
                   <p class="pt-2 text-muted" style="font-size:1.2rem;">{{ post.details }}</p>
                </router-link>
            </div>
        </div>        
    </div>
</template>

<script setup>
//Importing Store
import {usepostStore} from '../../../store/postStore';

const postData = usepostStore();
let post = postData.postList[0];

// console.log(post)

</script>

