<template>
	<div class="buses-container">
		<h3>Наші автобуси</h3>
<ul>
	<h5 class="buses-header"><span>Номери</span><span>Кількість місць</span>
	</h5>
	<li v-for="bus in getBusesList" :key="bus.id"><span>{{bus.number}}</span><span>{{ bus.seats }}</span></li>
</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
	export default {
		name:'BusesList',
 
		computed:{
			...mapGetters(['buses', 'getBusesList'])
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

</style>