<template>
	<div class="container">
		<div class="bg" :style="{ backgroundImage: 'url('+url+')' }"></div>
		<v-container class="vertical-center">
			<v-card width="400">
				<v-img height="132px" :src="url" class="title-img">
					<v-card-title class="white--text mt-8 title-container">
						<div class="text-h4 margin-auto">
							Project Manager
						</div>
					</v-card-title>
				</v-img>
				<v-card-text>
					<router-view></router-view>
				</v-card-text>
			</v-card>
		</v-container>
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
		// this.$router.push("/user/auth/login");
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
	display: table;
}

.vertical-center {
	display: table-cell;
	vertical-align: middle;
}

.bg {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fff no-repeat center;
	background-size: cover;
}

.title-container {
	height: 100px;
	text-shadow: #000 2px 0 0, #000 0 2px 0, #000 -1px 0 0, #000 0 -1px 0;
}

</style>
<style>
.title-img .v-image__image {
	filter: blur(4px);
}
</style>
