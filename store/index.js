import Vue from 'vue'
import Vuex from 'vuex'
import Cart from "./modules/Cart";
import Items from "./modules/Items"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
    plugins: [createPersistedState()],
    strict: debug,
    modules: {Cart, Items},
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})


