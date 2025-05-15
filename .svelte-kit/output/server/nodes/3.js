

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DZpVfoGt.js","_app/immutable/chunks/DDc05N5e.js","_app/immutable/chunks/B5OLWQwI.js","_app/immutable/chunks/Be66NCO-.js"];
export const stylesheets = [];
export const fonts = [];
