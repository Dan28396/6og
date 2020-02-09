import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"
import MainPage from "@/components/MainPage/MainPage";
import Item from "@/components/ItemPage/Item";
import CheckoutPage from "@/components/Checkout/CheckoutPage";
import OopsPage from "@/components/OopsPage";
import AppPage from "@/components/MainPage/AppPage";
import Orders from "../src/components/OrdersPage/Orders";

Vue.use(Router)


const router = new Router({
    store,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
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
            name: 'checkout',
            component: CheckoutPage
        },
        {
            path: '/app',
            name: 'app',
            component: AppPage
        },
        {
            path: '/orders',
            component: Orders
        },
        {
            path: '*',
            component: OopsPage
        },


    ]
});

export default router
