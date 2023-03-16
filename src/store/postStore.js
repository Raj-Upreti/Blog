import { defineStore } from "pinia";
import router from "../router";
import PostService from '../service/postService';
import { useblogCategory } from './blogCategory';

export const usepostStore = defineStore('postStore', {
    state: () => ({
        postList: [],
    }),

    getters: {
      // getPostById: (state) => (id) => {
      //   return state.postList.find((post) => post.id === id);
      // },
    },

    actions: {

      get_posts() {
        const categoryStore = useblogCategory();
        this.postList.forEach((el)=>{
          el.action = "";
          categoryStore.categories.forEach((cat)=>{
            if (el.category_name == cat.id){
              el.category_name = cat.name
              el.action = `
              <a class='btn btn-sm btn-danger' href='post/delete/${el.id}'>Delete</a>
              <a class='btn btn-sm btn-info' href='/dashboard/post/edit/${el.id}'>Edit</a>`
            }
          })
        })

        if (this.postList.length != 0){
          return true
        }else{
          return false
        }

      },

    async readAllPosts() {
        try {
          await PostService.readAllPost()
          .then((response)=>{
            this.postList = response;

          })
        } catch (error) {
          console.log(error)
          // handle the error here
        }
      },  

    

    async createPost(data) {
      console.log(data);
        try {
            const response = await PostService.createPost(data)
            console.log(response);
            this.postList.push(response);
          } catch (error) {
            console.log(error)
            // handle the error here
          }
    },

    async deletePost(id) {
      // console.log(id.value);
      try {
        await PostService.deletePost(id.value)
        .then(res => {
          const newPosts = this.postList.filter(item => item.id !== id)
          this.postList = newPosts;
        })
      } catch(error){
        console.log(error);
      }
    }



}

   
})