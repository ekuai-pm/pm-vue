import Vue from "vue";
import Vuex from "vuex";
import Run from "./modules/Run";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Run,
	},
});
