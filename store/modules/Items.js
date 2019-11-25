const state = {
    items: [
        {
            id: 1,
            img: [
                require('../../public/item/item1/bag.png'),
                require('../../public/item/item1/2t.jpg.png'),
                require('../../public/item/item1/3t.png'),
                require('../../public/item/item1/4t.png'),
                require('../../public/item/item1/5.jpg'),
            ],
            preview_img: require('../../public/item/item1/bag.png'),
            name: "6OG CHEST RIG 0001",
            price: 35,
            description: "COLOR: 013 BLACK" + "<br>" + "COUNTRY: RUSSIA" + "<br>" + "100% WATERPROOF",
            selectedSize: "ONESIZE",
            oneSize: true,
        },
        {
            id: 2,
            img: [
                require('../../public/mainpage/Carousel/Example.png'),
            ],
            preview_img: require('../../public/mainpage/Carousel/Example.png'),
            name: "6og Secure T-shirt Black",
            price: 50,
            description: "COLOR: 013 BLACK" + "<br>" + "COUNTRY: RUSSIA" + "<br>" + "100% WATERPROOF",
            selectedSize: "m",
            oneSize: false,
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