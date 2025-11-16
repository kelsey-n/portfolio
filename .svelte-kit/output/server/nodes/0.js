import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.-Q4IzdJU.js","_app/immutable/chunks/C9FsPmav.js","_app/immutable/chunks/BGuqjiNC.js","_app/immutable/chunks/CQYJ377Z.js","_app/immutable/chunks/D-oTdowa.js","_app/immutable/chunks/Cv88lbN3.js","_app/immutable/chunks/D0Jgk_q2.js","_app/immutable/chunks/B7BBiB2e.js","_app/immutable/chunks/Comt-smZ.js"];
export const stylesheets = ["_app/immutable/assets/0.DuZJqykW.css"];
export const fonts = [];
