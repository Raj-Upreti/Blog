import { defineStore } from "pinia";
import router from "../router";
import PostService from '../service/postService';

export const usepostStore = defineStore('postStore', {
    state: () => ({
        postList: []
    }),

    actions: {
       // login user
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
            this.postList.push(response);
            router.push('/dashboard/postcollection')
          } catch (error) {
            console.log(error)
            // handle the error here
          }
    },

    addData(){
        console.log("adding data");
        this.postList.push({
            "id": 5,
            "post_date": "2023-03-03T06:37:08.395364Z",
            "post_date_gmt": "2023-03-03T06:37:08.395388Z",
            "post_content": "prakash",
            "post_title": "asdfg",
            "post_excerpt": "asdfgh",
            "reading_time": "12",
            "post_status": "Draft",
            "ping_status": "",
            "post_modified": "2023-03-03T06:37:08.395422Z",
            "post_modified_gmt": "2023-03-03T06:37:08.395437Z",
            "post_author": null,
            "comment_status": null,
            "comments_count": null,
            "category_name": 1
        });
    }

}

   
})