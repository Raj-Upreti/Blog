<template >
    <div>
            <div class="row align-items-center" v-for="(content, index) in postData.postList" :key="index">
                <div class="col-lg-3 ">
                    <router-link :to="{path: '/post/' + content.slug}">
                        <img :src="content.image" alt="" style="width:100%, object-fit:contain" height="130">
                    </router-link>
                </div>

                <div class="col-lg-9">
                    <div class="px-3 py-3">
                        <p class="mb-0">{{ content.author }}</p>
                        <router-link :to="{path: '/post' + content.slug}" style="text-decoration:none;">
                            <h5 class="fw-bold mb-0" style="color:black;">{{ content.title }}</h5>
                            <p class="mb-2" style="color:rgba(117, 117, 117, 1);">{{ content.details }}</p>
                        </router-link>
                        <div class="d-flex flex-row small align-items-center bottom-section" style="color:rgba(117, 117, 117, 1);">
                            <p>{{ content.date }}</p>
                            <p class="readtime">{{ content.readtime }}</p>
                            <button class="btn btn-sm btn-light rounded-5"
                                style="font-size:0.7rem;width: 15%;height:10%">{{ content.category }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>


<script setup>

import { usePostStore } from '../../../store/postStore';
const postData = usePostStore();
// postData.postList.shift()
// let posts = postData.postList;

// console.log(postData.length)

</script>
