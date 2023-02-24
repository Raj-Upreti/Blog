<template>
    <div class=" container container-fluid border-bottom">
        <div class="row py-2">
            <div class="col-md-8">
                <router-link :to="{path: '/post'}">
                    <img class="rounded-5" :src="post.image" alt="" style="width:99%; object-fit:contain;">
                </router-link>
                
            </div>
            <div class="col-md-4" style="font-size:1rem;">
                <router-link :to="{path: '/post'}" style="text-decoration:none; color:black;">
                   <!-- {{ post. }} -->
                   <p class="fs-5">{{ post.author }}</p>
                   <h1>{{ post.title }}</h1>
                   <p class="fs-5">{{ post.details }}</p>
                </router-link>
            </div>
        </div>        
    </div>
</template>

<script setup>
//Importing Store
import {usePostStore} from '../../../store/postStore';

const postData = usePostStore();
let post = postData.postList.shift();

// console.log(post)

</script>