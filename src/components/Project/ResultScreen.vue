<template>
    <div id="result" class="alert alert-secondary">
        <h2>Retults</h2>
        <div>
            <h3>Your correct answers is: {{ stats.success }}</h3>
            <br>
            <h3>Your wrong answers is: {{ stats.error }}</h3>
        </div>
        <button class="btn btn-success" @click="$emit('start')">Repeat</button>
    </div>
</template>

<script>
    export default {
        props: ['stats']
    }
</script>

<style scoped>
    .alert {
        text-align: center;
    }
    h2, .btn {
        margin: 30px 0;
    }
</style>