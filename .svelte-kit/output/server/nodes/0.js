import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DASGZL3x.js","_app/immutable/chunks/6y9qEOva.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/D8fX2RL3.js","_app/immutable/chunks/CY_8yiUK.js","_app/immutable/chunks/BoF0LhHx.js","_app/immutable/chunks/CUovEeFx.js","_app/immutable/chunks/BOktUsm1.js","_app/immutable/chunks/CKx49QUS.js","_app/immutable/chunks/hxrMTUKf.js"];
export const stylesheets = ["_app/immutable/assets/0.BSDdA2yg.css"];
export const fonts = [];
