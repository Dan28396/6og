<template>
    <main>
        <section class="carousel-section">
            <ItemCarousel/>
        </section>
        <section class="main-section">
            <div class="item-info">
                <div class="first-block">
                    <p class="item-text">{{items[0].name}}</p>
                    <hr>
                    <p class="item-text">${{items[0].price}}</p>
                    <hr>

                    <p class="item-text"><span style="vertical-align: top">size</span> <span
                            class="size-text">S</span><span class="size-text">M</span><span
                            class="size-text">L</span><span class="size-text">XL</span></p>

                </div>
                <p class="item-description">{{items[0].description}}</p>
                <img class="item-table" src="../../../public/item/table.png">
                <button class="cart-button">ADD TO CART</button>
            </div>
        </section>
        <img class="romb" src="../../../public/mainpage/romb2_white.svg">
        <Inst/>
    </main>
</template>

<script>
    import ItemCarousel from "@/components/ItemPage/ItemCarousel";
    import {mapState} from 'vuex'
    import Inst from "@/components/Inst";

    export default {
        name: "Item",
        components: {Inst, ItemCarousel},
        computed: mapState({
            items: state => state.items,
        }),
    }
</script>

<style scoped>
    p {
        display: inline;
    }

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
        width: 80%;
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
    }

    .item-description {
        font-size: 15px;
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


    hr {
        border: 1.5px black solid;
        margin: 10px 0;
        width: 58%;
    }
</style>