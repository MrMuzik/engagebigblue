

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DfQXsQvr.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BjOwGYW9.js"];
export const stylesheets = ["_app/immutable/assets/0.DmrTivwF.css"];
export const fonts = [];
