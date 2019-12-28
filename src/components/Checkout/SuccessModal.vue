<template>
    <transition name="fade">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="success__wrap">
                        <img class="galochka" src="../../../public/checkout/galochka.png">
                        <p class="success">Order completed successfully</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "SuccessModal"
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
        width: 50%;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Roboto;
        position: relative;
        height: 650px;
        display: flex;
        justify-content: center;
        align-content: center;

    }

    .success__wrap {
    margin: auto;
    }

    .galochka {
        width: 40%;
        margin-bottom: 30px;
    }

    .success {
        font-family: GT-America;
        font-size: 24px;
    }
</style>