<template>
	<div class="container">
<label > П І Б <input  v-model="filterObj.name"  type="text"></label>
<label > Cтаж від: <input  v-model="filterObj.expStart"  type="number" class="filter-exp"> До :<input v-model="filterObj.expEnd" type="number" class="filter-exp"></label>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		name:'DriversFilters',
		data() {
        return {
            filterObj: {},
        }
    },

    watch: {
        filterObj: {
            handler(newValue) {
                this.updateFilter(newValue)
            },
            deep: true,
        },
    },
		methods: {
			...mapActions('drivers', ['updateFilter'])
	 
		}
	}
</script>

<style lang="scss" scoped>
.container{
	padding-top: 70px;
}
.filter-exp{
	width: 50px;
}
</style>