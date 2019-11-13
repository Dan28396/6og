import Vue from 'vue'
import Vuex from 'vuex'
import Cart from "./Cart";


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
    strict: debug,
    modules: {Cart},
    state: {
        items: [
            {
                id: 1,
                img: require('../public/mainpage/Carousel/Example.png'),
                path: '/item',
                name: "6og Secure Hoodie Black",
                price: 20,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas purus id felis feugiat vulputate. Nullam mattis metus a risus faucibus ullamcorper. Nullam mattis metus a risus faucibus ullamcorper.",
                s_size: 10,
                m_size: 15,
                l_size: 20,
                xl_size: 25,

            },
            {
                id: 2,
                img: require('../public/mainpage/Carousel/Example.png'),
                path: '/jopa',
                name: "6og Secure Hoodie Black",
                price: 50,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas purus id felis feugiat vulputate. Nullam mattis metus a risus faucibus ullamcorper. Pellentesque accumsan, est eu feugiat viverra, quam lectus iaculis eros, sit amet dignissim lectus orci non dui. Etiam nisl ante, vulputate eget lorem et, rutrum mollis metus. Vivamus sodales purus leo, in ultrices lacus pulvinar nec.",
                s_size: 25,
                m_size: 20,
                l_size: 15,
                xl_size: 10,
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {}
})


