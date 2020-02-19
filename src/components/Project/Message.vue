<template>
    <div id="message" class="alert" :class="'alert-' + type" >
		<h2>{{ text }}</h2>
		<!-- <router-link class="btn btn-success" @click="$emit('onNext')" to='/question' >Next</router-link> -->
		<!-- <b-button class="btn btn-success" @click="$emit('onNext')">Next</b-button> -->
		<button class="btn btn-success" @click="$emit('repeat')">Repeat</button>
		<button class="btn btn-success" @click="$emit('nextQuestion')">Next level</button>
		<router-link exact active-class="font-bold" class="btn btn-success" to="/result">result</router-link>


    </div>
</template>

<script>
	// import {eventBus} from './main'

    export default {
        props: ['type', 'text']
    }
 //    created () {
	// 	eventBus.$on('onQuestionSuccess', => {
	// 		text = this.message.text
	// 	}
	// }

</script>

<style scoped>
	.alert {
		text-align: center;
	}
	h2, .btn {
		margin: 30px 30px;
	}
</style>