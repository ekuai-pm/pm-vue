const Run = {
	namespaced: true,
	state: () => ({
		url: ["", ""],
	}),
	mutations: {
		updateUrl(state, e) {
			state.url = e;
		},
	},
};
export default Run;
