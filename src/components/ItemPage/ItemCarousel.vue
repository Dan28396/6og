<template>
    <div class="carousel">
        <b-carousel
                id="carousel-1"
                controls
                :interval="9999999"
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
    //TODO Пофиксить большие изображения
    import {mapState} from 'vuex'

    export default {
        name: "ItemCarousel",
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
        align-self: center;
        width: 100%;
        margin: auto;
    }



</style>