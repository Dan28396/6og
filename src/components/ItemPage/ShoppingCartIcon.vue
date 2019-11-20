<template>
    <img class="shopping-cart" src="../../../public/item/shopping-bag.svg" @click="toggleCartModal">
</template>

<script>
    export default {
        name: "ShoppingCartIcon",
        methods: {
            toggleCartModal() {
                this.$store.commit("Cart/toggleCartModal");
            },
        }
    }
</script>

<style scoped>
    .shopping-cart {
        position: absolute;
        top: 60px;
        right: 10%;
        width: 30px ;
        cursor: pointer;
    }

    @media all and (max-width: 850px) {
        .shopping-cart {
            top: 40px
        }
    }
</style>