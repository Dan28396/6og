<template>
    <main>
        <img class="romb" src="../../../public/mainpage/romb.png">
        <img class="logo__topleft" src="../../../public/mainpage/logotl.png">
        <img class="logo__topright" src="../../../public/mainpage/INST.png">
        <img class="logo__botleft" src="../../../public/mainpage/logo.png">
        <img class="logo__botright" src="../../../public/mainpage/logobr.png">
        <Carousel/>
    </main>
</template>

<script>
    import {mapState} from 'vuex'
    import Carousel from "@/components/MainPage/Carousel";

    export default {
        name: "MainPage",
        components: {Carousel},
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
        bottom: 0;
        height: 100%;
    }

    .logo__topleft {
        position: absolute;
        top: 60px;
        left: 60px;
    }

    .logo__topright {
        position: absolute;
        top: 60px;
        right: 100px;
    }

    .logo__botleft {
        position: absolute;
        bottom: 60px;
        left: 60px;
    }

    .logo__botright {
        position: absolute;
        bottom: 60px;
        right: 100px;
    }
</style>