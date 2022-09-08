import Registration from "../pages/Registration.vue";

import {createRouter, createWebHistory} from "vue-router";
import Authorization from "../pages/Authorization.vue";
import Verify from "../pages/Verify.vue";
import ResetPassword from "../pages/ResetPassword.vue";
import ResetPasswordOnEmail from "../pages/ResetPasswordOnEmail.vue";

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
        path: '/authentication/verify',
        component: Verify,
        name: 'verify'
    },
    {
        path: '/authentication/reset',
        component: ResetPassword,
        name: 'reset'
    },
    {
        path: '/authentication/reset/:code?user=:username',
        component: ResetPasswordOnEmail,
        name: 'reset-password-on-email'
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router;
