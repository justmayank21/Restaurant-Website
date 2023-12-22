import HomePage from './components/HomePage.vue'
import signUp from './components/signUp.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LoginPage from './components/LoginPage.vue'

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'signUp',
        component:signUp,
        path:'/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;