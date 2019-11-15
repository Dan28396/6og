<template>
    <main>
        <section class="carousel-section">
            <ItemCarousel/>
        </section>
        <section class="main-section">
            <div class="item-info">
                <div class="first-block">
                    <p class="item-text">{{items[$route.params.id - 1].name}}</p>
                    <hr>
                    <p class="item-text">${{items[$route.params.id - 1].price}}</p>
                    <hr>
                    <p class="item-text">
                        <span style="vertical-align: top">size</span>
                        <input type="radio" name="size" id="s_check" checked v-model="s_check"><label for="s_check"
                                                                                                      class="size-text">S</label>
                        <input type="radio" name="size" id="m_check" v-model="m_check"><label for="m_check"
                                                                                              class="size-text">M</label>
                        <input type="radio" name="size" id="l_check" v-model="l_check"><label for="l_check"
                                                                                              class="size-text">L</label>
                        <input type="radio" name="size" id="xl_check" v-model="xl_check"><label for="xl_check"
                                                                                                class="size-text">XL</label>
                    </p>


                </div>
                <p class="item-description">{{items[$route.params.id - 1].description}}</p>
                <img class="item-table" src="../../../public/item/table.svg">
                <button class="cart-button" @click="addProductToCart(items[$route.params.id - 1])">ADD TO CART</button>
            </div>
        </section>
        <img class="romb" src="../../../public/mainpage/romb2_white.svg">
        <router-link to="/"><img class="logo__gog" src="../../../public/mainpage/logo.png"></router-link>
        <CartModal/>
        <Inst/>
    </main>
</template>

<script>
    import ItemCarousel from "@/components/ItemPage/ItemCarousel";
    import {mapState, mapActions} from 'vuex'
    import Inst from "@/components/Inst";
    import CartModal from "@/components/ItemPage/CartModal";

    export default {
        name: "Item",
        data: function () {
            return {
                s_check: false,
                m_check: false,
                l_check: false,
                xl_check: false,
            }
        },
        components: {CartModal, Inst, ItemCarousel},
        computed: mapState({
            items: state => state.Items.items
        }),
        methods: {
            toggleCartModal() {
                this.$store.commit("toggleCartModal");
            },
            ...mapActions('Cart', [
                'addProductToCart'
            ]),
        }
    }
</script>

<style scoped>
    main {
        background-color: #EEEDED;
        position: relative;
        width: 92%;
        height: 92%;
        margin: auto;
        display: flex;
        z-index: 2;
    }

    .carousel-section {
        width: 50%;
        display: flex;
    }

    .main-section {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .first-block {
        display: flex;
        flex-direction: column;
    }

    .item-info {
        width: 70%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .item-table {
        width: 80%;
        align-self: flex-start;
    }

    .item-text {
        font-size: 1.5vw;
        text-align: left;
        margin: 0;
    }

    .item-description {
        font-size: 1vw;
        text-align: left;
    }

    .cart-button {
        background: black;
        color: white;
        width: 40%;
        outline: none;
        border: none;
        margin: 30px 0 0 0;
        padding: 7px 5px;
    }

    .size-text {
        font-size: 2.3vw;
        text-align: left;
        font-weight: bold;
        margin: 0 20px;
    }


    .romb {
        position: absolute;
        right: 0;
        bottom: -10px;
        height: calc(100% + 20px);
        z-index: -1;
    }

    .logo__gog {
        position: absolute;
        bottom: 60px;
        right: 7%;
        width: 40%;
        max-width: 300px;
    }


    hr {
        border: 1.5px black solid;
        margin: 10px 0;
        width: 65%;
    }
</style>