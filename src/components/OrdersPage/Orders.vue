<template>
    <main>
        <div class="title">
            <h1>Orders</h1>
            <hr>
        </div>
        <div class="main-section">
            <div class="order-wrap" v-for="order in orders" :key="order.id">
                <button class="order-title">Order #{{order.id}}</button>
                <div class="order-info">
                    <p>Order Date: {{order.created_at}}</p>
                    <p>Status: {{order.status}}</p>
                    <p class="bold">Customer:</p>
                    <p>Email: {{order.email}}</p>
                    <p>Name: {{order.name}}</p>
                    <p>Address: {{order.address}}</p>
                    <p>City: {{order.city}}</p>
                    <p>Country: {{order.country}}</p>
                    <p>ZIP: {{order.postalCode}}</p>
                    <p>Payment: {{order.source}}</p>
                </div>
                <table class="order-items">
                    <tr>
                        <th class="bold">Item</th>
                        <th class="bold">Quantity</th>
                        <th class="bold">Description</th>
                    </tr>
                    <tr v-for="(item, index) in orders.order" :key="index">
                        <td>{{item.name}}</td>
                        <td>{{item.quantity}}</td>
                        <td>{{item.description}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
    const axios = require('axios').default;

    export default {
        name: "Orders",
        data: function () {
            return {
                orders: null
            }
        },
        methods: {
            toggle(ident) {
                var elem = document.getElementById("content-" + ident);
                elem.classList.toggle('collapsed');
            }
        },
        mounted: function () {
            let session_url = 'https://6og.ooo/api/orders'
            return new Promise(() => {
                axios({
                    method: 'get',
                    url: session_url,
                })
                    .then(res => {
                        this.orders = res.data;
                        //eslint-disable-next-line no-console
                        console.log(res)
                    })
                    .catch(err => {
                        //eslint-disable-next-line no-console
                        console.log(err)
                    })
            })
        }
    }
</script>

<style scoped>
    main {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .title {
        padding: 15px;
        height: auto;
        width: 100%;
    }

    .title > h1 {
        margin: auto;
        font-size: 44px;
        font-weight: bold;
    }

    hr {
        border: 1.5px black solid;

    }

    .main-section {
        display: flex;
        flex-direction: column;
        padding: 15px;
        align-content: flex-start;
        font-family: 'GT-America', Helvetica, Arial, sans-serif;
    }

    .order-wrap {
        text-align: left;
    }

    .order-title {
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 10px;
    }

    .order-info {
        display: flex;
        flex-direction: column;
    }

    .bold {
        font-weight: bold;
        margin-top: 5px;
    }

    p {
        margin: 0;
    }

    td, th {
        padding-right: 10px;
        text-align: left;
        width: auto;
    }
</style>