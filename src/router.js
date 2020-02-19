import VueRouter from 'vue-router'
import StartScreen from "./components/Project/StartScreen"
import ResultScreen from "./components/Project/ResultScreen"
import Message from "./components/Project/Message"
import Question from "./components/Project/Question"


export default new VueRouter ({
	routes: [
		{
            path: '', 
            component: StartScreen
        },
        {
            path: '/question', 
            component: Question
        },
        {
            path: '/result', 
            component: ResultScreen
        },
        {
            path: '/message', 
            component: Message
        }
		// {
		// 	path: '*',
		// 	component: component404
		// }
	],
	mode: 'history'
})