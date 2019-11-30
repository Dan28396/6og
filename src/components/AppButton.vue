<template>
    <router-link class="app" :to="{name: name}">
        <button class="app-button">APP</button>
    </router-link>
</template>

<script>
    export default {
        name: "AppButton",
        props: ['name']
    }
</script>

<style scoped>
    .app-button {
        padding: 3px 20px;
        background: transparent;
        border: 2px solid #101010;
        font-weight: 500;
    }
    .app-button:hover{
        opacity: 0.6;
    }
    @media all and (max-width: 850px){
        .app{
            grid-row: 2;
        }
    }
</style>