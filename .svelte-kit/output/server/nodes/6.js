import * as universal from '../entries/pages/data-viz-2/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/data-viz-2/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/data-viz-2/+page.js";
export const imports = ["_app/immutable/nodes/6.CuZguJkM.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/XKtM3hzY.js","_app/immutable/chunks/CD_LWhVA.js","_app/immutable/chunks/DKTYpNqZ.js","_app/immutable/chunks/DudfYidB.js","_app/immutable/chunks/Dv1Ts413.js","_app/immutable/chunks/DvF9XJwG.js","_app/immutable/chunks/DsKnfnfD.js","_app/immutable/chunks/CdHnkyka.js","_app/immutable/chunks/B4ZV3ql7.js"];
export const stylesheets = ["_app/immutable/assets/6.B1LL833r.css","_app/immutable/assets/DataViz_ContentCard.BlIi4QpS.css"];
export const fonts = [];
