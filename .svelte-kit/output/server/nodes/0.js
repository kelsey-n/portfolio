import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DIfFnUs7.js","_app/immutable/chunks/D1NiOuUq.js","_app/immutable/chunks/CD05__8w.js","_app/immutable/chunks/Bb3gYvHY.js","_app/immutable/chunks/oNWd9Yd_.js","_app/immutable/chunks/B8vN0Z_n.js","_app/immutable/chunks/PUWz_X9u.js","_app/immutable/chunks/D8OmcFrP.js","_app/immutable/chunks/BY2zRQEg.js"];
export const stylesheets = ["_app/immutable/assets/0.CNsgL2iH.css"];
export const fonts = [];
