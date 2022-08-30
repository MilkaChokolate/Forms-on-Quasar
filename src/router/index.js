import Registration from "../pages/Registration.vue";

import {createRouter, createWebHistory} from "vue-router";
import Authorization from "../pages/Authorization.vue";
import Verify from "../pages/Verify.vue";

const routes = [
    {
        path: '/authentication/register',
        component: Registration,
        name: 'registration'
    },
    {
        path: '/authentication/login',
        component: Authorization,
        name: 'authorization'
    },
    {
        path: '/authentication/verify/:code?user=:username',
        component: Verify,
        name: 'verify'
    }

]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router;
