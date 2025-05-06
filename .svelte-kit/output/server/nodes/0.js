import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.3DSGCHDV.js","_app/immutable/chunks/XKtM3hzY.js","_app/immutable/chunks/CD_LWhVA.js","_app/immutable/chunks/DvF9XJwG.js","_app/immutable/chunks/DsKnfnfD.js","_app/immutable/chunks/CdHnkyka.js","_app/immutable/chunks/DtuQQmKw.js","_app/immutable/chunks/CKwbQGY4.js","_app/immutable/chunks/IA-a2NSC.js"];
export const stylesheets = ["_app/immutable/assets/0.DjHtAxM2.css"];
export const fonts = [];
