import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";

import about from "./pages/about.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about/:id",
        component: about,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;