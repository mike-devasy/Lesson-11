<template>
	<div class="buses-container">
		<h3>Наші автобуси</h3>
<ul>
	<h4 class="buses-header"><span>Номери</span><span>Кількість місць</span>
	</h4>
	<li v-for="bus in getBusesList" :key="bus.id" class="bus"><span>{{bus.number}}</span><span>{{ bus.seats }}</span>
		<div class="driver__buttons-block block-buttons">
						<button  class="block-buttons__edit"  @click="onEdit(bus)"><img src="../assets/free-icon-editing-2530036.png" alt="image"></button>
						<button   class="block-buttons__delete" @click="removeBus(bus.id)"><img src="../assets/free-icon-delete-button-5676047.png" alt="image"></button>
					</div>
				</li>
</ul>
<router-link :to="{ name: 'selectedBus'}" class="bus__adding"> Додати автобус </router-link>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'BussesView',
 
		computed:{
			...mapGetters('buses', ['getBusesList'])
		},
		methods: {
		...mapActions('buses', ['removeBus']),
		onEdit(bus) {
					this.$router.push({
							name: 'selectedBus',
							params: {
									busId: bus.id,
							}
					})
					
			},
	},
}
</script>

<style lang="scss" scoped>
.buses-container {
	width: 800px;
}
.buses-header {
	display: flex;
	gap: 200px;
	color:blue;
}
ul{
	list-style: none;
}
.bus{
display: flex;
justify-content:space-between;
max-width: 620px;
// gap: 220px;
margin-bottom: 10px;
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
.bus__adding {
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
</style>
