import { defineStore } from "pinia";
import router from "../router";
import PostService from '../service/postService';

export const usepostStore = defineStore('postStore', {
    state: () => ({
        postList: []
    }),

    actions: {
       //
    async readAllPosts() {
        try {
          const response = await PostService.ReadAllPost()
          this.postList = response;
        } catch (error) {
          console.log(error)
          // handle the error here
        }
      },  

    

    async addPost(data) {
        try {
            const response = await PostService.CreatePost(data)
            // console.log(response);
            this.postList.push(response);
            router.push('/dashboard/postcollection')
          } catch (error) {
            console.log(error)
            // handle the error here
          }
    },

  //   addPost(postData) {
  //     this.postList.push(postData);
  // }

}

   
})