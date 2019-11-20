<template>
    <div class="paypal-buttons"></div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "PayPalButton",
        data: function () {
            return {}
        },
        mounted: function () {
            const script = document.createElement("script");
            script.src =
                "https://www.paypal.com/sdk/js?client-id=Abgq28sebvqxUYG4ZS_48U6CSzNMcagv0wIrHcVqAI8EiRn1-KSFbr7e7GI0zw7_DiuvtxZfTNI58xFf";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        methods: {
            setLoaded: function () {
                this.loaded = true;
                let total = this.total + '';
                window.paypal
                    .Buttons({
                        createOrder: function (data, actions) {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: total
                                    }
                                }],
                                payer: {
                                    address_portable: {
                                        address_line_1: 'jopa govno',
                                        address_line_2: '303',
                                        admin_area_2: 'Tuapse',
                                        admin_area_1: 'Rusia',
                                        postal_code: '352800',
                                    }
                                }
                            });
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();
                            this.data;
                            this.paidFor = true;
                            // eslint-disable-next-line no-console
                            console.log(order);
                        },
                        onError: err => {
                            // eslint-disable-next-line no-console
                            console.log(err);
                        }
                    })
                    .render('.paypal-buttons');
            }
        },
        computed: {
            ...mapState({
                checkoutStatus: state => state.Cart.checkoutStatus,
                items: state => state.Cart.items
            }),
            ...mapGetters('Cart', {
                total: 'cartTotalPrice'
            }),
        },
    }

</script>

<style scoped>

</style>