import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
    state: () => ({
        postList: [
            {
                image: 'https://miro.medium.com/fit/c/400/268/1*l9yQEYry4mPPajh4bLxP_w.jpeg',
                author: 'Mate Marschalko',
                title: 'ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant',
                details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vitae quae fuga, iustosapiente esse? The name "Nepal" is first recorded in texts from the Vedic period of the Indian subcontinent, the era in ancient Nepal when Hinduism was founded, the predominant religion of the country. In the middle of the first millennium BC, Gautama Buddha, the founder of Buddhism, was born in Lumbini in southern Nepal. Parts of northern Nepal were intertwined with the culture of Tibet.',
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