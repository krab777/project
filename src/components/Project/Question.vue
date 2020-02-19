<template>
    <div id="question" class="alert alert-secondary">
		<h2>{{ settings.question }}</h2>

		<div class="buttons">
			<b-button 
				variant="outline-primary" 
				size="lg" block
				:key="index" 
				v-for="(answer, index) in this.settings.answers"
				@click="onAnswer(index)"
			>{{ answer.variant }}</b-button>
		</div>

		<router-link exact active-class="font-bold" class="btn btn-success" to="/result">result</router-link>

    </div>
</template>

<script>
	export default {
		props: ['settings'], 
		data(){
			return {
			}
		},
		computed: {
			
		},
		methods: {
			onAnswer(index){
				if (this.settings.answers[index].correct) {
					
					this.$emit('success')
				} 
				else {
					this.$emit('error', `${this.settings.question} is NOT '${this.settings.answers[index].variant}'!`)
				}
			},
		}
	}
</script>

<style scoped>
	.alert {
		text-align: center;
	}
	h2, .btn {
		margin: 50px 0;
	}
</style>