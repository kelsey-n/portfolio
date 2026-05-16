import * as universal from '../entries/pages/writing/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/6.Dddwtq2t.js","_app/immutable/chunks/V6dr3ior.js","_app/immutable/chunks/CD05__8w.js","_app/immutable/chunks/D1NiOuUq.js","_app/immutable/chunks/DU3zb_iM.js","_app/immutable/chunks/Bb3gYvHY.js","_app/immutable/chunks/oNWd9Yd_.js","_app/immutable/chunks/B8vN0Z_n.js","_app/immutable/chunks/ClrhxLdA.js","_app/immutable/chunks/kk4MYlXW.js","_app/immutable/chunks/D8OmcFrP.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/6.Fj36OFf9.css"];
export const fonts = [];
