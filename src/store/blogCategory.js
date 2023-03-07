import { defineStore } from "pinia"
import CategoryService from '../service/catergoryService';

export const useblogCategory= defineStore('category', {
    state: () => ({
        categories: []
    }),

    getters: {

    },

    actions: {
        async ReadAllCategory() {
            try{
                const response= await CategoryService.ReadAllCategory();
                this.categories= response;
                console.log(response);
            }catch(error){
                console.log(error);
            }
        },

        async CreateCategory(data) {
            try {
                const response= await CategoryService.CreateCategory(data);
                this.categories.push(response);
                
            } catch (error) {
                console.log(error);
                
            }
        },

        // addCategory(categoryData) {
        //     this.categories.push(categoryData);
        // }
    }
})