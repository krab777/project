<template>
    <div id="start" class="alert alert-secondary">
		<h2>start</h2>
		<!-- <router-link class="btn btn-success" @click="$emit('onStart')" to='/question'>Start</router-link> -->
		<b-button class="btn btn-success" @click="$emit('start')">Start</b-button>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
	.alert {
		text-align: center;
	}
	h2, .btn {
		margin: 30px 30px;
	}
</style>