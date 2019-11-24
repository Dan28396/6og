<template>
    <main>
        <section class="checkout">
            <div class="checkout__content-wrap">
                <div class="checkout__section">
                    <a @click="$router.go(-1)" class="checkout__return">
                        <img class="checkout__arrow" src="../../../public/checkout/back-arrow.svg">
                        <span>Return to cart</span>
                    </a>
                </div>
                <div class="checkout__section">
                    <h2 class="section-title">Contact information</h2>
                    <input class="input-wrap__input" placeholder="Email" v-model="email">
                </div>
                <div class="checkout__section">
                    <h2 class="section-title">Shipping address</h2>
                    <div class="section__name">
                        <input class="input-wrap__input" placeholder="First name" v-model="firstName">
                        <input class="input-wrap__input" placeholder="Last name" v-model="lastName">
                    </div>
                    <input class="input-wrap__input" placeholder="Address" v-model="address">
                    <input class="input-wrap__input" placeholder="City" v-model="city">
                    <div class="section__address">
                        <input class="input-wrap__input"
                               placeholder="Country"
                               v-model="country">
                        <input class="input-wrap__input" placeholder="Region" v-model="region">
                        <input class="input-wrap__input" placeholder="Postal code" v-model="postalCode">
                    </div>
                </div>
                <h2 class="section-title">Shipping</h2>
                <div class="checkout__bordered-section" style="margin-bottom: 30px">
                    <p class="checkout__delivery">Russia: FREE</p>
                    <p class="checkout__delivery">WorldWide: DHL $15</p>
                </div>
                <div class="checkout__section">
                    <div class="checkout__pay-section">
                        <PayPalButton/>
                    </div>

                </div>
            </div>
        </section>
        <section class="checkout-cart">
            <div class="checkout__items-wrap">
                <div class="cart-item" v-for="(item, index) in items" :key="index + item.name">
                    <img class="cart-item__img" :src="item.img">
                    <div class="cart-item__info">
                        <p class="cart-item__name">{{item.name}}</p>
                        <div class="cart-item__params">
                            <p class="cart-item__size">{{item.selectedSize}}</p>
                            <p class="cart-item__price">${{item.price}}*{{item.quantity}}</p>
                        </div>
                    </div>
                </div>
                <div class="cart-item__subtotal">
                    <div class="subtotal-row">
                        <p>subtotal</p>
                        <p>${{total}}</p>
                    </div>
                    <div class="subtotal-row">
                        <p>shipping</p>
                        <p>$15</p>
                    </div>
                </div>
                <div class="total-row">
                    <p>TOTAL</p>
                    <p>${{total+15}}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    //TODO СДЕЛАТЬ ПРОВЕРКУ НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ СТРАНЫ
    import {mapGetters, mapState} from 'vuex'
    import PayPalButton from "@/components/Checkout/PayPalButton";

    export default {
        name: "CheckoutPage",
        components: {PayPalButton},
        computed: {
            ...mapGetters({
                isCorrect: 'Checkout/countryCode',
                total: 'Cart/cartTotalPrice',
            }),
            ...mapState({
                items: state => state.Cart.items,
            }),
            email: {
                get() {
                    return this.$store.state.Checkout.email
                },
                set(value) {
                    this.$store.commit('Checkout/updateEmail', value)
                }
            },
            firstName: {
                get() {
                    return this.$store.state.Checkout.firstName
                },
                set(value) {
                    this.$store.commit('Checkout/updateFirstName', value)
                }
            },
            lastName: {
                get() {
                    return this.$store.state.Checkout.lastName
                },
                set(value) {
                    this.$store.commit('Checkout/updateLastName', value)
                }
            },
            address: {
                get() {
                    return this.$store.state.Checkout.address
                },
                set(value) {
                    this.$store.commit('Checkout/updateAddress', value)
                }
            },
            city: {
                get() {
                    return this.$store.state.Checkout.city
                },
                set(value) {
                    this.$store.commit('Checkout/updateCity', value)
                }
            },
            country: {
                get() {
                    return this.$store.state.Checkout.country
                },
                set(value) {
                    this.$store.commit('Checkout/updateCountry', value)
                }
            },
            region: {
                get() {
                    return this.$store.state.Checkout.region
                },
                set(value) {
                    this.$store.commit('Checkout/updateRegion', value)
                }
            },
            postalCode: {
                get() {
                    return this.$store.state.Checkout.postalCode
                },
                set(value) {
                    this.$store.commit('Checkout/updatePostalCode', value)
                }
            }

        }
    }
</script>

<style scoped>

    main {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
    }

    .checkout {
        width: 55%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-end;
    }

    .checkout__content-wrap {
        width: 60%;
        margin: 60px auto 0px;
        display: flex;
        flex-direction: column;
    }

    .checkout__items-wrap {
        width: 85%;
        margin: 85px auto;
        display: flex;
        flex-direction: column;
    }

    .checkout__section {
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
    }

    .checkout__bordered-section {
        width: 100%;
        padding: 20px 20px 0 20px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        position: relative;

    }


    .checkout__pay-section {
        width: 80%;
        margin: auto;

    }


    .section-title {
        font-size: 18px;
        color: #333333;
        text-align: left;
        margin-bottom: 20px;
    }

    .section__name {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }

    .section__address {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
    }

    .checkout__return {
        font-size: 12px;
        color: #101010;
        text-align: left;
        cursor: pointer;
        display: flex;
        width: 120px;
    }

    .checkout__arrow {
        width: 12px;
        margin-right: 7px;
        line-height: 12px;
        vertical-align: text-bottom;
    }

    .input-wrap__input {
        border: 1px #d9d9d9 solid;
        background-clip: padding-box;
        border-radius: 5px;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        padding: 0.92857em 0.78571em;
        word-break: normal;
        line-height: inherit;
        max-height: 45px;
        font-size: 12px;
        transition: all 0.2s ease-out;
        outline: none;
        margin-bottom: 15px;
    }

    .input__error {
        border: 1px #ae0000 solid;
    }

    .checkout__delivery {
        text-align: left;
        margin: 0;
        font-size: 14px;
        margin-bottom: 15px;
    }

    .input-wrap__input:focus {
        transition: all 0.2s ease-out;
        border: 1px #101010 solid;
    }

    .checkout-cart {
        width: 45%;
        height: 100%;
        background: #101010;
        min-height: 100vh;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    .cart-item__subtotal {
        border-bottom: 2px white solid;
        border-top: 2px white solid;
        padding: 10px;

    }

    .subtotal-row {
        display: flex;
        justify-content: space-between;
        color: white;
    }

    .total-row {
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 10px;
    }

    .subtotal-row p {
        font-size: 18px;
        margin: 0;
    }

    .cart-item {
        display: grid;
        grid-template-columns: 30% 1fr;
        column-gap: 20px;
        margin: 20px 0;
        max-width: 100%;
    }


    .cart-item__info {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cart-item__name {
        font-size: 28px;
        margin-bottom: 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: white;
    }

    .cart-item__params {
        display: flex;
        justify-content: space-between;
    }

    .cart-item__size {
        font-weight: bold;
        font-size: 36px;
        color: white;
        margin-bottom: 4px;
        text-transform: uppercase;
    }

    .cart-item__price {
        font-size: 36px;
        margin-bottom: 4px;
        color: white;
    }

    .cart-item__img {
        width: 100%;
    }

</style>