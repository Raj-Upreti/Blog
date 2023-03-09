import { defineStore } from "pinia"
import router from "../router";
import CategoryService from '../service/catergoryService';

export const useblogCategory= defineStore('category', {
    state: () => ({
        categories: []
    }),

    getters: {
        // get_categories: (state) =>  state.categories.length
    },

    actions: {
        async readAllCategory() {
            try{
                const response= await CategoryService.ReadAllCategory();
                this.categories= response;
            }catch(error){
                console.log(error);
            }
        },

        async addCategory(data) {
            try {
                const response = await CategoryService.CreateCategory(data);
                this.categories.push(response);
            } catch (error) {
                console.log(error);
                
            }
        },

        async deleteCategory(id) {
            try {
                await CategoryService.deleteCategory(id)
                .then (res => {
                    const newCategory = this.categories.filter(item => item.id !== id)
                    this.categories = newCategory;

                })
            } catch (error) {
                console.log(error);
            }
        }

        // addCategory(categoryData) {
        //     this.categories.push(categoryData);
        // }
    }
})