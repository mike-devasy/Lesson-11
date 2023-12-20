
export default {
    namespaced: true,
    state: {
        assignmentsList: [
            {
                id: 1,
                driverId: 2,
                busId: 1,
            },
            {
                id: 2,
                driverId: 1,
                busId: 2,
            },
            {
                id: 3,
                driverId: 3,
                busId: 4,
            },
            {
                id: 4,
                driverId: 4,
                busId: 3,
            },
        ],
    },
    getters: {
        getAssignmentsList: (state) => state.assignmentsList,
				getTransformedAssignmentsList : (state, getters, rootState, rootGetters) => 
					  state.assignmentsList.map((assignment) => ({
						id:assignment.id,
						driverName:rootGetters['drivers/getDriverById'](assignment.driverId).name,
						busNumber:rootGetters['buses/getBusById'](assignment.busId).number
					}))
					
		}
		,
    mutations: {
			 

			onDelete(state, assignmentId){
				console.log('state.assignmentsList', state.assignmentsList );
				console.log('assignmentId' , assignmentId);
				state.assignmentsList = state.assignmentsList .filter((assignment) => assignment.id !== assignmentId)
			},
			addAssignment(state, assignment) {
				
				state.assignmentsList.push(assignment)
		},
			deleteAssignmentByBusId(state, busId){
				state.assignmentsList = state.assignmentsList .filter((assignment) => assignment.busId !== busId)
			},
			deleteAssignmentByDriverId(state, driverId){
				state.assignmentsList = state.assignmentsList .filter((assignment) => assignment.driverId !== driverId)
			},
		},
    actions: {
			addAssignment({commit}, assignmentData){
				commit('addAssignment', {
					id: new Date().getTime(),
					...assignmentData,
			})},
			onDelete({commit}, assignmentId){
				
				commit('onDelete', assignmentId)
			},
			deleteAssignmentByBusId({commit},busId){
				commit('deleteAssignmentByBusId', busId)
			},
			deleteAssignmentByDriverId({commit},driverId){
				commit('deleteAssignmentByDriverId', driverId)
			},
		},
    modules: {},
}
