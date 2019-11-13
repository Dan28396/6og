<template>
    <a href="https://www.instagram.com/6og___/" target="_blank"><img class="logo__inst" src="../../public/mainpage/INST.png"></a>
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
        width: 2.5%;
        min-width: 30px;
    }

    @media all and (max-width: 850px) {
        .logo__inst{
            top: 40px
        }
    }

</style>