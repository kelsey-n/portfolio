export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","data/articles.csv","data/dataviz-projects.csv","favicon.png","fonts/Caveat-Regular.ttf","fonts/Marcellus-Regular.ttf","fonts/Pacifico-Regular.ttf","images/.DS_Store","images/data-viz-page/.DS_Store","images/data-viz-page/climateworks/PLACEHOLDER.png","images/data-viz-page/climateworks/carouselImage.png","images/data-viz-page/dataviztools/PLACEHOLDER.png","images/data-viz-page/dataviztools/carouselImage.png","images/data-viz-page/decadewrapped/PLACEHOLDER.png","images/data-viz-page/decadewrapped/carouselImage.png","images/data-viz-page/nysbroadband/PLACEHOLDER.png","images/data-viz-page/nysbroadband/carouselImage.png","images/data-viz-page/perkins/PLACEHOLDER.png","images/data-viz-page/perkins/carouselImage.png","images/data-viz-page/streetstostability/1.Network_diagram-web.gif","images/data-viz-page/streetstostability/12 Recommendations.jpg","images/data-viz-page/streetstostability/Cycle of homelessness.jpg","images/data-viz-page/streetstostability/Homeless Service providers-mission.jpg","images/data-viz-page/streetstostability/SF Chart.png","images/data-viz-page/streetstostability/carouselImage.png","images/data-viz-page/streetstostability/landscape-City.jpg","images/data-viz-page/subwayridership/PLACEHOLDER.png","images/data-viz-page/subwayridership/carouselImage.png","images/data-viz-page/tortureddatavizdept/IIB Instagram Grid.jpeg","images/data-viz-page/tortureddatavizdept/IIB Intro animation.png","images/data-viz-page/tortureddatavizdept/IIB Mood annotated.png","images/data-viz-page/tortureddatavizdept/IIB Song annotated.png","images/data-viz-page/tortureddatavizdept/carouselImage.png","images/flower headshot 1.png","images/writing-page/header-1.png","images/writing-page/header-2.png","images/writing-page/header-3.png","images/writing-page/header-4.png","images/writing-page/header-5.png","images/writing-page/header-6.png"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png",".ttf":"font/ttf",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Dm8brYiX.js",app:"_app/immutable/entry/app.D8kkIPoW.js",imports:["_app/immutable/entry/start.Dm8brYiX.js","_app/immutable/chunks/Cx8x4VW9.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/BpRQwZAL.js","_app/immutable/entry/app.D8kkIPoW.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/B-kb8TVN.js","_app/immutable/chunks/DDc05N5e.js","_app/immutable/chunks/DUz0Gi5H.js","_app/immutable/chunks/CQSJUSQe.js","_app/immutable/chunks/BpRQwZAL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/contact","/data-viz-2","/data/dataviz-projects.csv","/data-viz","/writing-2","/data/articles.csv","/writing"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
