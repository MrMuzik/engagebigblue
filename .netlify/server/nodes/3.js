

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B_pI_7E5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D2HwgZYd.js"];
export const stylesheets = ["_app/immutable/assets/app.DmrTivwF.css"];
export const fonts = [];
