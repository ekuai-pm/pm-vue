<template>
	<v-app>

		<Header></Header>
		<v-main>
			<HelloWorld/>
		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "@/views/Utils/Header";

export default {
	name: "App",

	components: {
		HelloWorld,
		Header,
	},

	data: () => ({}),
};
</script>
<style scoped>
</style>
