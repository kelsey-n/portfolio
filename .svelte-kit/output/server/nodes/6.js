import * as universal from '../entries/pages/writing/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/6.BsX8YzxJ.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/C9FsPmav.js","_app/immutable/chunks/BGuqjiNC.js","_app/immutable/chunks/CEOGkXBr.js","_app/immutable/chunks/CQYJ377Z.js","_app/immutable/chunks/D-oTdowa.js","_app/immutable/chunks/Cv88lbN3.js","_app/immutable/chunks/QwjbwpUV.js","_app/immutable/chunks/BmSeY9Tv.js","_app/immutable/chunks/B7BBiB2e.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/6.4rVCWCte.css"];
export const fonts = [];
