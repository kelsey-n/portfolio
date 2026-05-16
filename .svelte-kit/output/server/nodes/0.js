import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BQ0ZFN3q.js","_app/immutable/chunks/BUrhISor.js","_app/immutable/chunks/C7B3XpwK.js","_app/immutable/chunks/BUvUH90u.js","_app/immutable/chunks/D7T07rg_.js","_app/immutable/chunks/CjgAE2AY.js","_app/immutable/chunks/CQaWgu8j.js","_app/immutable/chunks/BdMImfrd.js","_app/immutable/chunks/BMGCyyM6.js"];
export const stylesheets = ["_app/immutable/assets/0.CNsgL2iH.css"];
export const fonts = [];
