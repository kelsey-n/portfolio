import * as universal from '../entries/pages/writing/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/6.RgqBP7Z8.js","_app/immutable/chunks/DiLT7otx.js","_app/immutable/chunks/Cc1twhni.js","_app/immutable/chunks/M8a5erIz.js","_app/immutable/chunks/WfDmi9bh.js","_app/immutable/chunks/DZ7YCl-3.js","_app/immutable/chunks/CYKkQRup.js","_app/immutable/chunks/C5cnXi1T.js","_app/immutable/chunks/DoPS3Ei9.js","_app/immutable/chunks/Sg27uiHz.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/6.t1ZczrtD.css"];
export const fonts = [];
