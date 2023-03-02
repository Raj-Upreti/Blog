<template >
    <div>
            <div class="row mb-5" v-for="(content, index) in postList" :key="index">
                <div class="col-lg-3">
                    <router-link class="w-100 h-100" :to="{path: '/post/' + content.slug}">
                        <img class="rounded-6" :src="content.image" alt="" style="width:100%; object-fit:cover; height:100%;">
                    </router-link>
                </div>

                <div class="col-lg-9">
                    
                        <router-link :to="{path: '/post' + content.slug}" style="text-decoration:none;">

                            <div class="h5 fw-bold mb-0" style="color:black;">{{ content.title }} {{ content.id }}</div>
                            
                            <p class="mb-1" style="color:rgba(117, 117, 117, 1);">{{ content.details }}</p>

                        </router-link>

                        <div class="d-flex text-muted" style="font-size:0.8rem;">
                            <p>{{ content.readtime }} read</p>
                            <p class="date">{{ content.date }}</p>
                        </div>
                </div>
            </div>
    </div>
</template>


<script setup>

import { usepostStore } from '../../../store/postStore';
const postData = usepostStore();

const postList =  postData.postList.filter((value,index) => index > 0)

// homelist

// category

// postData.postList.shift()
// let posts = postData.postList;

// console.log(postData.length)

</script>


<style scoped>
.date::before {
    content: "\2022";
    padding: 0rem 0.5rem;
}
</style>
