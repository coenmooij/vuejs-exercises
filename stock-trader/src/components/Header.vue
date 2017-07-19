<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>

                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

                <ul class="nav navbar-nav navbar-right">

                    <li>
                        <div class="navbar-form">
                            <div class="form-group">
                                <button @click="nextDay" class="btn btn-primary">Next Day</button>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="" @click.prevent="saveData">Save Data</a></li>
                            <li><a href="" @click.prevent="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default{
        data(){
            return {
                isDropdownOpen: false,
            };
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                loadDataFromServer: 'loadData',
            }),
            nextDay(){
                this.randomizeStocks();
            },
            saveData(){
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.getStocks,
                }
                this.$http.put('data.json', data);
            },
            loadData(){
                this.loadDataFromServer();
            },
        },

    }
</script>

<style>
</style>