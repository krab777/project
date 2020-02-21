<template>
	<div id="counter" >
		<h2>Question number: {{ this.question }} of {{ this.questMax }} </h2>
	</div>
</template>

<script>
	export default {
		props: {
			question: {
				type: Number,
				required: true
			},
			questMax: {
				type: Number,
				required: true
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