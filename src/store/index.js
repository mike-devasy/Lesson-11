import { createStore } from 'vuex'
import drivers from './modules/drivers'
import buses from './modules/buses'
import assignments from './modules/assignments'
export default createStore({
    modules: {
        drivers,
        buses,
        assignments,
    },
})
