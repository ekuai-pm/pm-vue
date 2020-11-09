<template>
	<v-footer dark padless>
		<v-card flat tile class="primary lighten-1 white--text text-center footer-card">
			<v-card-text class="footer-icon">
				<v-btn class="mx-4 white--text" icon href="https://github.com/ekuai-pm" target="_blank">
					<v-icon size="24px">
						mdi-github
					</v-icon>
				</v-btn>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-text class="white--text">
				Powered by
				<v-btn x-small text href="https://github.com/ekuai-pm" target="_blank">
					ekuai-pm
				</v-btn>
				<br/>
				&copy; ekuai 2020
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
.footer-card {
	width: 100%;
}

.footer-icon {
	padding: 4px;
}
</style>
