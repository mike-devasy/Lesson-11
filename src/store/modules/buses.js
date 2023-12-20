export default {
    namespaced: true,
    state: {
        busesList: [
            {
                id: 1,
                number: 'AO2312HA',
								seats:40,
            },
            {
                id: 2,
                number: 'AO237HA',
								seats:30,
            },
            {
                id: 3,
                number: 'AХ2113HA',
								seats:40,
            },
            {
                id: 4,
                number: 'AВ2481HA',
								seats:20,
            },
        ],
    },
    getters: {
        getBusesList: (state) => state.busesList,
				getBusById:(state) => (busId) => state.busesList.find((bus) => bus.id == busId),

    },
    mutations: {
			addBus(state, bus){
      state.busesList.push(bus)
			},
			updateBus(state, busObj){
				 const busIndex = state.busesList.findIndex((bus) => bus.id === busObj.id)
				 state.busesList[busIndex] = busObj
			},
			removeBus(state, busId){
				state.busesList =	state.busesList.filter((bus) =>bus.id !== busId)
			},
	 
		},
    actions: {
			addBus({commit}, bus){
				commit('addBus', {
					id: new Date().getTime(),
					...bus,
			})
			},
			updateBus({commit}, bus){
				commit('updateBus', bus)
			},
			removeBus({commit, dispatch}, busId){
				commit('removeBus', busId)
				dispatch ('assignments/deleteAssignmentByBusId', busId, {root:true})
			},
 
		},
    modules: {},
}
