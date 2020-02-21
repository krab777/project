<template>
    <div id="app">
        <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                    <b-nav-item href="/"><h3>This is my project</h3></b-nav-item>        
                </b-navbar-nav>
            </b-navbar>
        <div class="container">            
            <div class="main">            
                <router-view
                    :stats="stats"
                    :settings="questions[question]"
                    :type="message.type"
                    :text="message.text"
                    :question="question"
                    :questMax="questMax"
                    @success="onQuestionSuccess"
                    @error="onQuestionError"           
                    @start="onStart"
                    @prevQwestion="onPrevQwestion"
                    @repeat="onRepeat"
                    @next="onNext"
                    @nextQuestion="onNextQuestion"
                >
                    <h2 
                        v-colored 
                        slot="title"
                    >Start</h2>
                </router-view>
            </div> 
        </div>
        <footer class="footer fixed-bottom">
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                    <b-nav-item href="/">This is footer for my project</b-nav-item>  
                    <router-link exact active-class="font-bold" to="/users">Users</router-link>      
                </b-navbar-nav>
            </b-navbar>
        </footer>       
    </div>
</template>

<script>
    import MainMixin from './mixins/mainMixin'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        name: 'app',
        mixins: [MainMixin],
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
                // question: 0,
                questions: [
                    {   
                        question: "Человеческое сердце качает кровь как насос?",
                        answers: [
                            {
                                variant: "Да, человеческое сердце работает как кровяной насос",
                                correct: true
                            },
                            {
                                variant: "Нет, сердце не работает как насос",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'Что обозначает формула H2O?',
                        answers: [
                            {
                                variant: "Гелий",
                                correct: false
                            },
                            {
                                variant: "Воду",
                                correct: true
                            },
                            {
                                variant: "Кислород",
                                correct: false
                            },
                            {
                                variant: "Аммиак",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'В какой стране проживает самое большое количество людей?',
                        answers: [
                            {
                                variant: "Бразилия",
                                correct: false
                            },
                            {
                                variant: "США",
                                correct: false
                            },
                            {
                                variant: "Китай",
                                correct: true
                            },
                            {
                                variant: "Индия",
                                correct: false
                            }                        ]
                    },
                    {   
                        question:'Самый большой штат США - это...?',
                        answers: [
                            {
                                variant: "Техас",
                                correct: false
                            },
                            {
                                variant: "Калифорния",
                                correct: false
                            },
                            {
                                variant: "Аляска",
                                correct: true
                            }
                        ]
                    },
                    {   
                        question:'На каком континенте находится пустыня Сахара?',
                        answers: [
                            {
                                variant: "Америка",
                                correct: false
                            },
                            {
                                variant: "Африка",
                                correct: true
                            },
                            {
                                variant: "Азия",
                                correct: false
                            },
                            {
                                variant: "Европа",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'Световые волны распространяются быстрее, чем звуковые?',
                        answers: [
                            {
                                variant: "Нет, звуковые волны быстрее световых",
                                correct: false
                            },
                            {
                                variant: "Да, световые волные быстрее звуковых",
                                correct: true
                            }
                        ]
                    },
                    {   
                        question:'Как называется самая длинная река на земле?',
                        answers: [
                            {
                                variant: "Нил",
                                correct: false
                            },
                            {
                                variant: "Конго",
                                correct: false
                            },
                            {
                                variant: "Амазонка",
                                correct: true
                            },
                            {
                                variant: "Северский Донец",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'Как зову знаменитого ученого, который написал "Краткую историю времени"?',
                        answers: [                   
                            {
                                variant: "Альберт Эйнштейн",
                                correct: false
                            },
                            {
                                variant: "Галилео Галилей",
                                correct: false
                            },
                            {
                                variant: "Стивен Хокинг",
                                correct: true
                            }
                        ]
                    },
                    {   
                        question:'Кто разработал теорию относительности?',
                        answers: [
                            {
                                variant: "Галилео Галилей",
                                correct: false
                            },
                            {
                                variant: "Никола Тесла",
                                correct: false
                            },
                            {
                                variant: "Альберт Эйнштейн",
                                correct: true
                            },
                            {
                                variant: "Стивен Хокинг",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'Статуя Свободы в Нью-Йорке была подарена...',
                        answers: [
                            {
                                variant: "Францией",
                                correct: true
                            },
                            {
                                variant: "Великобританией",
                                correct: false
                            },
                            {
                                variant: "Бельгией",
                                correct: false
                            },
                            {
                                variant: "Канадой",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'Первая мировая война закончилась в...?',
                        answers: [
                            {
                                variant: "1921",
                                correct: false
                            },
                            {
                                variant: "1918",
                                correct: true
                            },
                            {
                                variant: "1919",
                                correct: false
                            }
                        ]
                    },
                    {   
                        question:'Можно ли слышать звуки в открытом космосе?',
                        answers: [
                            {
                                variant: "Да, можно услышать звук в космосе",
                                correct: false
                            },
                            {
                                variant: "Нет, звук в космосе услышать невозможно",
                                correct: true
                            }
                        ]
                    }
                ]
            }
        },
        
    }
</script>

<style scoped>
    .main {
        margin: 30px 30px;
    }
    html, body {
      height: 100%;
    }

    #app {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    h2 {
        margin: 30px 0
    }
</style>
