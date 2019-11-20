import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"
import MainPage from "@/components/MainPage/MainPage";
import Item from "@/components/ItemPage/Item";
import CheckoutPage from "@/components/Checkout/CheckoutPage";

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
            name: 'item',
            props: true,
        },
        {
            path: '/checkout',
            component: CheckoutPage
        },

    ]
});

export default router
