import { e as ensure_array_like, d as stringify, c as pop, p as push, f as bind_props } from "../../../chunks/index2.js";
import { D as DataViz_ContentCard } from "../../../chunks/DataViz_ContentCard.js";
import { a as attr } from "../../../chunks/attributes.js";
function DataVizCarousel($$payload, $$props) {
  push();
  let { data } = $$props;
  let currentImageIndex = 0;
  const each_array = ensure_array_like(data);
  const each_array_1 = ensure_array_like(data);
  const each_array_2 = ensure_array_like(data);
  $$payload.out += `<div class="minimap-container svelte-1n2zwfq"><div class="img-preview svelte-1n2zwfq">`;
  DataViz_ContentCard($$payload, {
    data: data[currentImageIndex].content,
    imageFolder: data[currentImageIndex].imageFolder
  });
  $$payload.out += `<!----></div> <div class="minimap svelte-1n2zwfq"><div class="indicator svelte-1n2zwfq"></div> <div class="minimap-labels svelte-1n2zwfq"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="minimap-label-space svelte-1n2zwfq">`;
    if (i === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label work svelte-1n2zwfq"><span class="svelte-1n2zwfq">HIGHLIGHTED long label WORK</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label work svelte-1n2zwfq"><span class="svelte-1n2zwfq">ALL WORK</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 4) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label work svelte-1n2zwfq"><span class="svelte-1n2zwfq">TEST</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 5) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label work svelte-1n2zwfq"><span class="svelte-1n2zwfq">another test</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="items svelte-1n2zwfq"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let image = each_array_1[i];
    $$payload.out += `<div class="item svelte-1n2zwfq"><img${attr("src", `/images/data-viz-page/${stringify(image.imageFolder)}/carouselImage.png`)}${attr("alt", image.mainImageAlt)} class="svelte-1n2zwfq"></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="minimap-labels svelte-1n2zwfq"><!--[-->`;
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    each_array_2[i];
    $$payload.out += `<div class="minimap-label-space year svelte-1n2zwfq">`;
    if (i === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label year svelte-1n2zwfq"><span class="svelte-1n2zwfq">test</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label year svelte-1n2zwfq"><span class="svelte-1n2zwfq">2024</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 5) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label year svelte-1n2zwfq"><span class="svelte-1n2zwfq">2023</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 6) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-label year svelte-1n2zwfq"><span class="svelte-1n2zwfq">2022</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let projects = data.projects;
  DataVizCarousel($$payload, { data: projects });
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
