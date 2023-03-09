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

                            <div class="h5 fw-bold mb-0" style="color:black;">{{ content.id }}. {{ content.post_title }}</div>
                            
                            <p class="mb-1" style="color:rgba(117, 117, 117, 1);" v-html="content.post_content"></p>

                        </router-link>

                        <div class="d-flex text-muted" style="font-size:0.8rem;">
                            <p>{{ content.reading_time }} 12 min read</p>
                            <p class="date">{{ content.post_date }}</p>
                        </div>
                </div>
            </div>
    </div>
</template>


<script setup>
import { computed,onMounted} from 'vue'
import { usepostStore } from '../../../store/postStore';
import { useblogCategory } from '../../../store/blogCategory';
const postStore = usepostStore();
const categoryStore= useblogCategory();


onMounted(async () => {
    postStore.readAllPosts();
    categoryStore.readAllCategory();
})


const postList = computed(() => {
  return postStore.postList.filter((value, index) => {
    // Filter out the first element of the array
    return index > 0;
  });
});

// const postList =  postStore.postList.filter((value,index) => index > 0)
// console.log(value, index);
console.log(postList);

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
