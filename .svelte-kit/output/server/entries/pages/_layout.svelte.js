import { d as current_component, e as ensure_array_like, f as stringify, c as pop, p as push } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  onDestroy(() => {
  });
  const each_array = ensure_array_like([
    { href: "/writing", label: "Writing" },
    { href: "/data-viz", label: "Data viz" }
  ]);
  $$payload.out += `<nav class="bg-navigation flex items-center justify-between p-4"><a href="/"${attr("class", `relative px-2.5 text-lg text-white transition-colors duration-300 ease-in-out ${stringify(page.url.pathname === "/" ? "active-link-flower" : "nav-link")} svelte-if5e0m`)}>KELSEY NANAN</a> <div class="flex space-x-5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { href, label } = each_array[$$index];
    $$payload.out += `<a${attr("href", href)}${attr("class", `relative px-1.5 text-lg text-white transition-colors duration-300 ease-in-out ${stringify(page.url.pathname === href ? "active-link" : "nav-link")} svelte-if5e0m`)}>${escape_html(label)}</a>`;
  }
  $$payload.out += `<!--]--></div></nav> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
