<template>
    <div id="question" class="alert alert-secondary">
		<h2>{{ settings.question }}</h2>

		<div class="buttons">
			<!-- <b-button 
				variant="primary" 
				:key="number" 
				v-for="number in answers"
				@click="onAnswer()"
			>{{ number }}</b-button> -->
			<b-button 
				variant="primary" 
				:key="index" 
				v-for="(answer, index) in this.settings.answers"
				@click="onAnswer(index)"
			>{{ answer.variant }}</b-button>
		</div>

		<router-link exact active-class="font-bold" class="btn btn-success" to="/result">result</router-link>

    </div>
</template>

<script>
	// import {eventBus} from './main'

	export default {
		props: ['settings'], 
		data(){
			return {
			}
		},
		computed: {
			
		},
		methods: {
			toResult() {
				// if (this.settings[index] < 3) {
				// 	this.$router.push('/result')
				// }
			},
			onAnswer(index){
				if (this.settings.answers[index].correct) {
					/* eslint-disable no-console */
					console.log(this.settings.answers.correct);
					/* eslint-enable no-console */
					this.$emit('success')
				} 
				// else if(this.question < 3) {
				// 	this.$router.push('/result')
				// }
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
		margin: 30px 50px;
	}
</style>