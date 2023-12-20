<template>
	<div class="drivers-container">
			<ul>
				<h5 class="driver-header"><span>ПІБ</span><span>СТАЖ</span></h5>
					<li v-for="driver in getFilteredDriversList" :key="driver.id" class="driver"><div class="driver__data"><div>{{ driver.name }}</div><div class="driver__exp">{{ driver.exp }} </div> 
					</div> 
					<div class="driver__buttons-block block-buttons">
						<button  class="block-buttons__edit"  @click="onEdit(driver)"><img src="../assets/free-icon-editing-2530036.png" alt="image"></button>
						<button   class="block-buttons__delete" @click="removeDriver(driver.id)"><img src="../assets/free-icon-delete-button-5676047.png" alt="image"></button>
					</div> </li>
			</ul>
			<router-link :to="{ name: 'selectedDriver'}" class="driver__adding"> Додати водія </router-link>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'DriversList',

	computed: {
			...mapGetters('drivers', ['getFilteredDriversList']),
	},

	methods: {
		...mapActions('drivers', ['removeDriver']),
		onEdit(driver) {
					this.$router.push({
							name: 'selectedDriver',
							params: {
									driverId: driver.id,
							}
					})
					
			},
	},
}
</script>
<style lang="scss" scoped>

ul{
	list-style: none;
}
.drivers-container {
	display: flex;
	flex-direction: column;
}
.driver-header{
	display: flex;
	gap: 200px;
}
.driver {
	width: 400px;
	display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10px;
    &__data {
	display: flex;
	gap: 150px;
align-items:center;
    }
 

    &__buttons-block {
    }

    &__adding {
			align-self: flex-start;
			margin-left: 40px;
			background-color: aqua;
			padding: 5px 18px;
			text-decoration: none;
	    cursor:pointer;
      border-radius: 3px;
			&:hover{
			background-color: rgb(107, 161, 161);
      color:white;
			}
    }
}
.block-buttons {
 display: flex;
 gap: 20px;
    &__edit img{

		width: 20px;
		height: 20px;
    }
    &__delete img{
// display: inline-block;

		width: 20px;
		height: 20px;
    }
}
button{

}
</style>