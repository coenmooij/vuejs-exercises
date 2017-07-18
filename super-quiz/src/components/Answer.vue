<template>
    <div class="panel panel-default text-center">
        <div class="panel-heading">
            <h3 class="panel-title text-center">Results</h3>
        </div>
        <div class="panel-body">
            <div v-if="answeredCorrectly" class="alert alert-success">Answered Correctly!</div>
            <div v-else class="alert alert-danger">Answered Wrong!</div>
            <button @click="nextQuestion" class="btn btn-primary">Next Question</button>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            answeredCorrectly: Boolean
        },
        methods: {
            nextQuestion(){
                this.$emit('answered', true);
            },
        },
    }
</script>