<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
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

    .slide-enter-active {
        animation: slide-in 0.2s;
    }

    .slide-leave-active {
        animation: slide-out 0.2s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
