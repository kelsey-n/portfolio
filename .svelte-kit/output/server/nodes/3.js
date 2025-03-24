

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DHnlCROi.js","_app/immutable/chunks/6y9qEOva.js","_app/immutable/chunks/DydQ9Nwy.js","_app/immutable/chunks/JNjJBeGP.js"];
export const stylesheets = [];
export const fonts = [];
