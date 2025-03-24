import * as universal from '../entries/pages/writing/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/6.CQYAnMiU.js","_app/immutable/chunks/6y9qEOva.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/JNjJBeGP.js","_app/immutable/chunks/D8fX2RL3.js","_app/immutable/chunks/CxY9QkdG.js","_app/immutable/chunks/CY_8yiUK.js","_app/immutable/chunks/CQZxwVAF.js","_app/immutable/chunks/DJZHxu-n.js","_app/immutable/chunks/CUovEeFx.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/6.t1ZczrtD.css"];
export const fonts = [];
