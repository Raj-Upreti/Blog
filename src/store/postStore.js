import { defineStore } from "pinia";

export const usepostStore = defineStore('postStore', {
    state: () => ({
        postList: [
            {
                image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse? The name "Nepal" is first recorded in texts from the Vedic period of the Indian subcontinent, the era in ancient Nepal when Hinduism was founded, the predominant religion of the country. In the middle of the first millennium BC,',
                date: 'July 20, 2023',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },

            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse?',
                date: 'Jan 20 ',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },

            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse?',
                date: 'Jan 20 ',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },

            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse?',
                date: 'jan 20. ',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },

            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse?',
                date: 'jan 20. ',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },

            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse?',
                date: 'jan 20. ',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },

            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse?',
                date: 'jan 20. ',
                readtime: '15 min',
                category: 'Smart Home',
                slug: "chatgpt-3"
            },
        ]
    }),

    actions: {
        addBlog(data) {
            this.postList.push(data);
        }

    }
})