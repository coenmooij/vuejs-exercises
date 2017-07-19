<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }}
                    <small>Current price: {{ stock.price }}, Amount: {{ stock.amount }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input :id="stock.id" class="form-control" type="number" placeholder="Amount" v-model="amount">
                </div>
                <div class="pull-right">
                    <button @click="sell" :disabled="stock.amount < amount || amount <= 0 || Number.isInteger(amount)" class="btn btn-danger">
                        Sell ({{ amount }})
                    </button>
                </div>
            </div>
            <div class="panel-footer text-center">
                &nbsp;<span v-if="amount > 0">{{ amount }} x {{ stock.price }} =
                    {{ profit }}</span>&nbsp;
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default{
        props: {
            stock: {
                id: Number,
                name: String,
                price: Number,
            }
        },
        data(){
            return {
                amount: 0,
                budget: 2000, // TODO : make dynamic
            }
        },
        methods: {
            ...mapActions(['sellStock']),
            sell(){
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    amount: this.amount,
                };
                this.sellStock(order);
                this.amount = 0;
            }
        },
        computed: {
            profit(){
                return this.stock.price * this.amount;
            },
        }
    }
</script>

<style scoped>
    .panel-footer {
        color: #7f7f7f !important;
    }
</style>
