import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.C7EIkVpY.js","app":"_app/immutable/entry/app.DIlMu-Iy.js","imports":["_app/immutable/entry/start.C7EIkVpY.js","_app/immutable/chunks/entry.CMQ1UAvP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DIlMu-Iy.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Mub6HdeI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
