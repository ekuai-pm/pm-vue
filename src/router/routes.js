const routesRaw = [{
	path: "/",
	component: () => import( /* webpackChunkName: "util" */ "@/views/Index/Index"),
}, {
	path: "/user",
	redirect: "/user/auth",
	component: () => import( /* webpackChunkName: "user" */ "@/views/Utils/EmptyFrame"),
	children: [{
		path: "auth",
		component: () => import( /* webpackChunkName: "user" */ "@/views/Auth/Auth"),
		children: [{
			path: "login",
			component: () => import( /* webpackChunkName: "user" */ "@/views/Auth/Login"),
		}, {
			path: "register",
			component: () => import( /* webpackChunkName: "user" */ "@/views/Auth/Register"),
		}],
	}, {
		path: "space",
		redirect: "/user/space/info",
		component: () => import( /* webpackChunkName: "user" */ "@/views/Space/Space"),
		children: [{
			path: "info",
			component: () => import( /* webpackChunkName: "user" */ "@/views/Space/Info"),
		}, {
			path: "*",
			component: () => import( /* webpackChunkName: "util" */ "@/views/Utils/E404"),
		}],
	}],
}, {
	path: "/redirect",
	component: () => import( /* webpackChunkName: "util" */ "@/views/Utils/EmptyFrame"),
}, {
	path: "*",
	component: () => import( /* webpackChunkName: "util" */ "@/views/Utils/E404"),
}];

export default routesRaw;
