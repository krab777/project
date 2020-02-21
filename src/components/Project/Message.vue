<template>
	<div id="message" class="alert" :class="'alert-' + type" >
		<h2>{{ text | replace }}</h2>
		<button class="btn btn-success" @click="$emit('prevQwestion')">Repeat</button>
		<router-link exact active-class="font-bold" class="btn btn-success" to="/result">Result</router-link>
		<button class="btn btn-success" @click="$emit('nextQuestion')">Next level</button>
	</div>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				required: true
			},
			text: {
				type: String,
				required: true
			},
		},
		filters: {
			replace(str) {				
				return str.replace("is not", "Это НЕ")
			}
		}
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