<template>
    <div class="modal-mask">
        <aside class="cart-wrapper" v-click-outside="toggleCartModal">
            <header class="cart-wrapper__header">
                <p class="cart-title">Cart</p>
                <button type="button" class="close" @click="toggleCartModal">
                    <img src="../../../public/item/close.svg">
                </button>
            </header>
            <section class="cart-wrapper__main">
                <div class="cart-item">
                    <img class="cart-item__img" src="../../../public/mainpage/Carousel/Example.png">
                    <div class="cart-item__info">
                        <div>
                            <p class="cart-item__name">6og Secure Hoodie Black</p>
                            <p class="cart-item__size">M</p>
                            <p class="cart-item__price">$150</p>
                        </div>

                        <div class="cart-item__actions">
                            <div class="cart-item__quantity-selector">
                                <button class="cart-item__quantity-button">-</button>
                                <input class="cart-item__quantity-input" min="1" max="9" maxlength="1">
                                <button class="cart-item__quantity-button">+</button>
                            </div>
                            <button class="cart-item__remove-button">Remove</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="cart-wrapper__footer">
                <p class="cart-footer__ship">Shipping & taxes calculated at checkout</p>
                <button class="cart-footer__button">Checkout $150</button>
            </footer>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "CartModal"
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
        transition: opacity .3s ease;
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
        z-index: 4;
        background: #fff;
        box-shadow: 2px 0 10px rgba(54, 54, 54, 0.2), -2px 0 10px rgba(54, 54, 54, 0.2);
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
        padding: 2px 11px;
    }

    .cart-item__remove-button {
        letter-spacing: 2px;
        font-size: 10px;
        background: none;
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