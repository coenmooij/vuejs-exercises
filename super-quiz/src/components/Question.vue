<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center" v-for="answer in answers">
                <button style="margin:10px;" class="btn btn-primary btn-lg" @click="onAnswer(answer.correct)">
                    {{ answer.answer }}
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                question: '',
                numberOfAnswers:4,
                answers: []
            }
        },
        methods: {
            generateQuestion(){
                let left = this.generateRandomNumber(0, 100);
                let right = this.generateRandomNumber(0, 100);
                let operator = this.generateRandomNumber(0, 1) === 0 ? '+' : '-';
                let answer = operator === '+' ? left + right : left - right;
                this.question = left + ' ' + operator + ' ' + right + ' = ?';
                return answer;
            },
            generateAnswers(answer){
                for (let i = 0; i < this.numberOfAnswers; i++) {
                    this.answers.push({
                        answer: this.generateRandomNumber(answer - 10, answer + 10, answer),
                        correct: false
                    });
                }
            },
            generateCorrectAnswer(answer){
                const correctAnswer = this.generateRandomNumber(0, this.numberOfAnswers - 1);
                this.answers[correctAnswer] = {
                    answer: answer,
                    correct: true,
                };
            },
            generateRandomNumber(start, end, except){
                const randomNumber = Math.round(Math.random() * (end - start)) + start;
                if (randomNumber === except) {
                    return this.generateRandomNumber(start, end, except);
                }
                return randomNumber;
            },
            onAnswer(isCorrect){
                this.$emit('answered', isCorrect);
            }
        },
        created(){
            let answer = this.generateQuestion();
            this.generateAnswers(answer);
            this.generateCorrectAnswer(answer);
        }
    }
</script>