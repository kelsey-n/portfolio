import * as universal from '../entries/pages/writing/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/7.Dm5IjJVP.js","_app/immutable/chunks/BqGHGP1s.js","_app/immutable/chunks/XKtM3hzY.js","_app/immutable/chunks/CD_LWhVA.js","_app/immutable/chunks/DKTYpNqZ.js","_app/immutable/chunks/DvF9XJwG.js","_app/immutable/chunks/C6miZlw8.js","_app/immutable/chunks/DsKnfnfD.js","_app/immutable/chunks/DudfYidB.js","_app/immutable/chunks/Dv1Ts413.js","_app/immutable/chunks/CKwbQGY4.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/7.t1ZczrtD.css"];
export const fonts = [];
