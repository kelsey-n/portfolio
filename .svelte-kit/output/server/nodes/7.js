import * as universal from '../entries/pages/writing/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/7.CnlaWFZA.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/DDc05N5e.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/Be66NCO-.js","_app/immutable/chunks/B-kb8TVN.js","_app/immutable/chunks/DUz0Gi5H.js","_app/immutable/chunks/C83LXa0-.js","_app/immutable/chunks/DivZuvEe.js","_app/immutable/chunks/DrE1IaP1.js","_app/immutable/chunks/CQSJUSQe.js","_app/immutable/chunks/BpRQwZAL.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/7.t1ZczrtD.css"];
export const fonts = [];
