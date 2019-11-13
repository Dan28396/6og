const state = {
    items: [],
    showCartModal: false
}

const getters = {}

const actions = {}

const mutations = {
    toggleCartModal: (state) => {
        state.showCartModal = !state.showCartModal
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}