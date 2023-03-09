<template >
    <div>
        Successfully Deleted
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usepostStore } from '../../../store/postStore';
import router from '../../../router';


const route = useRoute()

// Use a computed property to extract the `slug` parameter from the current route
const id = computed(() => route.params.id);
const postStore = usepostStore();
postStore.deletePost(id);
router.push('/dashboard/postcollection')



</script>
<style >
    
</style>