import * as universal from '../entries/pages/data-viz-2/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/data-viz-2/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/data-viz-2/+page.js";
export const imports = ["_app/immutable/nodes/6.B3-KWl6h.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/DDc05N5e.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/Be66NCO-.js","_app/immutable/chunks/DrE1IaP1.js","_app/immutable/chunks/CQSJUSQe.js","_app/immutable/chunks/B-kb8TVN.js","_app/immutable/chunks/DivZuvEe.js","_app/immutable/chunks/D1FNOm-C.js","_app/immutable/chunks/Dmu43BtU.js"];
export const stylesheets = ["_app/immutable/assets/6.BDotKJIu.css","_app/immutable/assets/DataViz_ContentCard.DA03ZpB2.css"];
export const fonts = [];
