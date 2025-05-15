import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DiI1WN6V.js","_app/immutable/chunks/DDc05N5e.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/B-kb8TVN.js","_app/immutable/chunks/DivZuvEe.js","_app/immutable/chunks/D1FNOm-C.js","_app/immutable/chunks/Cx8x4VW9.js","_app/immutable/chunks/BpRQwZAL.js","_app/immutable/chunks/0t85L4fX.js"];
export const stylesheets = ["_app/immutable/assets/0.CHe9CyGH.css"];
export const fonts = [];
