import * as universal from '../entries/pages/data-viz/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/data-viz/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/data-viz/+page.js";
export const imports = ["_app/immutable/nodes/5.DFyzVCW9.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/DDc05N5e.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/Be66NCO-.js","_app/immutable/chunks/DrE1IaP1.js","_app/immutable/chunks/CQSJUSQe.js","_app/immutable/chunks/DUz0Gi5H.js","_app/immutable/chunks/DivZuvEe.js","_app/immutable/chunks/BpRQwZAL.js","_app/immutable/chunks/Dmu43BtU.js","_app/immutable/chunks/B-kb8TVN.js","_app/immutable/chunks/D1FNOm-C.js"];
export const stylesheets = ["_app/immutable/assets/5.DJdjj7q7.css","_app/immutable/assets/DataViz_ContentCard.DA03ZpB2.css"];
export const fonts = [];
