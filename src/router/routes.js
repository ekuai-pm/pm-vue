const routesRaw = [{
	path: "/",
	component: () => import( /* webpackChunkName: "util" */ "@/views/Home.vue"),
}, {
	path: "/user",
	redirect: "/user/login",
	component: () => import( /* webpackChunkName: "user" */ "@/views/user/User.vue"),
	children: [{
		path: "login",
		component: () => import( /* webpackChunkName: "user" */ "@/views/user/Login.vue"),
	}, {
		path: "register",
		component: () => import( /* webpackChunkName: "user" */ "@/views/user/Register.vue"),
	}],
}, {
	path: "/redirect",
	component: () => import( /* webpackChunkName: "util" */ "@/views/Utils/Redirect.vue"),
}, {
	path: "*",
	component: () => import( /* webpackChunkName: "util" */ "@/views/error/404.vue"),
}];

export default routesRaw;
