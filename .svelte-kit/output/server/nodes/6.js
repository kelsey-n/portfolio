import * as universal from '../entries/pages/writing/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writing/+page.js";
export const imports = ["_app/immutable/nodes/6.XfMYaqQD.js","_app/immutable/chunks/CnKaMzhg.js","_app/immutable/chunks/C7B3XpwK.js","_app/immutable/chunks/BUrhISor.js","_app/immutable/chunks/BpWtXgp6.js","_app/immutable/chunks/BUvUH90u.js","_app/immutable/chunks/D7T07rg_.js","_app/immutable/chunks/CjgAE2AY.js","_app/immutable/chunks/CKfNmyFG.js","_app/immutable/chunks/CShCPsVQ.js","_app/immutable/chunks/BdMImfrd.js","_app/immutable/chunks/C03LSoLi.js"];
export const stylesheets = ["_app/immutable/assets/6.Fj36OFf9.css"];
export const fonts = [];
