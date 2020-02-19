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
				:key="answer" 
				v-for="answer in this.settings.answers"
				@click="onAnswer()"
			>{{ answer }}</b-button>
		</div>


		<router-link exact active-class="font-bold" class="btn btn-success" to="/result">result</router-link>

		<div>{{ check }}</div>
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
			chech() {
					/* eslint-disable no-console */
					console.log(this.settings);
					/* eslint-enable no-console */				
			},
			onAnswer(){
				if (this.settings.answers.correct) {
					/* eslint-disable no-console */
					console.log(this.settings.answers.correct);
					/* eslint-enable no-console */
					this.$emit('success')
				}
				else {
					this.$emit('error', `${this.settings.question} is '${this.settings.answers.variant}'!`)
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