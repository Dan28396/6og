const state = {
    items: [
        {
            id: 1,
            img: require('../../public/mainpage/Carousel/Example.png'),
            name: "6og Secure Hoodie Black",
            price: 20,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas purus id felis feugiat vulputate. Nullam mattis metus a risus faucibus ullamcorper. Nullam mattis metus a risus faucibus ullamcorper.",
            inventory: 20,

        },
        {
            id: 2,
            img: require('../../public/mainpage/Carousel/Example.png'),
            name: "6og Secure Hoodie Black",
            price: 50,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas purus id felis feugiat vulputate. Nullam mattis metus a risus faucibus ullamcorper. Pellentesque accumsan, est eu feugiat viverra, quam lectus iaculis eros, sit amet dignissim lectus orci non dui. Etiam nisl ante, vulputate eget lorem et, rutrum mollis metus. Vivamus sodales purus leo, in ultrices lacus pulvinar nec.",
            inventory: 10,
        }
    ]
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
    decrementProductInventory(state, {id}) {
        const product = state.items.find(product => product.id === id)
        product.inventory--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}