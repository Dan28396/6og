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
            sizeTable: require('../../public/item/t-shirt.svg'),
            price: 35,
            description: "COLOR: 013 BLACK" + "<br>" + "COUNTRY: RUSSIA" + "<br>" + "100% WATERPROOF",
            selectedSize: "ONESIZE",
            oneSize: true,
        },
        {
            id: 2,
            img: [
                require('../../public/item/6OG FATE T MOONDUST/T_moondust.gif'),
            ],
            preview_img: require('../../public/item/6OG FATE T MOONDUST/T_moondust.gif'),
            name: "6OG FATE T MOONDUST",
            sizeTable: require('../../public/item/t-shirt.svg'),
            price: 50,
            description: "COLOR: 013 BLACK" + "<br>" + "COUNTRY: RUSSIA" + "<br>" + "100% WATERPROOF",
            selectedSize: "m",
            oneSize: false,
        },
        {
            id: 3,
            img: [
                require('../../public/item/6OG DEPOT T WHITE/2.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/3.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/4.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/5.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/6.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/8.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/9.jpg'),
                require('../../public/item/6OG DEPOT T WHITE/10.jpg'),
            ],
            preview_img: require('../../public/item/6OG DEPOT T WHITE/T_white.gif'),
            name: "6OG DEPOT T WHITE",
            sizeTable: require('../../public/item/t-shirt.svg'),
            price: 50,
            description: "Short sleeve cotton long T-shirt in white. Rib knit crewneck collar. “DEPOT” and Logo printed in front. NFC made at back.",
            selectedSize: "m",
            oneSize: false,
        },
        {
            id: 4,
            img: [
                require('../../public/item/6OG DEPOT T FLAMINGO/T_flamingo.gif'),
            ],
            preview_img: require('../../public/item/6OG DEPOT T FLAMINGO/T_flamingo.gif'),
            name: "6OG DEPOT T FLAMINGO",
            sizeTable: require('../../public/item/t-shirt.svg'),
            price: 50,
            description: "COLOR: 013 BLACK" + "<br>" + "COUNTRY: RUSSIA" + "<br>" + "100% WATERPROOF",
            selectedSize: "m",
            oneSize: false,
        },
        {
            id: 5,
            img: [
                require('../../public/item/6OG DEPOT T BLACK/T_black.gif'),
            ],
            preview_img: require('../../public/item/6OG DEPOT T BLACK/T_black.gif'),
            name: "6OG DEPOT T BLACK",
            sizeTable: require('../../public/item/t-shirt.svg'),
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