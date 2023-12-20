<template>
	<div class="container">
<label> Номер :  <input v-model="bus.number" type="text"></label>
<label>Кількість місць :  <input  v-model="bus.seats" type="number"></label>
	</div>
		<button @click="onAction()" class="action">{{ actionButtonTitle }}</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
	export default {
		name:'BusEditor',
		data(){
			return{
				bus:{},
			}
		},
computed:{
	...mapGetters('buses', ['getBusById']),
	receivedBusId(){
		return this.$route.params.busId
	},
	actionButtonTitle(){
		return this.receivedBusId ? 'Зберегті': 'Додати'
	},
},
created() {
        if (this.receivedBusId) this.bus = { ...this.getBusById(this.receivedBusId)
				 }
    },
methods: {
	...mapActions('buses', ['addBus', 'updateBus']),
	onAction() {
		if(!this.receivedBusId) {
			this.addBus(this.bus)
			this.$router.push({name:'busses'})
		}
		else this.updateBus(this.bus)
		    //  this.$router.push({name:'home'})
				 this.$router.push({name:'busses'})

	},
},
	}
</script>

<style lang="scss" scoped>
.container{
padding-top: 50px;
display: flex;
flex-direction: column;
gap: 20px;
}
.action{
margin-top: 30px;
width: 80px;
border-radius:3px;
padding: 3px 10px;
cursor: pointer;
&:hover{
	background-color: aqua;
}
}
 
</style>