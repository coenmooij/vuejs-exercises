<template>
    <div class="quote" @click="removeQuote">
        <h1>"{{ quote.quote }}"</h1>
        <span>- {{ quote.author }}</span>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        props: {
            quote: {
                author: String,
                quote: String
            }
        },
        methods: {
            removeQuote(){
                this.$emit('removeQuote');
            }
        }
    }
</script>

<style scoped>
    .quote {
        border: 1px solid lightgrey;
        padding: 20px;
        margin: 20px;
        box-shadow: 1px 1px 5px #232323;
        background-color: white;
        float: left;
        width: 300px;
    }

    h1 {
        font-size: 22px;
        height: 100px;
    }

    span {
        float: right;
        font-size: 20px;
    }
</style>
