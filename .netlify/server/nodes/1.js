

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CvukX8iP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BjOwGYW9.js","_app/immutable/chunks/entry.CV87iiQH.js"];
export const stylesheets = [];
export const fonts = [];
