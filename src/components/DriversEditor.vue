<template>
	<div class="container">
<label> П І Б :  <input v-model="driver.name" type="text"></label>
<label> Стаж :  <input  v-model="driver.exp" type="number"></label>
	</div>
		<button @click="onAction()" class="action">{{ actionButtonTitle }}</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
	export default {
		name:'DriversEditor',
		data(){
			return{
				driver:{},
			}
		},
computed:{
	...mapGetters('drivers', ['getDriverById']),
	receivedDriverId(){
		return this.$route.params.driverId
	},
	actionButtonTitle(){
		return this.receivedDriverId ? 'Зберегті': 'Додати'
	},
},
created() {
        if (this.receivedDriverId) this.driver = { ...this.getDriverById(this.receivedDriverId)
				 }
    },
methods: {
	...mapActions('drivers', ['addDriver', 'updateDriver']),
	onAction() {
		if(!this.receivedDriverId) {
			this.addDriver(this.driver)
		}
		else this.updateDriver(this.driver)
		     this.$router.push({name:'home'})

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