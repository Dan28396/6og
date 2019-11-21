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
                "https://www.paypal.com/sdk/js?client-id=Abgq28sebvqxUYG4ZS_48U6CSzNMcagv0wIrHcVqAI8EiRn1-KSFbr7e7GI0zw7_DiuvtxZfTNI58xFf&currency=USD";
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
                                intent: "CAPTURE",
                                application_context: {
                                    shipping_preference: "SET_PROVIDED_ADDRESS",
                                },
                                payer: {
                                    name:{
                                        given_name: "Daniil",
                                        surname: "Lobchenko"
                                    },
                                    email_address: 'lobchenko1999@gmail.com'
                                },
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: 'USD',
                                            value: total,
                                            breakdown: {
                                                item_total: {
                                                    currency_code: 'USD',
                                                    value: '40'
                                                }
                                            }
                                        },
                                        shipping: {
                                            address: {
                                                address_line_1: "2211 N Jopa",
                                                address_line_2: "Building 17",
                                                admin_area_2: "San Jose",
                                                admin_area_1: "CA",
                                                postal_code: "95131",
                                                country_code: "US"
                                            }
                                        },
                                        items: [
                                            {
                                                name: "T-Shirt 6og",
                                                unit_amount: {
                                                    currency_code: "USD",
                                                    value: '10'
                                                },
                                                quantity: '2'
                                            },
                                            {
                                                name: "Sweatshirt 6og",
                                                unit_amount: {
                                                    currency_code: "USD",
                                                    value: '10'
                                                },
                                                quantity: '2'
                                            }
                                        ],
                                        description: 'Dostavit do 23.11'
                                    }
                                ],
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