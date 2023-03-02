
import { createRouter, createWebHistory } from 'vue-router'

import Blog from '../view/Blog.vue';
import Help from '../components/blog/Help.vue';
import Login from '../components/blog/Login.vue';
import Archive from '../components/blog/Archive.vue';
import Ourstory from '../components/blog/Ourstory.vue';
import ContentDetails from '../components/blog/ContentDetails.vue';
import AddBlog from '../components/dashboard/AddBlog.vue';
import PostCollection from '../components/dashboard/PostCollection.vue';
import CategoryCollection from '../components/dashboard/CategoryCollection.vue';
import DashboardHome from '../components/dashboard/DashboardHome.vue';
import MainPage from '../components/blog/MainPage.vue';
import Dashboard from '../view/Dashboard.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', 
        name: 'home', 
        component: Blog, 
        children:[
            { path: '', name: 'main-page', component: MainPage },
            { path: 'post/:slug', name: 'single-post', component: ContentDetails },
            { path: 'ourstory', name: 'ourstory', component: Ourstory },
            { path: 'login', name: 'login', component: Login },
            { path: 'category/:slug', name: 'program', component: Archive },
            { path: 'help', name: 'help', component: Help },
        ] 
        },
        {
            path: '/dashboard', 
            name: 'dashboard-home', 
            component: Dashboard, 
            children: [

                { path:'', name:'dashboardhome', component:DashboardHome },
                { path: 'postcollection', name: 'PostCollection', component: PostCollection},
                { path: 'categorycollection', name: 'CategoryCollection',component: CategoryCollection},
                { path: 'addblog', name:'addblog', component: AddBlog},
            ]
        },
          
    ]
})

export default router;