import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
  return `   <main>${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
