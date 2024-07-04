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
		client: {"start":"_app/immutable/entry/start.DfWSDoi_.js","app":"_app/immutable/entry/app.CxuKvuSN.js","imports":["_app/immutable/entry/start.DfWSDoi_.js","_app/immutable/chunks/entry.CSv0PGpu.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CxuKvuSN.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D2HwgZYd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/3.js'))
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
})());
