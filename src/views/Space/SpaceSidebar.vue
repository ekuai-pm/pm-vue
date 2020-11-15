<template>
	<v-container class="space-container">
		<v-navigation-drawer permanent :mini-variant="!pin" :expand-on-hover="!pin">
			<v-list-item two-line class="px-2">
				<v-list-item-avatar>
					<img alt="avatar" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png">
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>Tomori Nao</v-list-item-title>
					<v-list-item-subtitle>海纳百川 有容乃大</v-list-item-subtitle>
				</v-list-item-content>
				<v-btn icon @click.stop="pin = !pin">
					<v-icon v-show="!pin">mdi-pin</v-icon>
					<v-icon v-show="pin">mdi-arrow-left-drop-circle</v-icon>
				</v-btn>
			</v-list-item>

			<v-divider></v-divider>
			<v-list nav dense>
				<v-list-item-group v-model="selected" color="primary">
					<v-list-item key="file">
						<v-list-item-icon>
							<v-icon>mdi-folder</v-icon>
						</v-list-item-icon>
						<v-list-item-title>文件</v-list-item-title>
					</v-list-item>
					<v-list-item key="group">
						<v-list-item-icon>
							<v-icon>mdi-account-multiple</v-icon>
						</v-list-item-icon>
						<v-list-item-title>群组</v-list-item-title>
					</v-list-item>
					<v-list-item key="project">
						<v-list-item-icon>
							<v-icon>mdi-star</v-icon>
						</v-list-item-icon>
						<v-list-item-title>项目</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>

		</v-navigation-drawer>
	</v-container>
</template>

<script>
export default {
	name: "SpaceSidebar",
	data: () => ({
		pin: null,
		selected: 0,
	}),
	mounted() {
		this.pin = document.body.offsetWidth >= 800;
		switch (this.$route.params.pathMatch){

		}
	},
	watch: {
		pin() {
			this.$emit("expand", this.pin);
		},
		selected() {
			this.$router.push("/user/space/" + this.selected);
		},
	},
};
</script>

<style scoped>
.space-container {
	position: absolute;
	width: auto;
	height: 100%;
	padding: 0;
}
</style>
