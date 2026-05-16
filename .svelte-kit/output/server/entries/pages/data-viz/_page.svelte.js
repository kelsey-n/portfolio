import { e as ensure_array_like, c as pop, p as push, d as stringify, f as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function DataViz_ContentCard($$payload, $$props) {
  push();
  let { data, imageFolder } = $$props;
  let hoveredImageIndex = 0;
  let gifVideoFailed = {};
  function isGif(filename) {
    return filename?.toLowerCase().endsWith(".gif");
  }
  function toWebp(filename) {
    return filename?.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  }
  function imgSrc(filename) {
    const name = isGif(filename) ? filename : toWebp(filename);
    return `/images/data-viz-page/${imageFolder}/${name}`;
  }
  function gifVideoSrc(filename, ext) {
    return imgSrc(filename.replace(/\.gif$/i, `.${ext}`));
  }
  const each_array_2 = ensure_array_like(data.images);
  $$payload.out += `<div class="img-preview-content"><div class="main-content-flex svelte-3ceetb"><div class="content-description-flex-child svelte-3ceetb"><div class="flex flex-wrap gap-2.5"></div> <div class="content-title svelte-3ceetb">${escape_html(data.title)} (${escape_html(data.year)})</div> <div class="project-description svelte-3ceetb">${escape_html(data.description)}</div> <div class="project-meta svelte-3ceetb">`;
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
      $$payload.out += `<a class="inline-a svelte-3ceetb"${attr("href", data.featured_links[i])} target="_blank" rel="noopener noreferrer">${escape_html(link_text)}</a>${escape_html(i < data.featured.length - 1 ? ", " : "")}`;
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
      $$payload.out += `<a class="inline-a svelte-3ceetb"${attr("href", data.honors_links[i])} target="_blank" rel="noopener noreferrer">${escape_html(link_text)}</a>${escape_html(i < data.featured.length - 1 ? ", " : "")}`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mini-image-gallery-flex svelte-3ceetb"><!--[-->`;
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let image = each_array_2[i];
    if (isGif(image) && !gifVideoFailed[image]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<video autoplay loop muted playsinline${attr("class", `svelte-3ceetb ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}><source${attr("src", gifVideoSrc(image, "webm"))} type="video/webm"> <source${attr("src", gifVideoSrc(image, "mp4"))} type="video/mp4"></video>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img${attr("src", imgSrc(image))} alt="mini carousel" loading="lazy"${attr("class", `svelte-3ceetb ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <button><a class="view-project svelte-3ceetb"${attr("href", data.content_link)} target="_blank" rel="noopener noreferrer">View project</a></button> <div class="image-description svelte-3ceetb">${escape_html(data.image_descriptions[hoveredImageIndex])}</div></div> <div class="image-container-flex-child svelte-3ceetb"><!---->`;
  {
    if (isGif(data.images[hoveredImageIndex]) && !gifVideoFailed[data.images[hoveredImageIndex]]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<video class="main-preview-img svelte-3ceetb" autoplay loop muted playsinline><source${attr("src", gifVideoSrc(data.images[hoveredImageIndex], "webm"))} type="video/webm"> <source${attr("src", gifVideoSrc(data.images[hoveredImageIndex], "mp4"))} type="video/mp4"></video>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img class="main-preview-img svelte-3ceetb"${attr("src", imgSrc(data.images[hoveredImageIndex]))}${attr("alt", data.image_alts?.[hoveredImageIndex] ?? "")} loading="lazy">`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function DataViz_HScrollContainer($$payload, $$props) {
  push();
  let { data } = $$props;
  let currentImageIndex = 0;
  let scrollOffset = 0;
  const each_array = ensure_array_like(data);
  $$payload.out += `<div class="minimap-container svelte-87r1jl"><div class="minimap svelte-87r1jl">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="items svelte-87r1jl"${attr("style", `transform: translateX(-${stringify(scrollOffset)}px)`)}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let image = each_array[i];
    if (image.show === "Y") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button${attr("class", `item ${stringify(i === currentImageIndex ? "active" : "inactive")} svelte-87r1jl`)}><img${attr("src", `/images/data-viz-page/${stringify(image.imageFolder)}/carouselImage.webp`)}${attr("alt", image.mainImageAlt)} loading="lazy" class="svelte-87r1jl"> <div class="tooltip svelte-87r1jl">${escape_html(image.content.title)}</div></button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="img-preview svelte-87r1jl">`;
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
