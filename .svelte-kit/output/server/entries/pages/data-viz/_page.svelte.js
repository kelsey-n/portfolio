import "clsx";
import { e as ensure_array_like, f as stringify, c as pop, p as push } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
const tagClassMap = {
  D3: "tech",
  Scrollama: "tech",
  "Creative coding": "design",
  "Website development": "tech"
};
function DataViz_ContentCard($$payload, $$props) {
  push();
  let { data } = $$props;
  let hoveredImageIndex = 0;
  const each_array = ensure_array_like(data.content.tags);
  const each_array_1 = ensure_array_like(data.content.images);
  $$payload.out += `<div class="img-preview-content"><div class="content-title svelte-e6qsv1">${escape_html(data.content.title)}</div> <div class="main-content-flex svelte-e6qsv1"><div class="image-container-flex-child svelte-e6qsv1"${attr("style", `background-image: url('${stringify(data.content.images[hoveredImageIndex])}')`)}></div> <div class="content-description-flex-child svelte-e6qsv1"><div class="flex flex-wrap gap-2.5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<div${attr("class", `tag-card ${stringify(tagClassMap[tag])} svelte-e6qsv1`)}>${escape_html(tag)}</div>`;
  }
  $$payload.out += `<!--]--></div> <div>Network chart coded with D3</div> <div>FEATURED:</div> <button>View project</button> <div class="mini-image-gallery-flex svelte-e6qsv1"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let image = each_array_1[i];
    $$payload.out += `<img${attr("src", image)} alt="mini carousel"${attr("class", `svelte-e6qsv1 ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  pop();
}
function DataVizCarousel($$payload, $$props) {
  push();
  let images = [
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 0",
      content: {
        title: "Streets to Stability, 2024",
        images: [
          "/images/12 Recommendations.jpg",
          "/images/Cycle of homlessness.jpg",
          "/images/Homeless Service providers-mission.jpg",
          "/images/1.Network_diagram-web.gif",
          "/images/landscape-City.jpg",
          "/images/SF Chart.png"
        ],
        tags: [
          "D3",
          "Scrollama",
          "Creative coding",
          "Website development"
        ]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 1",
      content: {
        title: "Content for image 1",
        images: ["/images/PLACEHOLDER.png"]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 2",
      content: {
        title: "Content for image 2",
        images: ["/images/PLACEHOLDER.png"]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 3",
      content: {
        title: "Content for image 3",
        images: ["/images/PLACEHOLDER.png"]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"]
      }
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"]
      }
    }
  ];
  let currentImageIndex = 0;
  const each_array = ensure_array_like(images);
  const each_array_1 = ensure_array_like(images);
  const each_array_2 = ensure_array_like(images);
  $$payload.out += `<div class="minimap-container svelte-1n2zwfq"><div class="img-preview svelte-1n2zwfq">`;
  DataViz_ContentCard($$payload, { data: images[currentImageIndex] });
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
    $$payload.out += `<div class="item svelte-1n2zwfq"><img${attr("src", image.src)}${attr("alt", image.title)} class="svelte-1n2zwfq"></div>`;
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
function _page($$payload) {
  DataVizCarousel($$payload);
}
export {
  _page as default
};
