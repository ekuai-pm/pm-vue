<template>
	<v-app-bar app color="primary" dark>
		<div class="d-flex logo ">
			<v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40"/>
			<v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100"/>
		</div>
		<v-tabs align-with-title show-arrows v-model="tab">
			<v-tab v-for="(item,index) in headBar" :key="index" @click="redirect(index)">
				<v-icon>{{ item.icon }}</v-icon>
				{{ item.title }}
			</v-tab>
		</v-tabs>
		<v-spacer></v-spacer>
		<v-btn href="https://github.com/ekuai-pm" target="_blank" text>
			<span>源代码</span>
			<v-icon>mdi-github</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	name: "Header",
	data: () => ({
		init: false,
		loaded: false,
		headBar: [
			{icon: "mdi-home", title: "首页", to: ""},
			{icon: "mdi-book", title: "讨论", to: "forum"},
			{icon: "mdi-account-circle", title: "个人中心", to: "user"},
		],
	}),
	methods: {
		redirect(e) {
			console.log(e);
			this.$router.push("/" + this.headBar[e].to);
		},
	},
	computed: {
		tab: {
			get() {
				let name = this.$store.state.Run.url[1];
				for (let index in this.headBar) {
					if (this.headBar[index].to === name) {
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
		this.loaded = true;
	},
};
</script>

<style scoped>
.logo {
	padding: 0 20px;
}
</style>
