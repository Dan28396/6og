<template>
    <main>
        <img class="romb" src="../../../public/mainpage/romb2_white.svg">
        <img class="logo__capsule" src="../../../public/mainpage/logotl.png">
            <img class="logo__gog" src="../../../public/mainpage/logo.png">
            <img class="logo__future" src="../../../public/mainpage/logobr.png">
        <Inst/>
        <Carousel/>
    </main>
</template>

<script>
    import {mapState} from 'vuex'
    import Carousel from "@/components/MainPage/Carousel";
    import Inst from "@/components/Inst";

    export default {
        name: "MainPage",
        components: {Inst, Carousel},
        computed: mapState({
            text: state => state.qwer,
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
    }

    .romb {
        position: absolute;
        right: 0;
        bottom: -10px;
        height: calc(100% + 20px);
    }

    .logo__capsule {
        position: absolute;
        top: 60px;
        left: 7%;
        min-width: 250px;
        max-width: 300px;
        width: 30%;
    }


    .logo__gog {
        position: absolute;
        bottom: 60px;
        left: 7%;
        width: 40%;
        max-width: 370px;
    }

    .logo__future {
        position: absolute;
        bottom: 60px;
        right: 7%;
        width: 30%;
        max-width: 275px;
    }

    @media all and (max-width: 850px) {
        .logo__gog {
            top: 40px;
        }


        .logo__future {
            top: calc(60px + 0.3 * 40%);
            left: 7%;
        }

        .logo__capsule {
            top: auto;
            bottom: 30px;
            left: 7%;

        }

    }
</style>