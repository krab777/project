import VueRouter from 'vue-router'
import StartScreen from "./components/Project/StartScreen"
import ResultScreen from "./components/Project/ResultScreen"
import Message from "./components/Project/Message"
import Question from "./components/Project/Question"
import PageNotFound from "./components/PageNotFound"
import Swapi from "./components/Swapi"
import UserProfile from "./components/UserProfile"


export default new VueRouter ({
	routes: [
		{
            path: '/', 
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
			path: '*',
			component: PageNotFound
		},
        {
            path: '/users', // http://localhost:8080/users
            component: Swapi
        },
        {
            path: '/users/:id', // http://localhost:8080/users/1
            component: UserProfile
        }

	],
	mode: 'history'
})