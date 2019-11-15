<template>
    <main>
        <section class="carousel-section">
            <ItemCarousel/>
        </section>
        <section class="main-section">
            <div class="item-info">
                <div class="first-block">
                    <p class="item-text">{{items[id - 1].name}}</p>
                    <hr>
                    <p class="item-text">${{items[id - 1].price}}</p>
                    <hr>
                    <p class="item-text">
                        <span style="vertical-align: top">size</span>
                        <input type="radio" name="size" id="s_check" @click="selectSize('s', id-1)"><label
                            for="s_check"
                            class="size-text">S</label>
                        <input type="radio" name="size" id="m_check" @click="selectSize('m', id-1)"><label for="m_check"
                                                                                                           class="size-text">M</label>
                        <input type="radio" name="size" id="l_check" @click="selectSize('l', id-1)"><label for="l_check"
                                                                                                           class="size-text">L</label>
                        <input type="radio" name="size" id="xl_check" @click="selectSize('xl', id-1)"><label
                            for="xl_check"
                            class="size-text">XL</label>
                    </p>


                </div>
                <p class="item-description">{{items[id - 1].description}}</p>
                <img class="item-table" src="../../../public/item/table.svg">
                <button class="cart-button" @click="addProductToCart(items[id - 1])">ADD TO CART</button>
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
    import CartModal from "@/components/ItemPage/CartModal"

    //TODO Доделать сайзы, убрать таггл модалки при ремуве итема
    export default {
        name: "Item",
        components: {CartModal, Inst, ItemCarousel},
        props: ['id'],
        computed: mapState({
            items: state => state.Items.items
        }),
        methods: {
            toggleCartModal() {
                this.$store.commit("toggleCartModal");
            },
            selectSize(size, id) {
                this.$store.commit("Items/selectSize", {size, id});
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

    input[type="radio"] {
        display: none;
    }

    input[type="radio"] + label {
        cursor: pointer;
    }


    input[type="radio"]:checked + label {
        text-decoration: underline;

    }

    hr {
        border: 1.5px black solid;
        margin: 10px 0;
        width: 65%;
    }
</style>