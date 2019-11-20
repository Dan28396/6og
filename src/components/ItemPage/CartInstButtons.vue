<template>
    <div class="icons-wrap">
        <ShoppingCartIcon/>
        <Inst/>
    </div>

</template>

<script>
    import ShoppingCartIcon from "@/components/ItemPage/ShoppingCartIcon";
    import Inst from "@/components/Inst";

    export default {
        name: "CartInstButtons",
        components: {Inst, ShoppingCartIcon}
    }
</script>

<style>
    .shopping-cart{
        position: static!important;
    }
    .logo__inst{
        position: static!important;
    }

    .icons-wrap{
        position: absolute;
        top: 7%;
        right: 7%;
        display: grid;
        grid-template-columns: 30px 30px;
        width: 30px;
        height: 30px;
        column-gap: 10px;
    }
</style>