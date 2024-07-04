

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Dc3QgEo6.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D2HwgZYd.js","_app/immutable/chunks/entry.DCU9zG1O.js"];
export const stylesheets = [];
export const fonts = [];
