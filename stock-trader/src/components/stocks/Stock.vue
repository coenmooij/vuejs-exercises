<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }}
                    <small>Current price: {{ stock.price }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input :id="stock.id" class="form-control" type="number" placeholder="Amount" v-model="amount">
                </div>
                <div class="pull-right">
                    <button @click="buy" :disabled="amount <= 0 || Number.isInteger(amount)" class="btn btn-success">
                        Buy ({{ amount }})
                    </button>
                </div>
            </div>
            <div class="panel-footer text-center">
                &nbsp;<span v-if="amount > 0">{{ amount }} x {{ stock.price }} = <span
                    :class="{red: !canAfford, green: canAfford}">{{ cost }}</span></span>&nbsp;
            </div>
        </div>
    </div>
</template>

<script>
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
        computed: {
            cost(){
                return this.stock.price * this.amount;
            },
            canAfford(){
                return this.budget - this.cost > 0;
            }
        },
        methods: {
            buy(){
                const order = {
                    id: this.stock.id,
                    price: this.price,
                    amount: this.amount,
                };
                this.$store.dispatch('buyStock', order);
                this.amount = 0;
            }
        }
    }
</script>

<style scoped>
    .panel-footer {
        color: #7f7f7f !important;
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }
</style>
