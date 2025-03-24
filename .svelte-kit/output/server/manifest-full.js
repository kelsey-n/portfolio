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
		client: {start:"_app/immutable/entry/start.Ncv408bo.js",app:"_app/immutable/entry/app.CCaud7qp.js",imports:["_app/immutable/entry/start.Ncv408bo.js","_app/immutable/chunks/BOktUsm1.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/CUovEeFx.js","_app/immutable/entry/app.CCaud7qp.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/D8fX2RL3.js","_app/immutable/chunks/6y9qEOva.js","_app/immutable/chunks/CxY9QkdG.js","_app/immutable/chunks/DJZHxu-n.js","_app/immutable/chunks/CUovEeFx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
