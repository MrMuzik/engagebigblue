

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.5BudOyvQ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Mub6HdeI.js"];
export const stylesheets = ["_app/immutable/assets/app.DmrTivwF.css"];
export const fonts = [];
