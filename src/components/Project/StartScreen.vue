<template>
    <div id="start" class="alert alert-secondary">
        <slot name="title"></slot>
		<!-- <h2>{{ start }}</h2> -->
        <h4>{{ description }}</h4>
        
		<b-button class="btn btn-success" @click="$emit('start')">{{ start }}</b-button>

        <br>
        <p v-colored:color.font="'grey'">{{ descSmall }}</p>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				start: 'Start',
                description: 'This is the simple testing single page application',
                descSmall: 'To not loose Your progress don\'t reload the page'
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