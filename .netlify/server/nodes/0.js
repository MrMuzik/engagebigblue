

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CaOi8Mh1.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D2HwgZYd.js"];
export const stylesheets = ["_app/immutable/assets/app.DmrTivwF.css"];
export const fonts = [];
