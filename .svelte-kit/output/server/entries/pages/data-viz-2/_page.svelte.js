import { e as ensure_array_like, d as stringify, c as pop, p as push, f as bind_props } from "../../../chunks/index2.js";
import { D as DataViz_ContentCard } from "../../../chunks/DataViz_ContentCard.js";
import { a as attr } from "../../../chunks/attributes.js";
function DataViz_HScrollContainer($$payload, $$props) {
  push();
  let { data } = $$props;
  let currentImageIndex = 0;
  const each_array = ensure_array_like(data);
  $$payload.out += `<div class="minimap-container svelte-42h9k7"><div class="minimap svelte-42h9k7"><div class="items svelte-42h9k7"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let image = each_array[i];
    $$payload.out += `<button${attr("class", `item ${stringify(i === currentImageIndex ? "active" : "inactive")} svelte-42h9k7`)}><img${attr("src", `/images/data-viz-page/${stringify(image.imageFolder)}/carouselImage.png`)}${attr("alt", image.mainImageAlt)} class="svelte-42h9k7"></button>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="img-preview svelte-42h9k7">`;
  DataViz_ContentCard($$payload, {
    data: data[currentImageIndex].content,
    imageFolder: data[currentImageIndex].imageFolder
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let projects = data.projects;
  DataViz_HScrollContainer($$payload, { data: projects });
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
