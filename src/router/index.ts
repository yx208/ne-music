import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView/index.vue";

const router = createRouter({
    routes: [
        {
            path: '/login',
            component: () => import("../views/LoginView/index.vue")
        },
        {
            path: '/',
            component: HomeView,
            children: [
                {
                    path: "player",
                    component: () => import("../views/PlayerView/index.vue")
                }
            ]
        }
    ],
    history: createWebHistory()
});

export default router;
