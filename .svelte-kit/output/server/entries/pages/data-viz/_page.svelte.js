import { e as ensure_array_like, d as stringify, c as pop, p as push, f as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function DataViz_ContentCard($$payload, $$props) {
  push();
  let { data, imageFolder } = $$props;
  let hoveredImageIndex = 0;
  const each_array_2 = ensure_array_like(data.images);
  $$payload.out += `<div class="img-preview-content"><div class="main-content-flex svelte-1tw2um4"><div class="content-description-flex-child svelte-1tw2um4"><div class="flex flex-wrap gap-2.5"></div> <div class="content-title svelte-1tw2um4">${escape_html(data.title)} (${escape_html(data.year)})</div> <div class="project-description svelte-1tw2um4">${escape_html(data.description)}</div> <div class="project-meta svelte-1tw2um4">`;
  if (data.client) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><strong>CLIENT:</strong> ${escape_html(data.client)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.featured[0] !== "") {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data.featured);
    $$payload.out += `<div><strong>FEATURED:</strong> <!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let link_text = each_array[i];
      $$payload.out += `<a class="inline-a svelte-1tw2um4"${attr("href", data.featured_links[i])} target="_blank" rel="noopener noreferrer">${escape_html(link_text)}</a>${escape_html(i < data.featured.length - 1 ? ", " : "")}`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (data.honors[0] !== "") {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(data.honors);
    $$payload.out += `<div><strong>HONORS:</strong> <!--[-->`;
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let link_text = each_array_1[i];
      $$payload.out += `<a class="inline-a svelte-1tw2um4"${attr("href", data.honors_links[i])} target="_blank" rel="noopener noreferrer">${escape_html(link_text)}</a>${escape_html(i < data.featured.length - 1 ? ", " : "")}`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mini-image-gallery-flex svelte-1tw2um4"><!--[-->`;
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let image = each_array_2[i];
    $$payload.out += `<img${attr("src", `/images/data-viz-page/${stringify(imageFolder)}/${stringify(image)}`)} alt="mini carousel"${attr("class", `svelte-1tw2um4 ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}>`;
  }
  $$payload.out += `<!--]--></div> <button><a class="view-project svelte-1tw2um4"${attr("href", data.content_link)} target="_blank" rel="noopener noreferrer">View project</a></button> <div class="image-description svelte-1tw2um4">${escape_html(data.image_descriptions[hoveredImageIndex])}</div></div> <div class="image-container-flex-child svelte-1tw2um4"${attr("style", `background-image: url('/images/data-viz-page/${stringify(imageFolder)}/${stringify(data.images[hoveredImageIndex])}')`)}></div></div></div>`;
  pop();
}
function DataViz_HScrollContainer($$payload, $$props) {
  push();
  let { data } = $$props;
  let currentImageIndex = 0;
  const each_array = ensure_array_like(data);
  $$payload.out += `<div class="minimap-container svelte-1jkm038"><div class="minimap svelte-1jkm038"><div class="items svelte-1jkm038"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let image = each_array[i];
    if (image.show === "Y") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button${attr("class", `item ${stringify(i === currentImageIndex ? "active" : "inactive")} svelte-1jkm038`)}><img${attr("src", `/images/data-viz-page/${stringify(image.imageFolder)}/carouselImage.png`)}${attr("alt", image.mainImageAlt)} class="svelte-1jkm038"></button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div> <div class="img-preview svelte-1jkm038">`;
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
