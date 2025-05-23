import { e as ensure_array_like, d as stringify, c as pop, p as push } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
import { p as page } from "../../chunks/index3.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  const each_array = ensure_array_like([
    { href: `${base}/writing`, label: "Writing" },
    {
      href: `${base}/data-viz`,
      label: { full: "Data viz", short: "Dataviz" }
    }
  ]);
  $$payload.out += `<nav class="bg-navigation flex items-center justify-between p-4 bg-white border-b-2 border-b-[var(--color-pink)]"><a href="/"${attr("class", `relative px-2.5 text-lg text-black transition-colors duration-300 ease-in-out ${stringify(page.url.pathname === "/" ? "active-link" : "nav-link")} svelte-2uoxzk`)}><span class="hidden sm:inline">KELSEY NANAN</span> <span class="inline sm:hidden">KN</span></a> <div class="flex space-x-5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { href, label } = each_array[$$index];
    $$payload.out += `<a${attr("href", href)}${attr("class", `relative px-1.5 text-lg text-black transition-colors duration-300 ease-in-out ${stringify(page.url.pathname === href ? "active-link" : "nav-link")} svelte-2uoxzk`)}>`;
    if (typeof label === "string") {
      $$payload.out += "<!--[-->";
      $$payload.out += `${escape_html(label)}`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="hidden sm:inline">${escape_html(label.full)}</span> <span class="inline sm:hidden">${escape_html(label.short)}</span>`;
    }
    $$payload.out += `<!--]--></a>`;
  }
  $$payload.out += `<!--]--></div></nav> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
