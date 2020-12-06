<template>
	<v-app>
		<Header></Header>
		<v-main class="content">
			<router-view></router-view>
		</v-main>
		<Footer></Footer>
	</v-app>
</template>

<script>
import Header from "@/views/Utils/Header";
import Footer from "@/views/Utils/Footer";

export default {
	name: "App",
	components: {
		Header,
		Footer,
	},
	mounted() {
		this.$router.afterEach((to) => {
			let path = to.path.split("/");
			this.$store.commit("Run/updateUrl", path);
		});
		this.$axios.$get("/getImgUrl")
			.then((res) => {
				this.$store.commit("Run/updateAuthImg", "https://www.bing.com" + res.data.images[0].url);
			});

		window.loaded = true;
	},
	data: () => ({}),
};
</script>
<style scoped>
@import "./assets/main.css";

.content {
	/*margin: 30px auto;*/
	min-height: calc(100% - 121px - 64px);
	width: 100%;
}
</style>
