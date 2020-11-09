<template>
	<div>
		<v-form v-model="valid">
			<v-container>
				<v-row>
					<v-text-field label="用户名" v-model="name" :rules="requireRules">
						<v-icon slot="prepend">
							mdi-account-circle
						</v-icon>
					</v-text-field>
				</v-row>
				<v-row>
					<v-text-field label="密码" v-model="pass" :rules="requireRules">
						<v-icon slot="prepend">
							mdi-lock
						</v-icon>
					</v-text-field>
				</v-row>
				<v-row>
					<v-checkbox v-model="remember" label="记住密码"></v-checkbox>
				</v-row>
				<v-row class="text-center">
					<v-btn rounded color="primary" class="margin-auto" style="width: 60%;" :disabled="!name||!pass">
						登陆
					</v-btn>
				</v-row>
				<v-row>
					<v-btn text color="primary" class="float-right" style="margin: 5px 5px 5px auto;" to="/user/auth/register">注册账户</v-btn>
				</v-row>
			</v-container>
		</v-form>

	</div>
</template>

<script>
export default {
	name: "Login",
	data: () => ({
		valid: false,
		name: "",
		pass: "",
		remember: false,
		requireRules: [
			v => !!v || "请填写该字段",
		],
	}),
};
</script>

<style scoped>

</style>
