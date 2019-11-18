<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import store from '../store'
    import router from "../router";
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import vClickOutside from 'v-click-outside'

    Vue.use(vClickOutside)
    Vue.use(BootstrapVue)

    export default {
        name: 'app',
        router,
        store,
        components: {}
    }
</script>

<style>
    @font-face {
        font-family: 'GT-America';
        font-weight: normal;
        src: url("../public/fonts/GT-America-Extended-Regular.OTF");
    }

    @font-face {
        font-family: 'GT-America';
        font-weight: bold;
        src: url("../public/fonts/GT-America-Extended-Black.OTF");
    }

    * {
        margin: 0;
        padding: 0;
    }

    .carousel-control-next-icon {
        background-image: url("../public/mainpage/Carousel/arrow.svg") !important;
        transform: rotate(180deg);
        width: 31px;
        height: 25px;
    }

    .carousel-control-prev-icon {
        background-image: url("../public/mainpage/Carousel/arrow.svg") !important;
        width: 31px;
        height: 25px;
    }

    @media all and (max-width: 576px) {
        .carousel-control-next-icon {
            width: 20px;
            height: 16px;
        }

        .carousel-control-prev-icon {
            width: 20px;
            height: 16px;
        }
    }

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
    }

    #app {
        font-family: 'GT-America', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: black;
        margin: 0;
        height: auto;
        width: 100%;
        min-height: 100vh;
        display: flex;
    }
</style>
