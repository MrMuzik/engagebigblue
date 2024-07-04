import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                  */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}
This is the success page.`;
});
export {
  Page as default
};
