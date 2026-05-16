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
  $$payload.out += `<div class="img-preview-content"><div class="main-content-flex svelte-mqzqeb"><div class="content-description-flex-child svelte-mqzqeb"><div class="flex flex-wrap gap-2.5"></div> <div class="content-title svelte-mqzqeb">${escape_html(data.title)} (${escape_html(data.year)})</div> <div class="project-description svelte-mqzqeb">${escape_html(data.description)}</div> <div class="project-meta svelte-mqzqeb">`;
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
      $$payload.out += `<a class="inline-a svelte-mqzqeb"${attr("href", data.featured_links[i])} target="_blank" rel="noopener noreferrer">${escape_html(link_text)}</a>${escape_html(i < data.featured.length - 1 ? ", " : "")}`;
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
      $$payload.out += `<a class="inline-a svelte-mqzqeb"${attr("href", data.honors_links[i])} target="_blank" rel="noopener noreferrer">${escape_html(link_text)}</a>${escape_html(i < data.featured.length - 1 ? ", " : "")}`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mini-image-gallery-flex svelte-mqzqeb"><!--[-->`;
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let image = each_array_2[i];
    if (isGif(image) && !gifVideoFailed[image]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<video autoplay loop muted playsinline${attr("class", `svelte-mqzqeb ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}><source${attr("src", gifVideoSrc(image, "webm"))} type="video/webm"> <source${attr("src", gifVideoSrc(image, "mp4"))} type="video/mp4"></video>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img${attr("src", imgSrc(image))} alt="mini carousel" loading="lazy"${attr("class", `svelte-mqzqeb ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <button><a class="view-project svelte-mqzqeb"${attr("href", data.content_link)} target="_blank" rel="noopener noreferrer">View project</a></button> <div class="image-description svelte-mqzqeb">${escape_html(data.image_descriptions[hoveredImageIndex])}</div></div> <div class="image-container-flex-child svelte-mqzqeb"><!---->`;
  {
    if (isGif(data.images[hoveredImageIndex]) && !gifVideoFailed[data.images[hoveredImageIndex]]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<video class="main-preview-img svelte-mqzqeb" autoplay loop muted playsinline><source${attr("src", gifVideoSrc(data.images[hoveredImageIndex], "webm"))} type="video/webm"> <source${attr("src", gifVideoSrc(data.images[hoveredImageIndex], "mp4"))} type="video/mp4"></video>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img class="main-preview-img svelte-mqzqeb"${attr("src", imgSrc(data.images[hoveredImageIndex]))}${attr("alt", data.image_alts?.[hoveredImageIndex] ?? "")} loading="lazy">`;
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
  let visibleProjects = data.map((item, i) => ({ ...item, originalIndex: i })).filter((item) => item.show === "Y");
  let highlightedProjects = visibleProjects.filter((p) => p.highlighted === "Y");
  let allWorkByYear = (() => {
    const nonHighlighted = visibleProjects.filter((p) => p.highlighted !== "Y");
    const yearMap = /* @__PURE__ */ new Map();
    for (const p of nonHighlighted) {
      const y = p.year || "Other";
      if (!yearMap.has(y)) yearMap.set(y, []);
      yearMap.get(y).push(p);
    }
    return [...yearMap.entries()].sort(([a], [b]) => Number(b) - Number(a)).map(([year, items]) => ({ year, items }));
  })();
  let currentProject = data[currentImageIndex];
  let isCurrentHighlighted = currentProject?.highlighted === "Y";
  let currentYear = currentProject?.year;
  let highlightedPos = { left: 0, width: 0 };
  let allWorkPos = { left: 0, width: 0 };
  let yearGroupPos = (
    /** @type {{ left: number, width: number }[]} */
    []
  );
  function labelShift(pos, labelWidth) {
    if (!pos.width) return 0;
    return Math.max(0, Math.min(scrollOffset - pos.left, pos.width - labelWidth - 8));
  }
  let highlightedShift = labelShift(highlightedPos, 116);
  let allWorkShift = labelShift(allWorkPos, 72);
  let yearShifts = yearGroupPos.map((pos) => labelShift(pos, 34));
  const each_array = ensure_array_like(highlightedProjects);
  const each_array_1 = ensure_array_like(allWorkByYear);
  $$payload.out += `<div class="minimap-container svelte-b3m1wz"><div class="minimap svelte-b3m1wz">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="items svelte-b3m1wz"${attr("style", `transform: translateX(-${stringify(scrollOffset)}px)`)}><div class="section-group svelte-b3m1wz"><div${attr("class", `section-header svelte-b3m1wz ${stringify([isCurrentHighlighted ? "label-active" : ""].filter(Boolean).join(" "))}`)}${attr("style", `transform: translateX(${stringify(highlightedShift)}px)`)}>Highlighted Work</div> <div class="thumb-row svelte-b3m1wz"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<div class="thumb-col svelte-b3m1wz"><button${attr("class", `item ${stringify(image.originalIndex === currentImageIndex ? "active" : "inactive")} svelte-b3m1wz`)}><img${attr("src", `/images/data-viz-page/${stringify(image.imageFolder)}/carouselImage.webp`)}${attr("alt", image.mainImageAlt)} loading="lazy" class="svelte-b3m1wz"> <div class="tooltip svelte-b3m1wz">${escape_html(image.content.title)}</div></button> <div${attr("class", `thumb-year svelte-b3m1wz ${stringify([
      image.originalIndex === currentImageIndex ? "label-active" : ""
    ].filter(Boolean).join(" "))}`)}>${escape_html(image.year)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="section-divider svelte-b3m1wz"></div> <div class="section-group svelte-b3m1wz"><div${attr("class", `section-header svelte-b3m1wz ${stringify([!isCurrentHighlighted ? "label-active" : ""].filter(Boolean).join(" "))}`)}${attr("style", `transform: translateX(${stringify(allWorkShift)}px)`)}>All Work</div> <div class="thumb-row all-work-row svelte-b3m1wz"><!--[-->`;
  for (let gi = 0, $$length = each_array_1.length; gi < $$length; gi++) {
    let yearGroup = each_array_1[gi];
    const each_array_2 = ensure_array_like(yearGroup.items);
    if (gi > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="year-divider svelte-b3m1wz"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="year-group svelte-b3m1wz"><div class="year-thumbs svelte-b3m1wz"><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let image = each_array_2[$$index_1];
      $$payload.out += `<button${attr("class", `item ${stringify(image.originalIndex === currentImageIndex ? "active" : "inactive")} svelte-b3m1wz`)}><img${attr("src", `/images/data-viz-page/${stringify(image.imageFolder)}/carouselImage.webp`)}${attr("alt", image.mainImageAlt)} loading="lazy" class="svelte-b3m1wz"> <div class="tooltip svelte-b3m1wz">${escape_html(image.content.title)}</div></button>`;
    }
    $$payload.out += `<!--]--></div> <div${attr("class", `year-label svelte-b3m1wz ${stringify([
      yearGroup.year === currentYear && !isCurrentHighlighted ? "label-active" : ""
    ].filter(Boolean).join(" "))}`)}${attr("style", `transform: translateX(${stringify(yearShifts[gi] ?? 0)}px)`)}>${escape_html(yearGroup.year)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="img-preview svelte-b3m1wz">`;
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
