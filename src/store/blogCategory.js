import { defineStore } from "pinia"

export const useblogCategory= defineStore('category', {
    state: () => ({
        categories: [
            {
                "category-name": "Programming",
                "category-slug": "programming",
            },
            {
                "category-name": "Data Science",
                "category-slug": "data-science",
            },
            {
                "category-name": "Technology",
                "category-slug": "technology",
            },
            {
                "category-name": "Self Improvement",
                "category-slug": "self-improvement",
            },
            {
                "category-name": "Writing",
                "category-slug": "writing",
            },
            {
                "category-name": "Relationship",
                "category-slug": "relationship",
            },
            {
                "category-name": "Politics",
                "category-slug": "politics",
            },
            {
                "category-name": "Productivity",
                "category-slug": "productivity",
            },
            {
                "category-name": "Machine Learning",
                "category-slug": "machine-learning",
            },
            
        ]
    }),

    getters: {

    },

    actions: {
        addCategory(categoryData) {
            this.categories.push(categoryData);
        }
    }
})