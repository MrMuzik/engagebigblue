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
		client: {"start":"_app/immutable/entry/start.YkPItB8F.js","app":"_app/immutable/entry/app.CsgplANP.js","imports":["_app/immutable/entry/start.YkPItB8F.js","_app/immutable/chunks/entry.Dl1nZWAz.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CsgplANP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BjOwGYW9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
