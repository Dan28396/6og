<template>
    <div class="carousel">
        <b-carousel
                id="carousel-1"
                controls
                :interval="99999999999"
                class="carousel"
        >
            <b-carousel-slide :key="item.id" v-for="(item) in items">
                <template v-slot:img>
                    <router-link :to="item.path"><img
                            class="d-block img-fluid w-100"
                            :src='item.img'
                            alt=""
                    ></router-link>
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Carousel",
        computed: mapState({
            items: state => state.items,
        }),
        data: function () {
            return {
                img: require('../../../public/mainpage/Carousel/Example.png')
            }
        }
    }
</script>

<style scoped>
    .carousel {
        justify-self: center;
        align-self: auto;
        margin: auto;
        max-width: 450px;
        min-width: 250px;
        width: 50vw;
    }

    @media all and (max-width: 850px) {
        .carousel{
            max-width: 400px;
        }
    }

</style>