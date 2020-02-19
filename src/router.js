import VueRouter from 'vue-router'
import StartScreen from "./components/Project/StartScreen"
import ResultScreen from "./components/Project/ResultScreen"
import Message from "./components/Project/Message"
import Question from "./components/Project/Question"
import Home from "./components/Home"



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
        },
        {
            path: '/home', 
            component: Home
        }
		// {
		// 	path: '*',
		// 	component: component404
		// }
	],
	mode: 'history'
})