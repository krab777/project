<template>
    <div id="app">
        <div class="main">
            <h1>This is my project</h1>
            <h2>Question number: {{ question }}</h2>
            <router-view
                @success="onQuestionSuccess"
                @error="onQuestionError"              
                :settings="questions[question]"
                :type="message.type"
                :text="message.text"
                @start="onStart"
                @repeat="onStart"
                @next="onNext"
                @nextQuestion="onNextQuestion"
            ></router-view>

            <div>Errors: {{ stats.error }}</div>
            <div>Success {{ stats.success }}</div>
        </div>        
    </div>
</template>



<script>
    import Notifier from './mixins/notifier'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        name: 'app',
        mixins: [Notifier],
        data() {
            return {
                message: {
                    type: '',
                    text: ''
                },
                stats: {
                    success: 0,
                    error: 0
                },
                // questMax: 3,
                question: 0,
                questions: [
                    {   
                        question: "A text question",
                        answers: [
                            {
                                variant: "A",
                                correct: true
                            },
                            {
                                variant: "B",
                                correct: false
                            },
                            {
                                variant: "C",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'B text question',
                        answers: [
                            {
                                variant: "A",
                                correct: false
                            },
                            {
                                variant: "B",
                                correct: true
                            },
                            {
                                variant: "C",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'C text question',
                        answers: [
                            {
                                variant: "A",
                                correct: false
                            },
                            {
                                variant: "B",
                                correct: false
                            },
                            {
                                variant: "C",
                                correct: true
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            questDone() {
                return this.stats.success + this.stats.error
                
            },
            questMax() {
                return this.questions.length()
            }
        },
        methods: {
            onQuestionSuccess() {
                this.message.text = 'Good job!'
                this.message.type = 'success'
                this.$router.push('/message')
                this.stats.success++                
            },
            onQuestionError(msg) {
                this.message.text = msg
                this.message.type = 'warning'
                this.$router.push('/message')
                this.stats.error++                
            },
            onStart() {                
                this.stats.success = 0
                this.stats.error = 0
                this.$router.push('/question')
            },
            onNext() {
                /* eslint-disable no-console */
                    console.log('WOW');
                    /* eslint-enable no-console */
                if(this.questDone < this.questMax) {
                    this.$router.push('/question')
                } 
                else {
                    this.$router.push('/result')
                    
                }
            },
            onNextQuestion() {
                this.question++
                this.$router.push('/question')
            }
        }
    }
</script>

<style >
/*src="./assets/css/tailwind.css"*/
    .main {
        margin: 0 30px;
    }
    #app {
        max-width: 1200px;
        margin: 30px auto
    }
    /*.alert {
        text-align: center;
    }
    h2, .btn {
        margin: 30px 0;
    }*/
</style>
