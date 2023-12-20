import { isCorrespondToFilter } from '@/store/helpers'
export default {
    namespaced: true,
    state: {
        driversList: [
            {
                id: 1,
                name: 'Л.В.Левінен ',
                exp: 12,
            },
            {
                id: 2,
                name: 'В.К.Бабенко',
                exp: 23,
            },
            {
                id: 3,
                name: 'Т.Г.Шевченко',
                exp: 7,
            },
            {
                id: 4,
                name: 'А.А.Романов',
                exp: 5,
            },
        ],
				filterObj:{}
    },
    getters: {
        getDriversList: (state) => state.driversList,
				getDriverById:(state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
				getFilteredDriversList: (state) =>
				state.driversList.filter((driver) => isCorrespondToFilter(driver, state.filterObj)),
    },
    mutations: {
			addDriver(state, driver){
state.driversList.push(driver)
			},
			updateDriver(state, driverObj){
				 const driverIndex = state.driversList.findIndex((driver) => driver.id === driverObj.id)
				 state.driversList[driverIndex] = driverObj
			},
			removeDriver(state, driverId){
				state.driversList =	state.driversList.filter((driver) => driver.id !== driverId)
			},
			setFilter( state, filterDataObj){
				 state.filterObj = filterDataObj
			}
		},
    actions: {
			addDriver({commit}, driver){
				commit('addDriver', {
					id: new Date().getTime(),
					...driver,
			})
			},
			updateDriver({commit}, driver){
				commit('updateDriver', driver)
			},
			removeDriver({commit, dispatch}, driverId){
				commit('removeDriver', driverId)
				dispatch('assignments/deleteAssignmentByDriverId', driverId, {root:true})
			},
			updateFilter({commit}, filterDataObj){
				commit('setFilter', filterDataObj)
			}
		},
    modules: {},
}
