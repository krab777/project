<template>
    <div id="result" class="alert alert-secondary">
        <h2 v-fontSize>Retults</h2>
        <div>
            <h3>Your correct answers is: {{ stats.success }}</h3>
            <br>
            <h3>Your wrong answers is: {{ stats.error }}</h3>
        </div>
        <button class="btn btn-success" @click="$emit('repeat')">Repeat</button>
    </div>
</template>

<script>
    export default {
        // props: ['stats']
        props: {
            stats: {
                type: Object,
                required: true
            }
        },
        directives: {
            fontSize: {
                bind(el) {
                    el.style.fontSize = '34px'              
                }
            }    
        }
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