export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","data/articles.csv","data/dataviz-projects.csv","favicon.png","fonts/Caveat-Regular.ttf","fonts/Marcellus-Regular.ttf","fonts/Pacifico-Regular.ttf","images/.DS_Store","images/data-viz-page/.DS_Store","images/data-viz-page/30dcc/NYC tree diameters.png","images/data-viz-page/30dcc/carbs by country.png","images/data-viz-page/30dcc/carouselImage.png","images/data-viz-page/30dcc/childhood stunting.png","images/data-viz-page/30dcc/dinosaurs.png","images/data-viz-page/30dcc/exoplanet radii.png","images/data-viz-page/30dcc/heart attack risk.png","images/data-viz-page/30dcc/loneliness survey.png","images/data-viz-page/30dcc/rep dem happiness.png","images/data-viz-page/30dcc/ski slope.png","images/data-viz-page/30dcc/sleep vs distress.png","images/data-viz-page/30dcc/state flowers.png","images/data-viz-page/30dcc/sunshine temp.png","images/data-viz-page/30dcc/time use survey.png","images/data-viz-page/30dcc/tree age in US.png","images/data-viz-page/30dcc/wes anderson movies.png","images/data-viz-page/climateworks/bubble animation.gif","images/data-viz-page/climateworks/carouselImage.png","images/data-viz-page/climateworks/climateworks accordion.png","images/data-viz-page/dataviztools/carouselImage.png","images/data-viz-page/dataviztools/d3.png","images/data-viz-page/dataviztools/data viz tools.gif","images/data-viz-page/dataviztools/intro.png","images/data-viz-page/decadewrapped/FramedImage.jpg","images/data-viz-page/decadewrapped/Relationship journey map with credit + lat am.png","images/data-viz-page/decadewrapped/carouselImage.png","images/data-viz-page/decadewrapped/t shirt.png","images/data-viz-page/fastfoodscape/carouselImage.png","images/data-viz-page/fastfoodscape/sort and hover.gif","images/data-viz-page/nycbivariate/carouselImage.png","images/data-viz-page/nycbivariate/screen recording.gif","images/data-viz-page/nysbroadband/broadband score.png","images/data-viz-page/nysbroadband/carouselImage.png","images/data-viz-page/nysbroadband/split view vid.gif","images/data-viz-page/nysbroadband/split view.png","images/data-viz-page/perkins/bivariate with data table.png","images/data-viz-page/perkins/carouselImage.png","images/data-viz-page/perkins/perkins carousel.png","images/data-viz-page/perkins/scrolly map.gif","images/data-viz-page/phrc/carouselImage copy.png","images/data-viz-page/phrc/carouselImage.png","images/data-viz-page/spotifydata/carouselImage.png","images/data-viz-page/spotifydata/left.png","images/data-viz-page/spotifydata/right.png","images/data-viz-page/streetstostability/1.Network_diagram-web.gif","images/data-viz-page/streetstostability/12 Recommendations.jpg","images/data-viz-page/streetstostability/Cycle of homelessness.jpg","images/data-viz-page/streetstostability/Frank Yara.png","images/data-viz-page/streetstostability/Homeless Service providers-mission.jpg","images/data-viz-page/streetstostability/SF Chart.png","images/data-viz-page/streetstostability/carouselImage.png","images/data-viz-page/streetstostability/landscape-City.jpg","images/data-viz-page/streetstostability/s2s scrolly.gif","images/data-viz-page/subwayridership/Covid subway ridership.gif","images/data-viz-page/subwayridership/carouselImage.png","images/data-viz-page/subwayridership/station ridership.png","images/data-viz-page/tortureddatavizdept/IIB Instagram Grid.jpeg","images/data-viz-page/tortureddatavizdept/IIB Intro animation.png","images/data-viz-page/tortureddatavizdept/IIB Mood annotated.png","images/data-viz-page/tortureddatavizdept/IIB Song annotated.png","images/data-viz-page/tortureddatavizdept/TS screen recording small.gif","images/data-viz-page/tortureddatavizdept/carouselImage.png","images/flower headshot 1.png","images/social-preview.png","images/writing-page/header-0.png","images/writing-page/header-1.png","images/writing-page/header-2.png","images/writing-page/header-3.png","images/writing-page/header-4.png","images/writing-page/header-5.png"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png",".ttf":"font/ttf",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.WnIr806N.js",app:"_app/immutable/entry/app.D8aDehxF.js",imports:["_app/immutable/entry/start.WnIr806N.js","_app/immutable/chunks/BfBSgzLp.js","_app/immutable/chunks/BGuqjiNC.js","_app/immutable/chunks/B7BBiB2e.js","_app/immutable/entry/app.D8aDehxF.js","_app/immutable/chunks/BGuqjiNC.js","_app/immutable/chunks/CQYJ377Z.js","_app/immutable/chunks/C9FsPmav.js","_app/immutable/chunks/D-oTdowa.js","_app/immutable/chunks/BmSeY9Tv.js","_app/immutable/chunks/B7BBiB2e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
