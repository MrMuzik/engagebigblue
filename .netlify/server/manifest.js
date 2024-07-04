export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B5t06twx.js","app":"_app/immutable/entry/app.DTu2Vmdj.js","imports":["_app/immutable/entry/start.B5t06twx.js","_app/immutable/chunks/entry.CV87iiQH.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DTu2Vmdj.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BjOwGYW9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/fun",
				pattern: /^\/fun\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
