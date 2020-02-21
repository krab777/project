export default {
    computed: {
        questDone() {
            return this.stats.success + this.stats.error
            
        },
        questMax() {
            return this.questions.length
        }
    },
    methods: {
        reset() {
            this.stats.success = 0
            this.stats.error = 0
        },
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
            this.reset()        
            this.$router.push('/question')
        },
        onRepeat() {
            this.reset()
            this.question = 0
            this.$router.push('/')
        },
        onPrevQwestion() {
            this.$router.push('/question')
        },
        onNext() {
            if(this.question < this.questMax) {
                this.$router.push('/question')
            } 
            else {
                this.$router.push('/result')                    
            }
        },
        onNextQuestion() {
            this.question++
            this.onNext()
        }
    }

}