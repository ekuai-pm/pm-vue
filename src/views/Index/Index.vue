<template>
	<v-container class="container">
		<v-img
				alt="Logo"
				class="shrink mt-1 hidden-sm-and-down padding-10 margin-auto"
				contain
				min-width="100"
				src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg"
				width="300"
		/>
		<div class="emptyBox"></div>
		<div class="text-h2">Ekuai Project Manager</div>
		<div class="emptyBox-xlg"></div>
		<div class="text-h3">公告和待办</div>
		<div class="emptyBox"></div>
		<Timeline></Timeline>
	</v-container>
</template>

<script>
import Timeline from "@/views/Index/Timeline";

export default {
	name: "Index",
	components: {
		Timeline,
	},
};
</script>

<style scoped>
.container {
	text-align: center;
	max-width: min(800px, 90%);
}
</style>
