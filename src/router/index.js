
import { createRouter, createWebHistory } from 'vue-router'

import Blog from '../view/Blog.vue';
// import Help from '../components/blog/Help.vue';
// import Login from '../components/blog/Login.vue';
import Archive from '../components/blog/Archive.vue';
import Write from '../components/blog/Write.vue';
import Updates from '../components/blog/Updates.vue';
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
        //All Blog routers
        { path: '/', 
        name: 'home', 
        component: Blog, 
        children:[
            { path: '', name: 'main-page', component: MainPage },
            { path: 'post/:slug', name: 'single-post', component: ContentDetails },
            // { path: 'ourstory', name: 'ourstory', component: Ourstory },
            // { path: 'login', name: 'login', component: Login },
            { path: 'category/:slug', name: 'program', component: Archive },
            // { path: 'help', name: 'help', component: Help },
            { path: 'write', name: 'help', component: Write },
            { path: 'update', name: 'update', component: Updates },
        ] 
        },

        //All Dashboard routers
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