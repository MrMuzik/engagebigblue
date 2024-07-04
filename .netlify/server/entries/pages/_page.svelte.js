import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-3xl font-bold underline" data-svelte-h="svelte-7qr3yx">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <form name="netlify-form-example" method="POST" action="/success" netlify-honeypot="bot-field" data-netlify="true" data-svelte-h="svelte-44q8bl"><input type="hidden" name="form-name" value="netlify-form-example"> <label for="name">Name</label> <input name="name" id="name" required placeholder="Name" type="text"> <label for="email">Email</label> <input name="email" id="email" required placeholder="Email" type="email"> <label for="message">Message</label> <input name="message" id="message" required placeholder="Message" type="text"> <input type="submit" value="Submit"></form>`;
});
export {
  Page as default
};
