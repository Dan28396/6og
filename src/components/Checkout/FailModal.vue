<template>
    <transition name="fade">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" v-click-outside="toggleFailModal">
                    <div class="success__wrap">
                        <img class="galochka" src="../../../public/mainpage/6og.svg">
                        <p class="success">Oops... something went wrong. Check all the fields and try again.</p>
                    </div>
                    <button type="button" class="close" @click="toggleFailModal">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "FailModal",
        methods: {
            toggleFailModal() {
                this.$store.commit("Checkout/toggleFailModal");
            },
        }
    }
</script>

<style scoped>
    .modal-wrap {
        z-index: 101;
        background: white;
        position: fixed;
        width: 60%;
        height: 60%;
        min-height: 300px;
        min-width: 500px;
    }

    .modal-mask {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .5s ease;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 40%;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Roboto;
        position: relative;
        height: 30vw;
        display: flex;
        justify-content: center;
        align-content: center;

    }

    .success__wrap {
        margin: auto;
    }

    .galochka {
        width: 70%;
        padding-left: 30px;
        margin-bottom: 30px;
        max-width: 300px;
    }

    .success {
        font-family: GT-America;
        font-size: 2vw;
    }

    .close {
        position: absolute;
        top: 5px;
        right: 10px;
    }
</style>