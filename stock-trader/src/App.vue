<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <transition>
                    <router-view></router-view>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        },
        created(){
            this.$store.dispatch('initializeStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
