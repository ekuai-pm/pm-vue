<template>
	<div>
		<SpaceSidebar v-model="expand" @expand="refreshMargin"></SpaceSidebar>
		<v-container class="padding-10 transition-linear-out-slow-in" :style="{ marginLeft: margin+'px'}">
			<router-view></router-view>
		</v-container>
	</div>
</template>

<script>
import SpaceSidebar from "@/views/Space/SpaceSidebar";

export default {
	name: "Space",
	data: () => ({
		expand: false,
		margin: 56,
	}),
	methods: {
		refreshMargin(e) {
			if (e) {
				this.margin = 256;
			} else {
				this.margin = 56;
			}
		},
	},
	components: {
		SpaceSidebar,
	},
};
</script>

<style scoped>
</style>
