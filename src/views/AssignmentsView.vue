 <template>
	<div>
 <assignments-manager/>
 <assignment-creator/>
	</div>
 </template>
 
 <script>
 import AssignmentsManager from '@/components/AssignmentsManager.vue';
 import AssignmentCreator from '@/components/AssignmentCreator.vue';
	export default {
		name:'AssignmentsView',
		components:{AssignmentsManager, AssignmentCreator}
	}
 </script>
 
 <style lang="scss" scoped>
 
 </style>
