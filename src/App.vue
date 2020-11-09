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
		Footer
	},
	mounted() {
		window.onloaded = true;
	},
	data: () => ({}),
};
</script>
<style scoped>
@import "./assets/main.css";

.content {
	max-width: max(800px, 80%);
	/*text-align: center;*/
	margin: 30px auto;
}
</style>
