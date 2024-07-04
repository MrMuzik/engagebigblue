import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.QUIfboNG.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Mub6HdeI.js"];
export const stylesheets = [];
export const fonts = [];
