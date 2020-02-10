<template>
    <main>
        <div class="title">
            <h1>Orders</h1>
            <hr>
        </div>
        <div class="main-section">
            <div class="order-title"  @click="toggle(1)">
                <p>Order #1232323123</p>
            </div>
            <div class="order-content collapsed" id="content-1" >
                <table class="info">
                    <tr>
                        <td>Date: </td>
                        <td>22.22.2222</td>
                    </tr>
                    <tr>
                        <td>Status: </td>
                        <td>Captured</td>
                    </tr>
                    <tr>
                        <td class="bold">Customer: </td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>jopa@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td>Ivan Ivanov</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>улица Савушкина-Покрышева 228, квартира 322</td>
                    </tr>
                    <tr>
                        <td>City: </td>
                        <td>Tokyo</td>
                    </tr>
                    <tr>
                        <td>Country: </td>
                        <td>Jopan</td>
                    </tr>
                    <tr>
                        <td>ZIP Code: </td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>Payment: </td>
                        <td>Yandex.kASSa</td>
                    </tr>
                    </table>
                <table class="items" >
                    <tr>
                        <th class="bold">Item </th>
                        <th class="bold">Quantity </th>
                        <th class="bold">Size </th>
                    </tr>
                    <tr>
                        <td>6og moondust</td>
                        <td>3</td>
                        <td>M</td>
                    </tr>
                </table>

            </div>
            <div class="order-title"  @click="toggle(2)">
            <p>Order #1232323123</p>
        </div>
            <div class="order-content collapsed" id="content-2" >
                <table>
                    <tr>
                        <td>Date: </td>
                        <td>22.22.2222</td>
                    </tr>
                    <tr>
                        <td>Status: </td>
                        <td>Captured</td>
                    </tr>
                    <tr>
                        <td class="bold">Customer: </td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>jopa@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td>Ivan Ivanov</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>улица Савушкина-Покрышева 228, квартира 322</td>
                    </tr>
                    <tr>
                        <td>City: </td>
                        <td>Tokyo</td>
                    </tr>
                    <tr>
                        <td>Country: </td>
                        <td>Jopan</td>
                    </tr>
                    <tr>
                        <td>ZIP Code: </td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>Payment: </td>
                        <td>Yandex.kASSa</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th class="bold">Item </th>
                        <th class="bold">Quantity </th>
                        <th class="bold">Size </th>
                    </tr>
                    <tr>
                        <td>6og moondust</td>
                        <td>3</td>
                        <td>M</td>
                    </tr>
                </table>
            </div>
            <div class="order-title"  @click="toggle(3)">
                <p>Order #1232323123</p>
            </div>
            <div class="order-content collapsed" id="content-3" >
                <table>
                    <tr>
                        <td>Date: </td>
                        <td>22.22.2222</td>
                    </tr>
                    <tr>
                        <td>Status: </td>
                        <td>Captured</td>
                    </tr>
                    <tr>
                        <td class="bold">Customer: </td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>jopa@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td>Ivan Ivanov</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>улица Савушкина-Покрышева 228, квартира 322</td>
                    </tr>
                    <tr>
                        <td>City: </td>
                        <td>Tokyo</td>
                    </tr>
                    <tr>
                        <td>Country: </td>
                        <td>Jopan</td>
                    </tr>
                    <tr>
                        <td>ZIP Code: </td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>Payment: </td>
                        <td>Yandex.kASSa</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th class="bold">Item </th>
                        <th class="bold">Quantity </th>
                        <th class="bold">Size </th>
                    </tr>
                    <tr>
                        <td>6og moondust</td>
                        <td>3</td>
                        <td>M</td>
                    </tr>
                </table>
            </div>
        </div>

    </main>
</template>

<script>


    // Здесь соответственно скрипты
    export default {
        name: "Orders",
       methods:{
            toggle(ident){
                var elem = document.getElementById("content-" + ident);
                elem.classList.toggle('collapsed');
            }
       }
    }
</script>

<style scoped>
    main {
        margin: 0;
        padding: 0;
        padding-bottom: 15px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        background: #EEEDED;
    }
    .title{
        padding: 15px;
        height:auto;
        width: 100%;
    }
    .title > h1{
        margin: auto;
        font-size: 44px;
        font-weight: bold;
    }
    hr {
        border: 1.5px black solid;

    }
    .main-section{
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        padding: 15px;
        height: 75%;

    }
    .order-title{
        padding: 15px;
        width: 100%;
    }
    .order-title >p:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    .order-title > p{
        float: left;
        font-size: 24px;
        font-weight: bold;
    }
    .order-content{
        padding: 0 15px;
        height:auto;
        display: block;

    }
    .order-content > p{
        float: left;
        font-size: 24px;
        font-weight: bold;
    }
   td,th{
       padding-right: 10px;
       text-align: left;
       width: auto;
    }
    .bold{
        font-weight: bold;
    }
    .collapsed{
        display: none;

    }
    @media all and (max-width: 768px){
        .title > h1{
            margin: auto;
            font-size: 34px;
            font-weight: bold;
        }
        .main-section{
            align-self: center;
        }
        .order-title > p{
            float: none;
            font-size: 24px;
        }
    }
    @media all and (max-width: 576px){

        .order-content > table{
            margin-left: 10%;
            margin-right: 15%;

        }
    }
    @media all and (max-width: 400px){

        .order-content {
            padding: 0 5px;

        }
    }
    @media all and (max-width: 350px){

        .order-content > table{
            margin-left: 5%;
            margin-right: 5%;

        }
    }
</style>