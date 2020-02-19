<template>
    <div id="result" class="alert alert-secondary">
        <h2>result</h2>
        <h3>Success: {{ stats.success }}</h3>
        <h3>Error: {{ stats.error }}</h3>
        <!-- <router-link class="btn btn-success" to="/question" @click="$emit('repeat')">Repeat</router-link> -->
        <button class="btn btn-success" to="/question" @click="$emit('repeat')">Repeat</button>

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