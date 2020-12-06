const Run = {
	namespaced: true,
	state: () => ({
		url: ["", ""],
		authImg: "",
	}),
	mutations: {
		updateUrl(state, e) {
			state.url = e;
		},
		updateAuthImg(state, e) {
			state.authImg = e;
		},
	},
};
export default Run;
