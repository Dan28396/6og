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
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', product)
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('Items/decrementProductInventory', {id: product.id}, {root: true})
            commit('toggleCartModal')
        }
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
            inventory: product.inventory,
            quantity: 1
        })
    },

    incrementItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },

    removeItem(state, index) {
        state.items.splice(index, 1)
        state.showCartModal = true
    },

    setItemQuantity(state, {id, change}){
        const cartItem = state.items.find(item => item.id === id)
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