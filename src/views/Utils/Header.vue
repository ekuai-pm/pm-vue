<template>
	<v-app-bar app color="primary" dark>
		<div class="d-flex logo ">
			<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
			/>

			<v-img
					alt="Vuetify Name"
					class="shrink mt-1 hidden-sm-and-down"
					contain
					min-width="100"
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
					width="100"
			/>
		</div>
		<v-tabs align-with-title show-arrows v-model="tab">
			<v-tab>
				<v-icon>mdi-home</v-icon>
				首页
			</v-tab>
			<v-tab>
				<v-icon>mdi-book</v-icon>
				论坛
			</v-tab>
			<v-tab>
				<v-icon>mdi-account-circle</v-icon>
				个人中心
			</v-tab>
		</v-tabs>
		<v-spacer></v-spacer>
		<v-btn
				href="https://github.com/ekuai-pm"
				target="_blank"
				text
		>
			<span>源代码</span>
			<v-icon>mdi-github</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	name: "Header",
	data: () => ({
		tab: null,
	}),
	watch: {
		tab(newValue, oldValue) {
			if (oldValue !== null) {
				let url = "/";
				switch (newValue) {
					case 1:
						url = "/forum";
						break;
					case 2:
						url = "/user";
						break;
				}
				this.$router.push(url);
			}
		},
	},
};
</script>

<style scoped>
.logo {
	padding: 0 20px;
}
</style>
