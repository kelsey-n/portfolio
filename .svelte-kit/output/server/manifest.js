export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","data/articles.csv","favicon.png","fonts/Caveat-Regular.ttf","fonts/Marcellus-Regular.ttf","fonts/Pacifico-Regular.ttf","images/1.Network_diagram-web.gif","images/12 Recommendations.jpg","images/Cycle of homlessness.jpg","images/Homeless Service providers-mission.jpg","images/PLACEHOLDER.png","images/SF Chart.png","images/landscape-City.jpg","images/writing-page/image 57 (1).png"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png",".ttf":"font/ttf",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DlbLRsJ1.js",app:"_app/immutable/entry/app.D0lDG5Gz.js",imports:["_app/immutable/entry/start.DlbLRsJ1.js","_app/immutable/chunks/B5BGyzdw.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/CUovEeFx.js","_app/immutable/entry/app.D0lDG5Gz.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/D8fX2RL3.js","_app/immutable/chunks/6y9qEOva.js","_app/immutable/chunks/CxY9QkdG.js","_app/immutable/chunks/DJZHxu-n.js","_app/immutable/chunks/CUovEeFx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/contact","/data-viz","/writing","/data/articles.csv"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
