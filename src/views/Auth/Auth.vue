<template>
	<div class="container">
		<div class="bg" :style="{ backgroundImage: 'url('+url+')' }"></div>
		<div class="page">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: "Auth",
	data: () => ({
		url: "",
	}),
	mounted() {
		this.url = this.getPic();
		this.$router.push("/user/auth/login");
	},
	methods: {
		getPic() {
			return "https://api.bingdou.net/pic/bing/";//此处在获取基本信息时获取
		},
	},
};
</script>

<style scoped>
.container {
	height: 100%;
}

.bg {
	position: fixed;
	/*z-index: -10000;*/
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fff no-repeat center;
	background-size: cover;
}

.page {
	min-width: 300px;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 0 0 5px 5px;
}
</style>
