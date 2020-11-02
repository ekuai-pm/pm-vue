import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import qs from "qs";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
Vue.prototype["$axios"] = {
	$get: axios.get,
	"$post": (url, data) => {
		return axios.post(url, qs.stringify(data));
	},
	...axios,
};
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount("#app");
