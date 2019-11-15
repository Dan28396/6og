const state = {
    items: [],
    showCartModal: false,
    checkoutStatus: null
}


const getters = {
    cartTotalPrice: (state) => {
        return state.items.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}


const actions = {
    addProductToCart({state, commit}, product) {
        commit('setCheckoutStatus', null)
        const cartItem = state.items.find(item => (item.id === product.id && item.selectedSize === product.selectedSize))
        if (!cartItem) {
            commit('pushProductToCart', product)
        } else {
            commit('incrementItemQuantity', cartItem)
        }
        commit('Items/decrementProductInventory', {id: product.id}, {root: true})
        commit('toggleCartModal')
    }
}


const mutations = {
    pushProductToCart(state, product) {
        state.items.push({
            id: product.id,
            img: product.img,
            name: product.name,
            price: product.price,
            description: product.description,
            selectedSize: product.selectedSize,
            quantity: 1
        })
    },

    incrementItemQuantity(state, {id, selectedSize}) {
        const cartItem = state.items.find(item => (item.id === id && item.selectedSize === selectedSize))
        cartItem.quantity++
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },

    removeItem(state, index) {
        state.items.splice(index, 1)
    },

    setItemQuantity(state, {id, selectedSize, change}) {
        const cartItem = state.items.find(item => (item.id === id && item.selectedSize === selectedSize))
        cartItem.quantity += change
    },

    toggleCartModal: (state) => {
        state.showCartModal = !state.showCartModal
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}