<template>
    <div class="container">
        <h2>Призначення</h2>
        <div class="header">
            <p>Шофер</p>
            <p>Номер Автобуса</p>
        </div>
        <ul>
            <li v-for="assignment in getTransformedAssignmentsList" :key="assignment.id " class="assignment"  >
                <span>{{ assignment.driverName || 'Невідомий водій'}}</span
                ><span>{{ assignment.busNumber }}</span>
                <button  class="assignment__button" @click="onDelete(assignment.id)">
                    <img src="@/assets/free-icon-delete-button-5676047.png" alt="photo" />
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AssignmentsManager',

    computed: {
        ...mapGetters('assignments', ['getTransformedAssignmentsList']),
    },
		methods: {
			...mapActions('assignments', ['onDelete']),
		// 	onDelete(assignment) {
    //     console.log('assignment:', assignment);
    //     if (assignment && assignment.id) {
    //         console.log('assignment.id:', assignment.id);
    //         this.onDelete(assignment.id);
    //     } else {
    //         console.error('Invalid assignment:', assignment);
    //     }
    // },
 
		},
}
</script>

<style lang="scss" scoped>
.container {
	max-width: 500px;
}
.header {
	color: blue;
	font-weight: 700;
	padding-left: 50px;
	display: flex;
	gap: 150px;
}
.assignment {
display: flex;
justify-content:space-between;
margin-bottom: 10px;
    &__button {

			& img{
				width: 20px;
height: 20px;
			}
    }
  
}
</style>
