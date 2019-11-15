const state = {
    items: [
        {
            id: 1,
            img: require('../../public/mainpage/Carousel/Example.png'),
            name: "6og Secure Hoodie Black",
            price: 20,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas purus id felis feugiat vulputate. Nullam mattis metus a risus faucibus ullamcorper. Nullam mattis metus a risus faucibus ullamcorper.",
            selectedSize: null,
        },
        {
            id: 2,
            img: require('../../public/mainpage/Carousel/Example.png'),
            name: "6og Secure T-shirt Black",
            price: 50,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas purus id felis feugiat vulputate. Nullam mattis metus a risus faucibus ullamcorper. Pellentesque accumsan, est eu feugiat viverra, quam lectus iaculis eros, sit amet dignissim lectus orci non dui. Etiam nisl ante, vulputate eget lorem et, rutrum mollis metus. Vivamus sodales purus leo, in ultrices lacus pulvinar nec.",
            selectedSize: null,
        }
    ],
}


const getters = {}


const actions = {}


const mutations = {
    selectSize(state, payload) {
        state.items[payload.id].selectedSize = payload.size
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}