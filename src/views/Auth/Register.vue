<template>
	<div>
		<v-form v-model="valid" ref="form">
			<v-container>
				<v-row>
					<v-text-field label="用户名" v-model="name" :rules="requireRules">
						<v-icon slot="prepend">
							mdi-account-circle
						</v-icon>
					</v-text-field>
				</v-row>
				<v-row>
					<v-text-field label="密码" v-model="pass1" :rules="requireRules">
						<v-icon slot="prepend">
							mdi-lock
						</v-icon>
					</v-text-field>
				</v-row>
				<v-row>
					<v-text-field label="重复密码" v-model="pass2" :rules="passRules">
						<v-icon slot="prepend">
							mdi-lock
						</v-icon>
					</v-text-field>
				</v-row>
				<v-row class="text-center">
					<v-btn rounded color="primary" class="margin-auto" style="width: 60%;" :disabled="!name||!pass1||pass2!==pass1">
						注册
					</v-btn>
				</v-row>
				<v-row>
					<v-btn text color="primary" class="float-right" style="margin: 5px 5px 5px auto;" to="/user/auth/login">
						登陆账户
					</v-btn>
				</v-row>
			</v-container>
		</v-form>

	</div>
</template>

<script>
export default {
	name: "Register",
	data: () => ({
		valid: false,
		name: "",
		pass1: "",
		pass2: "",
		remember: false,
		requireRules: [
			v => !!v || "请填写该字段",
		],
	}),
	computed: {
		passRules() {
			return [
				v => !!v || "请填写该字段",
				v => v === this.pass1 || "密码不一致",
			];
		},
	},
	watch: {
		pass1() {
			this.$refs.form.validate();
		},
	},
};
</script>

<style scoped>

</style>
