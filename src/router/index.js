import Registration from "../pages/Registration.vue";

import {createRouter, createWebHistory} from "vue-router";
import Authorization from "../pages/Authorization.vue";
import VerifyOnEmail from "../pages/VerifyOnEmail.vue";
import ResetPasswordOnEmail from "../pages/ResetPasswordOnEmail.vue";
import changePasswordOnEmail from "../pages/ChangePasswordOnEmail.vue";
import ResetOrChangePassword from "../pages/ResetOrChangePassword.vue";
import SentEmailMassage from "../pages/SentEmailMassage.vue";
import SuccessMessage from "../pages/SuccessMessage.vue";

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
        component: VerifyOnEmail,
        name: 'verify-on-email'
    },
    {
        path: '/authentication/reset',
        component: ResetOrChangePassword,
        name: 'reset-or-change'
    },
    {
        path: '/authentication/reset/:code?user=:username',
        component: ResetPasswordOnEmail,
        name: 'reset-password-on-email'
    },
    {
        path: '/authentication/reset',
        component: changePasswordOnEmail,
        name: 'change-on-email'
    },
    {
        path: '/authentication/sent-massage-on-email',
        component: SentEmailMassage,
        name: 'sent-massage-on-email'
    },
    {
        path: '/authentication/success-message',
        component: SuccessMessage,
        name: 'success-message'
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router;
