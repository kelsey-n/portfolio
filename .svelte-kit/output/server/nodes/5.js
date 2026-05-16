import * as universal from '../entries/pages/data-viz/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/data-viz/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/data-viz/+page.js";
export const imports = ["_app/immutable/nodes/5.P1u_ky3d.js","_app/immutable/chunks/V6dr3ior.js","_app/immutable/chunks/CD05__8w.js","_app/immutable/chunks/D1NiOuUq.js","_app/immutable/chunks/DU3zb_iM.js","_app/immutable/chunks/ClrhxLdA.js","_app/immutable/chunks/kk4MYlXW.js","_app/immutable/chunks/Bb3gYvHY.js","_app/immutable/chunks/oNWd9Yd_.js","_app/immutable/chunks/B8vN0Z_n.js","_app/immutable/chunks/CgHXXIbY.js","_app/immutable/chunks/D8OmcFrP.js"];
export const stylesheets = ["_app/immutable/assets/5.FZBZPm96.css"];
export const fonts = [];
