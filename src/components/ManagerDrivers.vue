<template>
	<div class="container">
<drivers-list/>
<drivers-filters/>
	</div>
</template>

<script>
import DriversList from './DriversList.vue';
import DriversFilters from './DriversFilters.vue';
	export default {
		name:'ManagerDrivers',
		components:{
			DriversList,
			DriversFilters
		}
	}
</script>

<style lang="scss" scoped>
.container{
	max-width: 1400px;
	display: flex;
	gap: 50px;
}
</style>