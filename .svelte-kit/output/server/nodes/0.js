import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.7WkvS1SX.js","_app/immutable/chunks/C9FsPmav.js","_app/immutable/chunks/BGuqjiNC.js","_app/immutable/chunks/CQYJ377Z.js","_app/immutable/chunks/D-oTdowa.js","_app/immutable/chunks/Cv88lbN3.js","_app/immutable/chunks/DR8lZ7av.js","_app/immutable/chunks/B7BBiB2e.js","_app/immutable/chunks/BGtYjn4_.js"];
export const stylesheets = ["_app/immutable/assets/0.DuZJqykW.css"];
export const fonts = [];
