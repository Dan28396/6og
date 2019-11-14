import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"
import MainPage from "@/components/MainPage/MainPage";
import Item from "@/components/ItemPage/Item";

Vue.use(Router)


const router = new Router({
    store,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/item/:id',
            component: Item,
            name: 'item'
        },

    ]
});

export default router
