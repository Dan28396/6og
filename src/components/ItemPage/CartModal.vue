<template>
    <div>
        <transition name="slide">
            <aside class="cart-wrapper" v-click-outside="toggleCartModal" v-if="showCartModal">
                <header class="cart-wrapper__header">
                    <p class="cart-title">Cart</p>
                    <button type="button" class="close" @click="toggleCartModal">
                        <img src="../../../public/item/close.svg">
                    </button>
                </header>
                <section class="cart-wrapper__main">
                    <div class="cart-item" v-for="(item, index) in items" :key="index">
                        <img class="cart-item__img" :src="item.img">
                        <div class="cart-item__info">
                            <div>
                                <p class="cart-item__name">{{item.name}}</p>
                                <p class="cart-item__size">{{item.selectedSize}}</p>
                                <p class="cart-item__price">${{item.price}}</p>
                            </div>
                            <div class="cart-item__actions">
                                <div class="cart-item__quantity-selector">
                                    <button class="cart-item__quantity-button" @click="decrementItemQuantity(item)">-
                                    </button>
                                    <input class="cart-item__quantity-input" v-model="item.quantity" disabled>
                                    <button class="cart-item__quantity-button" @click="incrementItemQuantity(item)">+
                                    </button>
                                </div>
                                <button class="cart-item__remove-button" @click="removeItem(index)">Remove</button>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="cart-wrapper__footer">
                    <p class="cart-footer__ship">Shipping & taxes calculated at checkout</p>
                    <button class="cart-footer__button">Checkout ${{total}}</button>
                </footer>
            </aside>
        </transition>
        <transition name="fade">
            <div class="modal-mask" v-if="showCartModal"></div>
        </transition>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "CartModal",
        computed: {
            ...mapState({
                showCartModal: state => state.Cart.showCartModal,
                checkoutStatus: state => state.Cart.checkoutStatus,
                items: state => state.Cart.items
            }),
            ...mapGetters('Cart', {
                total: 'cartTotalPrice'
            }),
        },
        methods: {
            removeItem(index) {
                this.$store.commit("Cart/removeItem", index);
            },
            incrementItemQuantity(item) {
                this.$store.commit("Cart/incrementItemQuantity", item)
            },
            decrementItemQuantity(item) {
                this.$store.commit("Cart/decrementItemQuantity", item)
            },
            toggleCartModal() {
                this.$store.commit("Cart/toggleCartModal");
            },

        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .5s ease;
    }

    .cart-wrapper {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 5;
        background: #fff;
        box-shadow: 2px 0 10px rgba(54, 54, 54, 0.2), -2px 0 10px rgba(54, 54, 54, 0.2);
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }

    .slide-enter, .slide-leave-to {
        transform: translateX(100%);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

    .cart-wrapper__header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #CECECE;
    }

    .cart-title {
        font-size: 16px;
        margin: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .close {
        margin: 10px 10px;
    }

    .close:focus {
        outline: none;
    }

    .cart-wrapper__main {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        overflow: auto;
    }

    .cart-item {
        display: grid;
        grid-template-columns: 40% 1fr;
        column-gap: 20px;
        margin: 20px 0;
    }


    .cart-item__info {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cart-item__name {
        font-size: 14px;
        margin-bottom: 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 200px;
    }

    .cart-item__size {
        font-size: 12px;
        color: #a1a1a1;
        margin-bottom: 4px;
        text-transform: uppercase;
    }

    .cart-item__price {
        font-size: 12px;
        margin-bottom: 4px;
    }

    .cart-item__img {
        width: 100%;
    }

    .cart-item__actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
        justify-self: flex-end;
    }

    .cart-item__quantity-selector {
        display: grid;
        border: 1px #a1a1a1 solid;
        grid-template-columns: repeat(3, 30px);
        height: 40px;
    }

    .cart-item__quantity-button {
        outline: none;
        border: none;
        background: none;
        line-height: 30px;
    }

    .cart-item__quantity-input {
        outline: none;
        border: none;
        width: 30px;
        margin: auto;
        text-align: center;
    }

    .cart-item__remove-button {
        letter-spacing: 2px;
        font-size: 10px;
        background: transparent;
        outline: none;
        border: none;
        text-transform: uppercase;
        text-decoration: underline black;
    }

    .cart-wrapper__footer {
        text-align: left;
        padding: 20px 20px;
        border-top: 1px solid #CECECE;
    }

    .cart-footer__ship {
        font-size: 12px;
        margin-bottom: 15px;
    }

    .cart-footer__button {
        width: 100%;
        padding: 10px 10px;
        background: black;
        color: white;
        border: none;
        outline: none;
    }

    input:disabled {
        background: white;

    }

    p {
        margin: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
</style>