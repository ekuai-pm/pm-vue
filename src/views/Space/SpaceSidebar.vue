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
					<v-list-item v-for="(item,index) in sideBar" :key="index" @click="redirect(index)">
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
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
		sideBar: [
			{icon: "mdi-account-circle", title: "个人资料", to: "info"},
			{icon: "mdi-folder", title: "文件", to: "file"},
			{icon: "mdi-star", title: "项目", to: "project"},
			{icon: "mdi-group", title: "群组", to: "group"},
		],
	}),
	methods: {
		redirect(e) {
			this.$router.push("/user/space/" + this.sideBar[e].to);
		},
	},
	computed: {
		selected: {
			get() {
				let name = this.$store.state.Run.url[3];
				for (let index in this.sideBar) {
					if (this.sideBar[index].to === name) {
						return parseInt(index);
					}
				}
				return -1;
			},
			set() {
			},
		},
	},
	mounted() {
		this.pin = document.body.offsetWidth >= 800;
	},
	watch: {
		pin() {
			this.$emit("expand", this.pin);
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
