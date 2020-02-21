<template>
    <div id="question" class="alert alert-secondary">
		<h2>Question number: {{ this.question }} of {{ this.questMax }} </h2>

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
		// props: ['settings','question', 'questMax'], 
		props: {
			settings: {
				type: Object,
				required: true
			},
			question: {
				type: Number,
				required: true
			},
			questMax: {
				type: Number,
				required: true
			}
		},
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
					this.$emit('error', `${this.settings.question} Это НЕ '${this.settings.answers[index].variant}'!`)
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