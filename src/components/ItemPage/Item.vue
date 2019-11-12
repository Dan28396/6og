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
        <img class="romb" src="../../../public/mainpage/romb.png">
        <img class="logo__topright" src="../../../public/mainpage/INST.png">
    </main>
</template>

<script>
    import ItemCarousel from "@/components/ItemPage/ItemCarousel";
    import {mapState} from 'vuex'

    export default {
        name: "Item",
        components: {ItemCarousel},
        computed: mapState({
            items: state => state.items,
        }),
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

    .item-info {
        width: 70%;
        height: 70%;
        display: flex;
        flex-direction: column;
    }

    .item-table {
        width: 90%;
        align-self: flex-start;
    }

    .item-text {
        font-size: 26px;
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
        font-size: 40px;
        text-align: left;
        font-weight: bold;
        margin: 0 20px;
    }


    .romb {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        z-index: -1;
    }

    .logo__topright {
        position: absolute;
        top: 60px;
        right: 100px;
    }

    hr {
        border: 1.5px black solid;
        margin: 10px 0;
        max-width: 360px;
    }
</style>