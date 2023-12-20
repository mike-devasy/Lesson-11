import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssignmentsView from '@/views/AssignmentsView.vue'
import MyContacts from '../views/MyContacts.vue'
import DriversView from '../views/DriversView.vue'
import BussesView from '../views/BussesView.vue'
import DriversEditor from '@/components/DriversEditor.vue'
import BusEditor from '@/components/BusEditor.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/assignments',
        name: 'assignments',
        component: AssignmentsView,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: MyContacts,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
		{
			path: '/driver/:driverId?',
			name: 'selectedDriver',
			component: DriversEditor,
	},
    {
        path: '/busses',
        name: 'busses',
        component: BussesView,
    },
    {
        path: '/busses/:busId?',
        name: 'selectedBus',
        component: BusEditor,
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
})

export default router
