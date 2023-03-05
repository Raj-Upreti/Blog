import axios from 'axios';
import router from '../router';

class CategoryService {

    // Post Service
    async ReadAllCategory() {
        try {
            const response= await axios.get('');
            return Promise.resolve(response.data); 
        } catch (error) {
            if(error.response && error.response.status === 400){
                return Promise.reject('API error');
            } else {
                return Promise.reject('Error fetching Category');
            }
        }

    }

    async CreateCategory(){

    }

    async DeleteCategory(){

    }

    async UpdateCategory(){

    }

}

export default new CategoryService();