<template>
    <button class="yandex-button" @click="postOrder(isInvalid, validate)">
        <span class="yandex-button__wrap">
            <img class="yandex-button__yandex" src="../../../public/checkout/yandexcheckout.png">
            <img class="yandex-button__card" src="../../../public/checkout/card.png">
        </span>
    </button>
</template>

<script>

    export default {
        name: "YandexKassa",
        props: ['isInvalid', 'validate'],
        methods: {
            postOrder: function (isInvalid, validate) {
                if (isInvalid) {
                    validate.$touch()
                } else {
                    this.$store.dispatch("Checkout/postOrder");
                }
            },
        }
    }
</script>

<style scoped>
    .yandex-button {
        width: 100%;
        padding: 3px;
        min-width: 200px;
        margin-bottom: 14px;
        border: 4px;
        background-color: #ffc439;
        border-radius: 4px;

    }

    .yandex-button:hover {
        filter: brightness(0.95);
    }

    .yandex-button__wrap {
        height: 100%;
    }

    .yandex-button__yandex {
        height: 37%;
    }

    .yandex-button__card {
        height: 45%;
        margin-left: 10px;
        margin-top: 2px;
    }

    @media only screen and (min-width: 75px) {
        .yandex-button {
            height: 25px;
            min-height: 25px;
            max-height: 30px;
        }
    }

    @media only screen and (min-width: 150px) {
        .yandex-button {
            height: 25px;
            min-height: 25px;
            max-height: 55px;
        }
    }

    @media only screen and (min-width: 200px) {
        .yandex-button {
            height: 35px;
            min-height: 35px;
            max-height: 55px;
        }
    }

    @media only screen and (min-width: 300px) {
        .yandex-button {
            height: 45px;
            min-height: 30px;
            max-height: 55px;
        }
    }
</style>