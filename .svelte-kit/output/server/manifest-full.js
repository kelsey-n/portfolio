export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set([".nojekyll","data/articles.csv","favicon.png","fonts/Caveat-Regular.ttf","fonts/Marcellus-Regular.ttf","fonts/Pacifico-Regular.ttf","images/1.Network_diagram-web.gif","images/12 Recommendations.jpg","images/Cycle of homlessness.jpg","images/Homeless Service providers-mission.jpg","images/PLACEHOLDER.png","images/SF Chart.png","images/landscape-City.jpg","images/writing-page/image 57 (1).png"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png",".ttf":"font/ttf",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BYuv2SeI.js",app:"_app/immutable/entry/app.C5CkwTpA.js",imports:["_app/immutable/entry/start.BYuv2SeI.js","_app/immutable/chunks/DkhYzJzw.js","_app/immutable/chunks/Cc1twhni.js","_app/immutable/chunks/Sg27uiHz.js","_app/immutable/entry/app.C5CkwTpA.js","_app/immutable/chunks/Cc1twhni.js","_app/immutable/chunks/WfDmi9bh.js","_app/immutable/chunks/DiLT7otx.js","_app/immutable/chunks/DZ7YCl-3.js","_app/immutable/chunks/DoPS3Ei9.js","_app/immutable/chunks/Sg27uiHz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/data-viz",
				pattern: /^\/data-viz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
