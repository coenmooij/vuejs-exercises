<template>
    <div class="col-xs-12 text-center">
        <h1>Trade Cryptocurrencies</h1>
        <br>
        <h3>You may buy stocks in the 'Stocks' page</h3>
        <br/>
        <h3>You may view your portfolio and sell in the 'Portfolio' page</h3>
        <br>
        <h3>Use load to load in dummy data live (save currently disabled)</h3>
        <br>
        <hr>
        <br>
        <h3>Your current funds: <strong>{{ funds | currency }}</strong></h3>
    </div>
</template>

<script>
    export default{
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>
