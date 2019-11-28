<template>
    <a class="inst" href="https://www.instagram.com/6og___/" target="_blank"><img class="logo__inst"
                                                                                  src="../../public/mainpage/inst.svg"></a>
</template>

<script>
    export default {
        name: "Inst"
    }
</script>

<style scoped>
    .logo__inst {
        position: absolute;
        top: 60px;
        right: 7%;
        width: 30px;
        min-width: 30px;
        transition: all .2s;
    }

    .logo__inst:hover {
        opacity: 0.6;
    }

    .logo__inst__static img {
        position: static;
    }

    @media all and (max-width: 850px) {
        .logo__inst {
            top: 40px
        }

    }

</style>