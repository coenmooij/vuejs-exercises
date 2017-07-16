<template>
    <div class="quote-form">
        <div class="form-field">
            <span for="quote">Quote: </span><input id="quote" type="text" v-model="quote">
        </div>
        <div class="form-field">
            <span for="quote">Author: </span><input id="author" type="text" v-model="author">
        </div>
        <button @click="submitQuote">Add Quote</button>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        props: {
            addQuote: Function,
        },
        data(){
            return {
                quote: '',
                author: '',
            }
        },
        methods: {
            submitQuote(){
                this.addQuote(this.author, this.quote);
                this.author = '';
                this.quote = '';
            }
        }
    }
</script>

<style scoped>
    div.quote-form {
        width: 300px;
        padding: 20px;
        margin: 0 auto;
    }

    span {
        width: 80px;
        display: inline-block;
        margin-right: 10px;
    }

    .form-field {
        margin: 5px 0;
    }

    button {
        margin-left: 90px;
        padding: 5px 8px;
        width: 185px;
        font-size: 15px;
    }

    input {
        font-size: 15px;
        padding: 5px 8px;
    }
</style>
