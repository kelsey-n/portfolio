import { e as ensure_array_like, d as stringify, c as pop, p as push } from "./index2.js";
import { e as escape_html } from "./escaping.js";
import { a as attr } from "./attributes.js";
function DataViz_ContentCard($$payload, $$props) {
  push();
  let { data, imageFolder } = $$props;
  let hoveredImageIndex = 0;
  const each_array = ensure_array_like(data.images);
  $$payload.out += `<div class="img-preview-content"><div class="content-title svelte-yangno">${escape_html(data.title)}</div> <div class="main-content-flex svelte-yangno"><div class="image-container-flex-child svelte-yangno"${attr("style", `background-image: url('/images/data-viz-page/${stringify(imageFolder)}/${stringify(data.images[hoveredImageIndex])}')`)}></div> <div class="content-description-flex-child svelte-yangno"><div class="flex flex-wrap gap-2.5"></div> <div class="project-description svelte-yangno">Network chart coded with D3</div> <div class="project-meta svelte-yangno"><div><strong>FEATURED:</strong> San Francisco Standard</div> <div><strong>HONORS:</strong> IIB Awards 2024 Longlist</div></div> <div class="image-description svelte-yangno">current image description - INCLUDE TOOLS HERE IN LIEU OF TAGS</div> <div class="mini-image-gallery-flex svelte-yangno"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let image = each_array[i];
    $$payload.out += `<img${attr("src", `/images/data-viz-page/${stringify(imageFolder)}/${stringify(image)}`)} alt="mini carousel"${attr("class", `svelte-yangno ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}>`;
  }
  $$payload.out += `<!--]--></div> <button class="view-project svelte-yangno">View project</button></div></div></div>`;
  pop();
}
export {
  DataViz_ContentCard as D
};
