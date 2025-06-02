import * as universal from '../entries/pages/data-viz/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/data-viz/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/data-viz/+page.js";
export const imports = ["_app/immutable/nodes/5.BPj4aJRW.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/C9FsPmav.js","_app/immutable/chunks/BGuqjiNC.js","_app/immutable/chunks/CEOGkXBr.js","_app/immutable/chunks/QwjbwpUV.js","_app/immutable/chunks/BmSeY9Tv.js","_app/immutable/chunks/CQYJ377Z.js","_app/immutable/chunks/D-oTdowa.js","_app/immutable/chunks/Cv88lbN3.js"];
export const stylesheets = ["_app/immutable/assets/5.CYh1ix1c.css"];
export const fonts = [];
