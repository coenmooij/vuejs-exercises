<template>
    <div id="app">
        <app-quote-form :addQuote="addQuote"></app-quote-form>
        <hr>
        <app-progress-bar :quotes="numberOfQuotes" :maxQuotes="maxQuotes"></app-progress-bar>
        <hr>
        <app-quote v-for="quote in quotes" :key="quote.index" :data="quote" :quote="quote" @removeQuote="removeQuote(index)"></app-quote>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import QuoteForm from './components/QuoteForm.vue';
    import ProgressBar from './components/ProgressBar.vue';

    export default {
        data: function () {
            return {
                quotes: [
                   {author: 'Martin Luther King', quote: 'I have a dream'},
                    {author: 'William Shakespeare', quote: 'To be or not to be, that is the question'},
                    {
                        author: 'Albert Einstein',
                        quote: 'You don\'t understand it fully if you can\'t explain it simply'
                    },
                ],
                maxQuotes: 10
            };
        },
        components: {
            'app-quote': Quote,
            'app-quote-form': QuoteForm,
            'app-progress-bar': ProgressBar,
        },
        computed: {
            numberOfQuotes(){
                return this.quotes.length;
            }
        },
        methods: {
            addQuote(author, quote){
                if (this.numberOfQuotes < this.maxQuotes) {
                    if(author === '' || quote === ''){
                        alert("Quote & Author can't be empty");
                    } else {
                        this.quotes.push({
                            author: author,
                            quote: quote,
                        });
                    }
                } else {
                    alert('Maximum number reached, remove one to add another');
                }
            },
            removeQuote(index){
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
    body {
        background-color: #f2f2f3;
        font-family: "Helvetica Neue", sans-serif;
    }

    p {
        font-size: 15px;
    }

    .clear {
        clear: both;
    }
</style>
