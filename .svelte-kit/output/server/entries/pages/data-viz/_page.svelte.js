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
  $$payload.out += `<div class="img-preview-content"><div class="content-title svelte-1ydpajj">${escape_html(data.content.title)}</div> <div class="main-content-flex svelte-1ydpajj"><div class="image-container-flex-child svelte-1ydpajj"${attr("style", `background-image: url('${stringify(data.content.images[hoveredImageIndex])}')`)}></div> <div class="content-description-flex-child svelte-1ydpajj"><div class="flex flex-wrap gap-2.5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<div${attr("class", `tag-card ${stringify(tagClassMap[tag])} svelte-1ydpajj`)}>${escape_html(tag)}</div>`;
  }
  $$payload.out += `<!--]--></div> <div>Network chart coded with D3</div> <div>FEATURED:</div> <button>View project</button> <div class="mini-image-gallery-flex svelte-1ydpajj"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let image = each_array_1[i];
    $$payload.out += `<img${attr("src", image)} alt="mini carousel"${attr("class", `svelte-1ydpajj ${stringify([hoveredImageIndex === i ? "active" : ""].filter(Boolean).join(" "))}`)}>`;
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
  $$payload.out += `<div class="minimap-container svelte-1713h3s"><div class="img-preview svelte-1713h3s">`;
  DataViz_ContentCard($$payload, { data: images[currentImageIndex] });
  $$payload.out += `<!----></div> <div class="minimap svelte-1713h3s"><div class="indicator svelte-1713h3s"></div> <div class="minimap-work-labels svelte-1713h3s"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="minimap-work-label-space svelte-1713h3s"${attr("id", `minimap-work-label-${stringify(i)}`)}>`;
    if (i === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-work-label svelte-1713h3s"><span class="svelte-1713h3s">HIGHLIGHTED long label WORK</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-work-label svelte-1713h3s"><span class="svelte-1713h3s">ALL WORK</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (i === 6) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="minimap-work-label svelte-1713h3s"><span class="svelte-1713h3s">TEST</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="items svelte-1713h3s"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let image = each_array_1[i];
    $$payload.out += `<div class="item svelte-1713h3s"><img${attr("src", image.src)}${attr("alt", image.title)} class="svelte-1713h3s"></div>`;
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
