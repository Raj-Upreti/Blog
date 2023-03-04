import axios from 'axios';
import router from '../router';

class PostService {

    // Post Service
    async ReadAllPost() {
        try {
            const response = await axios.get('api/post/');
            // localStorage.setItem('token', JSON.stringify(response.data))
            return Promise.resolve(response.data);
          } catch (error) {
            if (error.response && error.response.status === 400) {
              return Promise.reject('API error');
            } else {
              return Promise.reject('Error Fecthing Post');
            }
          }
    }

    async CreatePost(data){
        // response
    }

    async DeletePost(){

    }

    async UpdatePost(){

    }

}

export default new PostService();