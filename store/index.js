import Vue from 'vue'
import Vuex from 'vuex'
import Cart from "./modules/Cart";
import Items from "./modules/Items"


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
    strict: debug,
    modules: {Cart, Items},
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})


