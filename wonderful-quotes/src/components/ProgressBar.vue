<template>
    <div>
        <h1 class="progress-bar">Quotes Added: {{quotes}} of {{maxQuotes}}</h1>
        <div class="loading-bar">
            <div class="loaded" :style="{'width': percentage + '%'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quotes: Number,
            maxQuotes: Number
        },
        computed: {
            percentage(){
                return Math.floor((this.quotes / this.maxQuotes) * 100);
            }
        },
    }
</script>

<style>
    .loading-bar {
        width: 80%;
        height: 40px;
        margin: 0 10%;
        border: 1px solid lightgrey;
        background-color: white;
    }

    h1.progress-bar {
        text-align: center;
        font-size: 22px;
    }

    .loaded {
        background-color: blue;
        height: 40px;
    }
</style>
