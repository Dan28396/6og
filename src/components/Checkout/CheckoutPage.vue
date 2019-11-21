<template>
    <main>
        <section class="checkout">
            <div class="checkout__content-wrap">
                <div class="checkout__section">
                    <h2 class="section-title">Contact information</h2>
                    <input class="input-wrap__input" placeholder="Email">
                </div>
                <div class="checkout__section">
                    <h2 class="section-title">Shipping address</h2>
                    <div class="section__name">
                        <input class="input-wrap__input" placeholder="First name">
                        <input class="input-wrap__input" placeholder="Last name">
                    </div>
                    <input class="input-wrap__input" placeholder="Address">
                    <input class="input-wrap__input" placeholder="City">
                    <div class="section__address">
                        <input class="input-wrap__input" placeholder="Country">
                        <input class="input-wrap__input" placeholder="Region">
                        <input class="input-wrap__input" placeholder="Postal code">
                    </div>
                </div>
            </div>
        </section>
        <section class="checkout-cart">

        </section>
    </main>
</template>

<script>


    export default {
        name: "CheckoutPage",
        components: {}
    }
</script>

<style scoped>

    main {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
    }

    .checkout {
        width: 55%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-end;
    }

    .checkout__content-wrap {
        width: 60%;
        margin: 64px auto;
        display: flex;
        flex-direction: column;
    }

    .checkout__section {
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
    }

    .section-title {
        font-size: 18px;
        color: #333333;
        text-align: left;
        margin-bottom: 20px;
    }

    .section__name {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }
    .section__address {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
    }

    .input-wrap__input {
        border: 1px #d9d9d9 solid;
        background-clip: padding-box;
        border-radius: 5px;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        padding: 0.92857em 0.78571em;
        word-break: normal;
        line-height: inherit;
        max-height: 45px;
        font-size: 12px;
        transition: all 0.2s ease-out;
        outline: none;
        margin-bottom: 15px;
    }

    .input-wrap__input:focus {
        transition: all 0.2s ease-out;
        border: 1px #101010 solid;
    }

    .checkout-cart {
        width: 45%;
        height: 100%;
        background: #101010;
        min-height: 100vh;
    }
</style>