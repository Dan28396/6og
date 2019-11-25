<template>
    <div class="paypal-buttons"></div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "PayPalButton",
        computed: {
            ...mapState({
                checkoutStatus: state => state.Cart.checkoutStatus,
            }),
            ...mapGetters({
                    total: 'Cart/cartTotalPrice',
                    countryCode: 'Checkout/countryCode',
                },
            ),
            finalCart: {
                get() {
                    return this.$store.state.Cart.finalCart
                }
            },
            email: {
                get() {
                    return this.$store.state.Checkout.email
                },
                set(value) {
                    this.$store.commit('updateEmail', value)
                }
            },
            firstName: {
                get() {
                    return this.$store.state.Checkout.firstName
                },
                set(value) {
                    this.$store.commit('updateFirstName', value)
                }
            },
            lastName: {
                get() {
                    return this.$store.state.Checkout.lastName
                },
                set(value) {
                    this.$store.commit('updateLastName', value)
                }
            },
            address: {
                get() {
                    return this.$store.state.Checkout.address
                },
                set(value) {
                    this.$store.commit('updateAddress', value)
                }
            },
            city: {
                get() {
                    return this.$store.state.Checkout.city
                },
                set(value) {
                    this.$store.commit('updateCity', value)
                }
            },
            country: {
                get() {
                    return this.$store.state.Checkout.country
                },
                set(value) {
                    this.$store.commit('updateCountry', value)
                }
            },
            region: {
                get() {
                    return this.$store.state.Checkout.region
                },
                set(value) {
                    this.$store.commit('updateRegion', value)
                }
            },
            postalCode: {
                get() {
                    return this.$store.state.Checkout.postalCode
                },
                set(value) {
                    this.$store.commit('updatePostalCode', value)
                }
            }
        },
        mounted: function () {
            const script = document.createElement("script");
            script.src =
                "https://www.paypal.com/sdk/js?client-id=AUN0ZNH2uaFXOkOv5OEkalutRlRefISeWD7TtaOtVwEEItjLsk8guQKjp0JiGCmNCgpo4Bz8TlV-WaNw&currency=USD";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        methods: {
            setLoaded: function () {
                const that = this;
                window.paypal
                    .Buttons({
                        createOrder: function (data, actions) {
                            const total = that.total + '';
                            const email = that.email + '';
                            const firstName = that.firstName + '';
                            const lastName = that.lastName + '';
                            const address = that.address + '';
                            const city = that.city + '';
                            const region = that.region + '';
                            const countryCode = that.countryCode + '';
                            const postalCode = that.postalCode + '';
                            const finalCart = that.finalCart;
                            return actions.order.create({
                                intent: "CAPTURE",
                                application_context: {
                                    shipping_preference: "SET_PROVIDED_ADDRESS",
                                },
                                payer: {
                                    name: {
                                        given_name: firstName,
                                        surname: lastName
                                    },
                                    email_address: email
                                },
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: 'USD',
                                            value: total,
                                            breakdown: {
                                                item_total: {
                                                    currency_code: 'USD',
                                                    value: total
                                                }
                                            }
                                        },
                                        shipping: {
                                            address: {
                                                address_line_1: address,
                                                admin_area_2: city,
                                                admin_area_1: region,
                                                postal_code: postalCode,
                                                country_code: countryCode
                                            }
                                        },
                                        items: finalCart
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
                        },
                    })
                    .render('.paypal-buttons');
            }
        },
    }

</script>

<style scoped>
    .paypal-buttons{
        margin: auto;
    }
</style>