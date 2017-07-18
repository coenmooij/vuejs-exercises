<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" mode="out-in">
                    <component :is="mode" @answered="onAnswer" :answeredCorrectly="answeredCorrectly"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Answer from './components/Answer.vue';
    import Question from './components/Question.vue';

    export default {
        data(){
            return {
                mode: 'app-question',
                answeredCorrectly: false,
            }
        },
        components: {
            appAnswer: Answer,
            appQuestion: Question
        },
        methods: {
            onAnswer(isCorrect){
                if (this.mode === 'app-question') {
                    this.answeredCorrectly = isCorrect;
                    this.mode = 'app-answer';
                } else {
                    this.answeredCorrectly = false;
                    this.mode = 'app-question';
                }
            }
        }
    }
</script>

<style>
    .flip-enter-active {
        animation: flip-in 0.4s ease-out forwards;
    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
